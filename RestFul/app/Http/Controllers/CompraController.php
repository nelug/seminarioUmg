<?php

namespace App\Http\Controllers;

use App\Compra;
use App\DetalleCompra;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use Auth;


class CompraController extends Controller {

    public function obtenerTodos()
    {
        $data = Compra::with('detalle', 'proveedor', 'estado_proceso', 'usuario')->get();
        return response()->json($data);
    }

    public function obtenerId($id){
        $data = Compra::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){
        $validar = $this->validate($request, [
            'proveedor'    => 'required',
            'numero_documento'   => 'required',
            'fecha_documento'    => 'required',
            'detalle.*.producto' => 'required',
            'detalle.*.cantidad' => 'required',
            'detalle.*.precio'   => 'required'
        ]);

        if (!$request->input('detalle')) {
            return response()->json([
                'message' => array("Ingrese detalle para poder almacenar..")
            ], 422);
        }

        $compraData = array(
            'proveedor' => $request->input('proveedor'),
            'numero_documento' => $request->input('numero_documento'),
            'fecha_documento'  => $request->input('fecha_documento'),
            'usuario' => Auth::user()->id
        );

        $compra = Compra::create($compraData);

        if ($compra) {
            foreach ($request->input('detalle') as $key => $dt) {

                $detalleData = array(
                    'compra'    => $compra->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio']
                );

                DetalleCompra::create($detalleData);
            }
        }

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Compra almacenada con exito..'
        ));
    }

    public function eliminar($id){

    }

    public function actualizar(Request $request){

    }
}
