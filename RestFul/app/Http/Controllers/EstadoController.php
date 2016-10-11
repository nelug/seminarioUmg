<?php

namespace App\Http\Controllers;

use App\Estado;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class EstadoController extends Controller {
    
    public function obtenerTodos()
    {
        $data = Estado::all();
        return response()->json($data);
    }
    
    public function obtenerId($id){
        $data = Estado::find($id);
        return response()->json($data);
    }
    
    public function crear(Request $request){
        return response()->json([
            'success' => false,
            'message' => "Metodo no aceptado."
        ], 422);
    }
    
    public function eliminar($id){
        return response()->json([
            'success' => false,
            'message' => "Metodo no aceptado."
        ], 422);;
    }
    
    public function actualizar(Request $request){
        return response()->json([
            'success' => false,
            'message' => "Metodo no aceptado."
        ], 422);;
    }
}