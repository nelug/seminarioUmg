<?php

namespace App\Http\Controllers;

use App\Descarga;
use App\DetalleDescarga;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use Auth;


class DescargaController extends Controller {

    public function obtenerTodos()
    {
        $data = Descarga::with('detalle','estado')->get();
        return response()->json($data);
    }

    public function obtenerId($id){
        $data = Descarga::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){

        $DescargaData = array(
            'usuario' => Auth::user()->id
        );

        $descarga = Descarga::create($DescargaData);

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
            'mensaje' => 'Descarga realizada con exito..'
        ));
    }

    public function eliminar($id){

    }

    public function actualizar(Request $request){

    }
}
