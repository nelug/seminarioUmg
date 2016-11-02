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
                return response()->json([
                    'success' => false,
                    'message' => "El nombre de usuario o password es invalido."
                ], 422);
            }

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json([
                'success' => false,
                'message' => "token expirado."
            ], 422);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json([
                'success' => false,
                'message' => "Session invalida."
            ], 422);

        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json([
                'success' => false,
                'message' => "Session invalida."
            ], 422);

        }

        return response()->json(array(
            'status' => true,
            'token' => $token
        ));
    }

    public function permisos($id)
    {
        $permisos = DB::table('permisos')->select('link', 'titulo', 'icono', 'catalogo')
        ->join('menus', 'menus.id', '=', 'menu')->whereUsuario($id)->whereEstado(1)->get();
        return response()->json($permisos);
    }

    public function permisosUsuario($id)
    {
        $principal = DB::table('permisos')->select('permisos.id', 'titulo', 'estado')
        ->join('menus', 'menus.id', '=', 'menu')->whereUsuario($id)->whereCatalogo(0)->get();

        $catalogos = DB::table('permisos')->select('permisos.id', 'titulo', 'estado')
        ->join('menus', 'menus.id', '=', 'menu')->whereUsuario($id)->whereCatalogo(1)->get();

        $consultas = DB::table('permisos')->select('permisos.id', 'titulo', 'estado')
        ->join('menus', 'menus.id', '=', 'menu')->whereUsuario($id)->whereCatalogo(2)->get();

        $graficas = DB::table('permisos')->select('permisos.id', 'titulo', 'estado')
        ->join('menus', 'menus.id', '=', 'menu')->whereUsuario($id)->whereCatalogo(3)->get();

        return response()->json([
            'principal' => $principal,
            'catalogos' => $catalogos,
            'consultas' => $consultas,
            'graficas'  => $graficas
        ]);
    }

    public function actualizarPermisos(Request $request)
    {
        foreach ($request->principal as $key => $p) {
            DB::table('permisos')->whereId($p['id'])->update(['estado' => $p['estado']]);
        }

        foreach ($request->catalogos as $key => $p) {
            DB::table('permisos')->whereId($p['id'])->update(['estado' => $p['estado']]);
        }

        foreach ($request->consultas as $key => $p) {
            DB::table('permisos')->whereId($p['id'])->update(['estado' => $p['estado']]);
        }

        foreach ($request->graficas as $key => $p) {
            DB::table('permisos')->whereId($p['id'])->update(['estado' => $p['estado']]);
        }
        
        $token = $this->jwt->refresh($request->token);
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Permisos Actualizados con exito..',
            'token' => $token
        ));
    }

    public function crear(Request $request){

        $validar = $this->validate($request, [
            'nombre'   => 'required',
            'apellido' => 'required',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required'
        ]);

        $user = new User;
        $user->nombre = $request->nombre;
        $user->apellido = $request->apellido;
        $user->email = $request->email;
        $user->password = sha1($request->input('password'));
        $user->save();

        $menus = DB::table('menus')->select('id')->get();

        foreach ($menus as $key => $mn) {
            DB::table('permisos')->insert([
                'usuario' => $user->id, 'menu' => $mn->id
            ]);
        }

        $token = $this->jwt->refresh($request->token);
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Usuario almacenado con exito..',
            'token' => $token
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

        $token = $this->jwt->refresh($request->token);
        return response()->json(array(
            'success' => true,
            'mensaje' => 'Usuario actualizado con exito..',
            'token' => $token
        ));
    }
}
