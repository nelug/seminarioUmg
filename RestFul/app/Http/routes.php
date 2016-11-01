<?php

$app->get('/', function() use ($app) {
    return "Api Rest Con Lumen";
});

$app->group(['prefix' => 'api/v1/user/','namespace' => 'App\Http\Controllers'], function($app)
{
    $app->post('login', 'UserController@postLogin');
    $app->get('status','UserController@statusUser');
});

$app->group(['prefix' => 'api/v1/','namespace' => 'App\Http\Controllers', 'middleware' => 'jwt.auth'], function($app)
{
    $app->get('user/permisos/{id}', 'UserController@permisos');
    $app->get('info/{token}' ,'UserController@info');
    $app->get('inventario'   ,'ProductoController@inventario');
    $app->get('existencia'   ,'ProductoController@existencia');
    $app->get('grafica-ventas','VentaController@grafica');
    $app->get('grafica-ventas/{year}','VentaController@graficaMeses');

    $app->get('grafica-compras','CompraController@grafica');
    $app->get('grafica-compras/{year}','CompraController@graficaMeses');

    resource('cliente'       ,'ClienteController');
    resource('user'          ,'UserController');
    resource('venta'         ,'VentaController');
    resource('producto'      ,'ProductoController');
    resource('proveedor'     ,'ProveedorController');
    resource('estado'        ,'EstadoController');
    resource('estado-proceso','EstadoProcesoController');
    resource('cotizacion'    ,'CotizacionController');
    resource('descarga'      ,'DescargaController');
    resource('compra'        ,'CompraController');

});

function resource($uri, $controller)
{
    global $app;
    $app->get($uri,                    $controller.'@obtenerTodos');
    $app->get($uri.'/{id}',            $controller.'@obtenerId');
    $app->get('detalle-'.$uri.'/{id}', $controller.'@detalle');
    $app->post($uri,                   $controller.'@crear');
    $app->put($uri,                    $controller.'@actualizar');
    $app->delete($uri.'/{id}',         $controller.'@eliminar');
}
