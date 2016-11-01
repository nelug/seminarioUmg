<?php
namespace App\Http\Controllers;
use App\Cotizacion;
use App\DetalleCotizacion;
use App\Producto;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use Auth;
class CotizacionController extends Controller {
    public function obtenerTodos()
    {
        $data = Cotizacion::with('detalle', 'cliente', 'estado_proceso','usuario')->get();
        return response()->json($data);
    }
    public function obtenerId($id){
        $data = Cotizacion::find($id);
        return response()->json($data);
    }
    public function crear(Request $request){
        $validar = $this->validate($request, [
            'cliente' => 'required',
            'detalle.*.producto' => 'required|numeric',
            'detalle.*.cantidad' => 'required|numeric',
            'detalle.*.precio'   => 'required|numeric'
        ]);
        if (!$request->input('detalle')) {
            return response()->json([
                'message' => array("Ingrese detalle para poder almacenar la cotizacion..")
            ], 422);
        }
        foreach ($request->input('detalle') as $key => $dt) {
            $pr = Producto::find($dt['producto']);
            if ($pr->existencia < $dt['cantidad']) {
                return response()->json([
                    'message' => array("El producto | " . $pr->descripcion . ' | no cuenta con la cantidad solicitada la existencia es de => '. $pr->existencia )
                ], 422);
            }
        }

        $cotizacionData = array(
            'cliente' => $request->input('cliente'),
            'usuario' => Auth::user()->id,
            'estado_proceso' => 2,
        );
        $cotizacion = Cotizacion::create($cotizacionData);
        $total = 0;
        if ($cotizacion) {
            foreach ($request->input('detalle') as $key => $dt) {
                $detalleData = array(
                    'cotizacion'    => $cotizacion->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio']
                );
                $producto = Producto::find($dt['producto']);
                $total += ($dt['cantidad'] * $dt['precio']);
                if ($producto) {
                    DetalleCotizacion::create($detalleData);
                    $producto->existencia -= $dt['cantidad'];
                    $producto->save();
                }
            }
            DB::table('cotizaciones')->whereId($cotizacion->id)->update(['total' => $total]);
        }

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Cotizacion almacenado con exito..'
        ));
    }

    public function detalle($id){
        return DetalleCotizacion::with('producto')->whereCotizacion($id)->get();
    }

    public function eliminar($id){

    }

    public function actualizar(Request $request){

    }
}
