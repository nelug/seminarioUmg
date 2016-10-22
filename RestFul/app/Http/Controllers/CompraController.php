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
        $data = Compra::with('detalle', 'cliente', 'estado')->get();
        return response()->json($data);
    }

    public function obtenerId($id){
        $data = Compra::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){

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
                    'venta'    => $compra->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio']
                );

                DetalleCompra::create($detalleData);
            }
        }

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Compra almacenado con exito..'
        ));
    }

    public function eliminar($id){

    }

    public function actualizar(Request $request){

    }
}
