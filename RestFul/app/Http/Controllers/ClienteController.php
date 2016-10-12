<?php

namespace App\Http\Controllers;

use App\Cliente;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ClienteController extends Controller {

    public function obtenerTodos()
    {
        $cliente = Cliente::all();
        return response()->json($cliente);
    }

    public function obtenerId($id){
        $data = Cliente::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){

        $validar = $this->validate($request, [
            'nombre' => 'required',
            'direccion' => 'required'
        ]);

        $data = Cliente::create($request->all());

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Cliente almacenado con exito..'
        ));
    }

    public function eliminar($id){
        $data = Cliente::whereId($id)->delete();

        if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Cliente eliminado con exito..'
        ));
    }

    public function actualizar(Request $request){


        $validar = $this->validate($request, [
            'nombre' => 'required',
            'direccion' => 'required'
        ]);
        Cliente::whereId($request->id)->update($request->all());
        /*if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }*/

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Cliente actualizado con exito..'
        ));
    }
}
