<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 28/08/2019
 * Time: 00:08
 */

namespace App\Http\Resources;


use Illuminate\Http\Resources\Json\JsonResource;

class FuncionarioDependenteResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'funcionario_dependentes_id' => $this->funcionario_dependentes_id,
            'nome' => $this->nome
        ];
    }
}