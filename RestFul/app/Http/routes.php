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

    resource('cliente'       ,'ClienteController');
    resource('user'          ,'UserController');
    resource('venta'         ,'VentaController');
    resource('producto'      ,'ProductoController');
    resource('proveedor'     ,'ProveedorController');
    resource('estado'        ,'EstadoController');
    resource('estado-proceso','EstadoProcesoController');
    resource('cotizacion'    ,'CotizacionController');
});

function resource($uri, $controller)
{
    global $app;
    $app->get($uri,            $controller.'@obtenerTodos');
    $app->get($uri.'/{id}',    $controller.'@obtenerId');
    $app->post($uri,           $controller.'@crear');
    $app->put($uri,            $controller.'@actualizar');
    $app->delete($uri.'/{id}', $controller.'@eliminar');
}
