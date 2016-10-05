<?php
 
namespace App\Http\Controllers;
 
use App\Book;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
 
 
class MasterController extends Controller{
 
    public function obtenerTodos($service){
        $data  = DB::table($service.'s')->get();
        return response()->json($data);
    }
 
    public function obtenerId($service, $id){
        $data = DB::table($service.'s')->find($id);
        return response()->json($data);
    }
 
    public function crear(Request $request, $service){
        $data = DB::table($service.'s')->insert($request->all());
        return response()->json($data);
    }
 
    public function eliminar($service, $id){
        $data = DB::table($service.'s')->whereId($id)->delete();
        return response()->json($data);
    }
 
    public function actualizar(Request $request, $service){
        $data = DB::table($service.'s')->whereId($request->id)->update($request->all());
        return response()->json($data);
    }
 
}