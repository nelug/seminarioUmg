<?php
namespace App\Http\Controllers;

use App\Venta;
use App\DetalleVenta;
use App\Producto;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class VentaController extends Controller {

    public function obtenerTodos()
    {
        $data = Venta::with('detalle', 'cliente', 'estado_proceso', 'usuario')->get();
        return response()->json($data);
    }

    public function obtenerId($id){
        $data = Venta::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){
        $validar = $this->validate($request, [
            'cliente'    => 'required',
            'detalle.*.producto' => 'required',
            'detalle.*.cantidad' => 'required',
            'detalle.*.precio'   => 'required',
            'detalle.*.ganancia' => 'required'
        ]);

        if (!$request->input('detalle')) {
            return response()->json([
                'message' => array("Ingrese detalle para poder almacenar..")
            ], 422);
        }

        foreach ($request->input('detalle') as $key => $dt) {
            $pr = Producto::find($dt['producto']);
            if ($pr->existencia < $dt['cantidad']) {
                return response()->json([
                    'message' => array("El producto | " . $pr->descripcion . ' | no cuenta con la cantidas solicitada la existencia es de => '. $pr->existencia )
                ], 422);
            }
        }

        $ventaData = array(
            'cliente' => $request->input('cliente'),
            'usuario' => Auth::user()->id,
            'estado_proceso' => 2,
        );

        $venta = Venta::create($ventaData);
        $total = 0;

        if ($venta) {
            foreach ($request->input('detalle') as $key => $dt) {
                $detalleData = array(
                    'venta'    => $venta->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio'],
                    'ganancia' => $dt['ganancia']
                );

                $producto = Producto::find($dt['producto']);
                $total += ($dt['cantidad'] * $dt['precio']);

                if ($producto) {
                    DetalleVenta::create($detalleData);
                    $producto->existencia -= $dt['cantidad'];
                    $producto->save();
                }

            }
            DB::table('ventas')->whereId($venta->id)->update(['total' => $total]);
        }
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Venta almacenado con exito..'
        ));
    }

    public function detalle($id){
        return DetalleVenta::with('producto')->whereVenta($id)->get();
    }

    public function actualizar(Request $request){
    }
}
