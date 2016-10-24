<?php
namespace App\Http\Controllers;
use App\Descarga;
use App\DetalleDescarga;
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
            'detalle.*.producto' => 'required',
            'detalle.*.cantidad' => 'required',
            'detalle.*.precio'   => 'required'
        ]);
        if (!$request->input('detalle')) {
            return response()->json([
                'message' => array("Ingrese detalle para poder descontar..")
            ], 422);
        }

        $descargaData = array(
            'usuario' => Auth::user()->id,
            'estado_proceso' => 2,
        );
        $descarga = Descarga::create($descargaData);
        if ($descarga) {
            foreach ($request->input('detalle') as $key => $dt) {
                $detalleData = array(
                    'descarga'    => $descarga->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio']
                );
                DetalleDescarga::create($detalleData);
            }
        }
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Descarga Realizada con exito..'
        ));
    }
    public function eliminar($id){
    }
    public function actualizar(Request $request){
    }
}
