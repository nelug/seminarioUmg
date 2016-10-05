<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
 
 
class UserController extends Controller{
    
    public function permisos()
    {
        $permisos = DB::table('permisos')->join('menus', 'menus.id', '=', 'menu')->get();
        return response()->json($permisos); 
    }
}