<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 25/08/2019
 * Time: 16:38
 */

namespace App\Http\Controllers;


use App\Models\Funcionario;
use Illuminate\Http\Request;

class FuncionarioDependentesController extends Controller
{

    public function index($funcionario_id)
    {
        $funcionario = Funcionario::find($funcionario_id);
        return $funcionario->dependentes();
    }

    public function show(int $funcionario_id, int $dependente_id)
    {
        $funcionario = Funcionario::find($funcionario_id);
        return $funcionario->dependentes()->find($dependente_id);
    }

    public function store(int $funcionario_id, Request $request)
    {
        $funcionario = Funcionario::find($funcionario_id);
        return $funcionario->dependentes()->createMany($request->all());
    }

    public function update(Request $request, int $funcionario_id, int $dependente_id)
    {
        $funcionario = Funcionario::find($funcionario_id);
        $dependente = $funcionario->dependentes()->find($dependente_id);
        $dependente->fill($request->all());
        return $dependente->save();
    }

    public function delete(int $funcionario_id, int $dependente_id)
    {
        $funcionario = Funcionario::find($funcionario_id);
        $dependente = $funcionario->dependentes()->find($dependente_id);
        $dependente->delete();
    }
}