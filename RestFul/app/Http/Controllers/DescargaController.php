<?php
namespace App\Http\Controllers;
use App\Descarga;
use App\DetalleDescarga;
use App\Producto;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
class DescargaController extends Controller {
    public function obtenerTodos()
    {
        $data = Descarga::with('detalle','estado_proceso','usuario')->get();
        return response()->json($data);
    }
    public function obtenerId($id){
        $data = Descarga::find($id);
        return response()->json($data);
    }
    public function crear(Request $request){
        $validar = $this->validate($request, [
            'nota' => 'required',
            'detalle.*.producto' => 'required|numeric',
            'detalle.*.cantidad' => 'required|numeric',
            'detalle.*.precio'   => 'required|numeric'
        ]);
        if (!$request->input('detalle')) {
            return response()->json([
                'message' => array("Ingrese detalle para poder descontar..")
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

        $descargaData = array(
            'usuario' => Auth::user()->id,
            'estado_proceso' => 2,
            'nota' => $request->input('nota')
        );

        $descarga = Descarga::create($descargaData);
        $total = 0;
        if ($descarga) {
            foreach ($request->input('detalle') as $key => $dt) {
                $detalleData = array(
                    'descarga'    => $descarga->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio']
                );
                $producto = Producto::find($dt['producto']);
                $total += ($dt['cantidad'] * $dt['precio']);
                if ($producto) {
                    DetalleDescarga::create($detalleData);
                    $producto->existencia -= $dt['cantidad'];
                    $producto->save();
                }
            }
            DB::table('descargas')->whereId($descarga->id)->update(['total' => $total]);
        }
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Descarga Realizada con exito..'
        ));
    }

    public function detalle($id){
        return DetalleDescarga::with('producto')->whereDescarga($id)->get();
    }

    public function eliminar($id){
    }
    public function actualizar(Request $request){
    }
}
