<?php

namespace App\Http\Controllers;

use App\Venta;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class VentaController extends Controller {
    
    public function obtenerTodos()
    {
        $data = Venta::all();
        return response()->json($data);
    }
    
    public function obtenerId($id){
        $data = Venta::find($id);
        return response()->json($data);
    }
    
    public function crear(Request $request){
        
        $validar = $this->validate($request, [
            'nombre' => 'required',
            'correo' => 'required'
        ]);
        
        $data = Venta::create($request->all());
        
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Venta almacenado con exito..'
        ));
    }
    
    public function eliminar($id){
        $data = Venta::whereId($id)->delete();
        
        if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }
        
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Venta eliminado con exito..'
        ));
    }
    
    public function actualizar(Request $request){
        $data = Venta::whereId($request->id)->update($request->all());
        
        if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }
        
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Venta actualizado con exito..'
        ));
    }
}