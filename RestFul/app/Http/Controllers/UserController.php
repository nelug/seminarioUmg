<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
 
 
class UserController extends Controller{
    
    public function permisos($id)
    {
        $permisos = DB::table('permisos')->join('menus', 'menus.id', '=', 'menu')->whereUser($id)->get;
        return response()->json($permisos); 
    }
}