<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Hashing\BcryptHasher;
use App\User;
use Auth;

class UserController extends Controller{
    private $salt;

    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    public function obtenerTodos()
    {
        $user = User::all();
        return response()->json($user);
    }

    public function obtenerId($id){
        $data = User::find($id);
        return response()->json($data);
    }

    public function postLogin(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required|email|max:255',
            'password' => 'required',
        ]);

        try {

            if (! $token = $this->jwt->attempt($request->only('email', 'password'))) {
                return response()->json(['user_not_found'], 404);
            }

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent' => $e->getMessage()], 500);

        }

        return response()->json(array(
            'status' => true,
            'token' => $token
        ));
    }

    public function permisos($id)
    {
        $permisos = DB::table('permisos')->select('link', 'titulo', 'icono', 'catalogo')
        ->join('menus', 'menus.id', '=', 'menu')->whereUsuario($id)->get();
        return response()->json($permisos);
    }

    public function crear(Request $request){

        $validar = $this->validate($request, [
            'nombre'   => 'required',
            'apellido' => 'required',
            'email'    => 'required|email|unique:users'
        ]);

        $user = new User;
        $user->nombre = $request->nombre;
        $user->apellido = $request->apellido;
        $user->email = $request->email;
        $user->password = sha1($request->input('password'));
        $user->save();

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Usuario almacenado con exito..'
        ));
    }

    public static function getId($token){
        return  Auth::user()->id;
    }

    public function statusUser(){
        $user = Auth::user();

        if ($user) {
            return response()->json(array(
                'status' => true,
                'usuario' => $user
            ));
        }

        return response()->json(array(
            'status' => false,
            'usuario' => $user
        ));
    }

    public function eliminar($id){
        $data = User::whereId($id)->delete();

        if (!$data) {
            return response()->json(array(
                'success' => false,
                'mensaje' => 'Error'
            ));
        }

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Usuario eliminado con exito..'
        ));
    }

    public function actualizar(Request $request){

        $validar = $this->validate($request, [
            'nombre'   => 'required',
            'apellido' => 'required',
            'email'    => 'required|email|unique:users,email,'.$request->id,
            'estado'   => 'required'
        ]);

        $user = User::find($request->id);
        $user->nombre = $request->nombre;
        $user->apellido = $request->apellido;
        $user->email = $request->email;

        if ($request->password)
            $user->password = (new BcryptHasher)->make($request->password);

        $user->save();

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Usuario actualizado con exito..'
        ));
    }
}
