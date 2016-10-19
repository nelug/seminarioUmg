<?php

namespace App\Http\Controllers;

use App\Venta;
use App\DetalleVenta;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use Auth;


class VentaController extends Controller {

    public function obtenerTodos()
    {
        $data = Venta::with('detalle', 'cliente', 'estado')->get();
        return response()->json($data);
    }

    public function obtenerId($id){
        $data = Venta::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){

        $ventaData = array(
            'cliente' => $request->input('cliente'),
            'usuario' => Auth::user()->id
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
            'success' => false,
            'mensaje' => 'Venta almacenado con exito..'
        ));
    }

    public function eliminar($id){

    }

    public function actualizar(Request $request){
        
    }
}
