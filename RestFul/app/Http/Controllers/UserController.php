<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\User;
use Auth;

class UserController extends Controller{
    private $salt;
    
    public function __construct()
    {
        $this->salt="userloginregister";
    }
    
    public function permisos($id)
    {
        $permisos = DB::table('permisos')->select('link', 'titulo', 'icono', 'catalogo')
        ->join('menus', 'menus.id', '=', 'menu')->whereUsuario($id)->get();
        return response()->json($permisos); 
    }
    
    public function login(Request $request){
        if ($request->has('username') && $request->has('password')) {
            $user = User:: where("username", "=", $request->input('username'))
            ->where("password", "=", sha1($this->salt.$request->input('password')))
            ->first();
            if ($user) {
                $token=str_random(60);
                $user->api_token=$token;
                $user->save();
                return $user->api_token;
            } else {
                return "Error al intentar iniciar session..！";
            }
        } else {
            return "El username o password no pueden estar vacios..！";
        }
    }
    
    public function register(Request $request){
        if ($request->has('username') && $request->has('password') && $request->has('email')) {
            $user = new User;
            $user->username=$request->input('username');
            $user->password=sha1($this->salt.$request->input('password'));
            $user->email=$request->input('email');
            $user->api_token=str_random(60);
            if($user->save()){
                return "";
            } else {
                return "Eror al intentar almacenar usuario..";
            }
        } else {
            return "datos requeridos..";
        }
    }
    
    public function info($token){
        return User::whereApiToken($token)->get();
    }
}