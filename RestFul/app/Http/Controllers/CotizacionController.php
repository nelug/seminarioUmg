<?php

namespace App\Http\Controllers;

use App\Cotizacion;
use App\DetalleCotizacion;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use Auth;


class CotizacionController extends Controller {

    public function obtenerTodos()
    {
        $data = Cotizacion::with('detalle', 'cliente', 'estado')->get();
        return response()->json($data);
    }

    public function obtenerId($id){
        $data = Cotizacion::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){

        $cotizacionData = array(
            'cliente' => $request->input('cliente'),
            'usuario' => Auth::user()->id
        );

        $cotizacion = Cotizacion::create($cotizacionData);

        if ($cotizacion) {
            foreach ($request->input('detalle') as $key => $dt) {

                $detalleData = array(
                    'cotizacion'    => $cotizacion->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio']
                );

                DetalleCotizacion::create($detalleData);
            }
        }

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Cotizacion almacenado con exito..'
        ));
    }

    public function eliminar($id){

    }

    public function actualizar(Request $request){

    }
}
