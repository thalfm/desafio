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
        $dependentes = $funcionario->dependentes;
        return $dependentes
            ? response()->json(['data' => $dependentes], 200)
            : response()->json(['msg' => 'Nenhum conteúdo encontrado'], 404);
    }

    public function show(int $funcionario_id, int $dependente_id)
    {
        $funcionario = Funcionario::find($funcionario_id);
        $dependente = $funcionario->dependentes()->find($dependente_id);
        return $dependente
            ? response()->json(['data' => $dependente], 200)
            : response()->json(['msg' => 'Nenhum conteúdo encontrado'], 404);
    }

    public function store(int $funcionario_id, Request $request)
    {
        $input = $request->all();

        $rules = [
            '*.nome' => 'required|unique:tb_funcionario_dependentes'
        ];
        $messages = [
            '*.nome.required' => 'Informe um nome do dependente',
            '*.nome.unique' => 'Já existe um dependente com esse nome'
        ];
        $validator = \Validator::make($input, $rules, $messages);
        if (!$validator->fails()) {
            $funcionario = Funcionario::find($funcionario_id);
            $funcionario->dependentes()->createMany($request->all());
            return response()->json(['data' => $funcionario->dependentes], 201);
        }

        return response()->json(['msg' => $validator->messages()->first()], 400);
    }

    public function update(Request $request, int $funcionario_id, int $dependente_id)
    {
        $input = $request->all();
        $rules = [
            'nome' => "required|unique:tb_funcionarios,nome,{$funcionario_id},funcionario_id"
        ];
        $messages = [
            'nome.required' => 'Informe um nome',
            'nome.unique' => 'Já existe um funcionário com esse nome'
        ];
        $validator = \Validator::make($input, $rules, $messages);

        if (!$validator->fails()) {
            $funcionario = Funcionario::find($funcionario_id);
            $dependente = $funcionario->dependentes()->find($dependente_id);
            $dependente->fill($request->all());
            $dependente->save();
            return response()->json(['data' => $dependente], 200);
        }

        return response()->json(['msg' => $validator->messages()->first()], 400);
    }

    public function delete(int $funcionario_id, int $dependente_id)
    {
        $funcionario = Funcionario::find($funcionario_id);
        $dependente = $funcionario->dependentes()->find($dependente_id);
        $dependente->delete();
        return response()->json([], 204);
    }
}