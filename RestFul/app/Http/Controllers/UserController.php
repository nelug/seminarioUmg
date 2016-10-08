<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
 
 
class UserController extends Controller{
    
    public function permisos($id)
    {
        $permisos = DB::table('permisos')->select('link', 'titulo', 'icono', 'catalogo')
        ->join('menus', 'menus.id', '=', 'menu')->whereUsuario($id)->get();
        return response()->json($permisos); 
    }
}