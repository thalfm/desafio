<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 28/08/2019
 * Time: 00:08
 */

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class FuncionarioResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'funcionario_id' => $this->funcionario_id,
            'nome' => $this->nome,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            'dependentes' => FuncionarioDependenteResource::collection($this->dependentes)
        ];
    }
}