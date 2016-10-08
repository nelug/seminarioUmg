<?php

namespace App\Http\Controllers;

use App\Proveedor;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ProveedorController extends Controller {
    
    public function obtenerTodos()
    {
        $cliente = Proveedor::all();
        return response()->json($cliente);
    }
    
    public function obtenerId($id){
        $data = Proveedor::find($id);
        return response()->json($data);
    }
    
    public function crear(Request $request){
        
        $validar = $this->validate($request, [
            'nit' => 'required',
            'empresa' => 'required'
        ]);
        
        $data = Proveedor::create($request->all());
        
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Proveedor almacenado con exito..'
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
        $data = Proveedor::whereId($request->id)->update($request->all());
        
        if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }
        
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Proveedor actualizado con exito..'
        ));
    }
}