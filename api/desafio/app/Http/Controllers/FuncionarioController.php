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

class FuncionarioController extends Controller
{

    public function index()
    {
        return Funcionario::all();
    }

    public function show(int $funcionario_id)
    {
        return Funcionario::find($funcionario_id);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $rules = [
            'nome' => 'required|unique:tb_funcionarios'
        ];
        $messages = [
            'nome.required' => 'Informe um nome',
            'nome.unique' => 'Já existe um funcionário com esse nome'
        ];
        $validator = \Validator::make($input, $rules, $messages);

        if (!$validator->fails()) {
            return Funcionario::create($request->all());
        }

        return $validator->messages()->first();
    }

    public function update(Request $request, int $funcionario_id)
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
            $funcionario->fill($request->all());
            $funcionario->save();
            return $funcionario;
        }

        return $validator->messages()->first();
    }

    public function delete($funcionario_id)
    {
        $funcionario = Funcionario::find($funcionario_id);
        $funcionario->delete();
    }
}