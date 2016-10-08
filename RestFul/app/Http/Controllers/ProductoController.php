<?php

namespace App\Http\Controllers;

use App\Producto;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ProductoController extends Controller {
    
    public function obtenerTodos()
    {
        $cliente = Producto::all();
        return response()->json($cliente);
    }
    
    public function obtenerId($id){
        $data = Producto::find($id);
        return response()->json($data);
    }
    
    public function crear(Request $request){
        
        $validar = $this->validate($request, [
            'codigo' => 'required',
            'descripcion' => 'required'
        ]);
        
        $data = Producto::create($request->all());
        
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Producto almacenado con exito..'
        ));
    }
    
    public function eliminar($id){
        $data = Producto::whereId($id)->delete();
        
        if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }
        
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Producto eliminado con exito..'
        ));
    }
    
    public function actualizar(Request $request){
        $data = Producto::whereId($request->id)->update($request->all());
        
        if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }
        
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Producto actualizado con exito..'
        ));
    }
}