<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

$app->get('/', function() use ($app) {
    return "Api Rest Con Lumen";
});

$app->group(['prefix' => 'api/v1','namespace' => 'App\Http\Controllers'], function($app)
{
    resource('{service}','MasterController');
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