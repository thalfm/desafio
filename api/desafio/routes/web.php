<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/** @var \Laravel\Lumen\Routing\Router $router */
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'v1'], function () use($router){
    $router->group(['prefix' => 'funcionario', 'middleware' => 'cors'], function () use($router){
        $router->get('/', 'FuncionarioController@index');
        $router->get('/{funcionario_id}', 'FuncionarioController@show');
        $router->post('/', 'FuncionarioController@store');
        $router->put('/{funcionario_id}', 'FuncionarioController@update');
        $router->delete('/{funcionario_id}', 'FuncionarioController@delete');

        $router->get('{funcionario_id}/dependente', 'FuncionarioDependentesController@index');
        $router->get('/{funcionario_id}/dependente/{dependente_id}', 'FuncionarioDependentesController@show');
        $router->post('/{funcionario_id}/dependente', 'FuncionarioDependentesController@store');
        $router->put('/{funcionario_id}/dependente/{dependente_id}', 'FuncionarioDependentesController@update');
        $router->delete('/{funcionario_id}/dependente/{dependente_id}', 'FuncionarioDependentesController@delete');
    });

});
