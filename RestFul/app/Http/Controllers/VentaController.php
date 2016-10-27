<?php
namespace App\Http\Controllers;
use App\Venta;
use App\DetalleVenta;
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

        $ventaData = array(
            'cliente' => $request->input('cliente'),
            'usuario' => Auth::user()->id,
            'estado_proceso' => 2,
        );

        $venta = Venta::create($ventaData);

        if ($venta) {
            foreach ($request->input('detalle') as $key => $dt) {
                $detalleData = array(
                    'venta'    => $venta->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio'],
                    'ganancia' => $dt['ganancia']
                );
                DetalleVenta::create($detalleData);
            }
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
