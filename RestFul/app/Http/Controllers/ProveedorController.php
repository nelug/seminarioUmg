<?php

namespace App\Http\Controllers;

use App\Proveedor;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;

class ProveedorController extends Controller {
    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    public function obtenerTodos()
    {
        $proveedor = Proveedor::all();
        return response()->json($proveedor);
    }

    public function obtenerId($id){
        $data = Proveedor::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){

        $validar = $this->validate($request, [
            'nit' => 'required|alpha_num|unique:proveedores,nit',
            'empresa' => 'required|string',
            'telefono_empresa' => 'required|numeric',
            'direccion' => 'required|string'
        ]);

        $inputs = $request->except('token');

        Proveedor::create($inputs);

        $token = $this->jwt->refresh($request->token);
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Proveedor almacenado con exito..',
            'token' => $token
        ));
    }

    public function eliminar($id){
        $data = Proveedor::whereId($id)->delete();

        if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Proveedor eliminado con exito..'
        ));
    }

    public function actualizar(Request $request){

        $validar = $this->validate($request, [
            'nit' => 'required',
            'empresa' => 'required',
            'telefono_empresa' => 'required',
            'direccion' => 'required'
        ]);

        $inputs = $request->except('token');

        Proveedor::whereId($request->id)->update($inputs);

        $token = $this->jwt->refresh($request->token);
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Proveedor actualizado con exito..',
            'token' => $token
        ));
    }
}
