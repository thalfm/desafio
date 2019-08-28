<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 25/08/2019
 * Time: 16:38
 */

namespace App\Http\Controllers;


use App\Http\Resources\FuncionarioResource;
use App\Models\Funcionario;
use Illuminate\Http\Request;

class FuncionarioController extends Controller
{

    public function index()
    {
        $data = Funcionario::paginate(10);
        return $data
            ? FuncionarioResource::collection($data)
            : response()->json(['msg' => 'Nenhum conteúdo encontrado'], 404);
    }

    public function show(int $funcionario_id)
    {
        $data = Funcionario::find($funcionario_id);
        return $data
            ? new FuncionarioResource($data)
            : response()->json(['msg' => 'Nenhum conteúdo encontrado'], 404);
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
            $funcionario = Funcionario::create($request->all());
            return response()->json(['data' => $funcionario], 201);
        }

        return response()->json(['msg' => $validator->messages()->first()], 400);
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
            return response()->json(['data' => $funcionario], 200);
        }

        return response()->json(['msg' => $validator->messages()->first()], 400);
    }

    public function delete($funcionario_id)
    {
        $funcionario = Funcionario::find($funcionario_id);
        $funcionario->delete();
        return response()->json([], 204);
    }
}