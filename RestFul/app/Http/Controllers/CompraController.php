<?php

namespace App\Http\Controllers;

use App\Compra;
use App\DetalleCompra;
use App\Producto;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;
use Auth;


class CompraController extends Controller {
    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    public function obtenerTodos()
    {
        $data = Compra::with('detalle', 'proveedor', 'estado_proceso', 'usuario')->get();
        return response()->json($data);
    }

    public function obtenerId($id){
        $data = Compra::find($id);
        return response()->json($data);
    }

    public function crear(Request $request){
        $validar = $this->validate($request, [
            'proveedor'    => 'required',
            'numero_documento'   => 'required|max:50|unique:compras',
            'fecha_documento'    => 'required|date',
            'detalle.*.producto' => 'required|numeric',
            'detalle.*.cantidad' => 'required|numeric',
            'detalle.*.precio'   => 'required|numeric'
        ]);

        if (!$request->input('detalle')) {
            return response()->json([
                'message' => array("Ingrese detalle para poder almacenar..")
            ], 422);
        }

        $compraData = array(
            'proveedor' => $request->input('proveedor'),
            'numero_documento' => $request->input('numero_documento'),
            'fecha_documento'  => $request->input('fecha_documento'),
            'usuario' => Auth::user()->id
        );

        $compra = Compra::create($compraData);
        $total = 0;
        if ($compra) {
            foreach ($request->input('detalle') as $key => $dt) {

                $detalleData = array(
                    'compra'    => $compra->id,
                    'producto' => $dt['producto'],
                    'cantidad' => $dt['cantidad'],
                    'precio'   => $dt['precio']
                );

                $producto = Producto::find($dt['producto']);
                $total += ($dt['cantidad'] * $dt['precio']);

                if ($producto) {
                    DetalleCompra::create($detalleData);

                    $data = $this->calcularPrecioCosto($producto->precio_costo, $producto->existencia, $dt['precio'], $dt['cantidad']);

                    $producto->precio_costo = $data['precio_costo'];
                    $producto->existencia = $data['existencia'];
                    $producto->save();
                }

            }

            DB::table('compras')->whereId($compra->id)->update(['total' => $total]);
        }

        $token = $this->jwt->refresh($request->token);

        return response()->json(array(
            'success' => true,
            'mensaje' => 'Compra almacenada con exito..',
            'token'   => $token
        ));
    }

    public function detalle($id){
        return DetalleCompra::with('producto')->whereCompra($id)->get();
    }

    public function eliminar($id){

    }

    public function actualizar(Request $request){

    }

    public function calcularPrecioCosto($precioActual, $existenciaActual, $precioCompra, $cantidadCompra)
    {
        $totalActual = $existenciaActual * $precioActual;
        $totalCompra = $cantidadCompra * $precioCompra;

        $existencia = $existenciaActual + $cantidadCompra;
        $precioCosto = ($totalActual + $totalCompra) / $existencia;

        return array(
            'existencia' => $existencia,
            'precio_costo' => $precioCosto
        );
    }

    public function grafica()
    {
        return DB::table('detalle_compras')
        ->select(DB::raw("DATE_FORMAT(created_at, '%Y') as label, sum(cantidad * precio) as value"))
        ->groupBy(DB::raw("DATE_FORMAT(created_at, '%Y')"))->get();
    }

    public function graficaMeses($year)
    {
        DB::statement("SET lc_time_names = 'es_ES'");

        return DB::table('detalle_compras')
        ->select(DB::raw("DATE_FORMAT(created_at, '%M') as label, sum(cantidad * precio) as value"))
        ->whereRaw("YEAR(created_at)=".$year)
        ->groupBy(DB::raw("DATE_FORMAT(created_at, '%Y-%m')"))->get();
    }
}
