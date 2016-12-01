<?php

namespace App\Http\Controllers;

use App\Cliente;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;

class ClienteController extends Controller {

    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

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
            'nit' => 'unique:clientes,nit',
            'nombre' => 'required|string',
            'direccion' => 'required|string'
        ]);

        $inputs = $request->except('token');

        $data = Cliente::create($inputs);

        $token = $this->jwt->refresh($request->token);

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Cliente almacenado con exito..',
            'token' => $token
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
        $inputs = $request->except('token');

        Cliente::whereId($request->id)->update($inputs);

        $token = $this->jwt->refresh($request->token);
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Cliente actualizado con exito..',
            'token' => $token
        ));
    }
}
