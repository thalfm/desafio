<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 25/08/2019
 * Time: 16:22
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\FuncionarioDependente
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\FuncionarioDependente newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\FuncionarioDependente newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\FuncionarioDependente query()
 * @mixin \Eloquent
 */
class FuncionarioDependente extends Model
{
    protected $table = 'tb_funcionario_dependentes';

    protected $primaryKey = 'funcionario_dependentes_id';

    protected $fillable = [
        'funcionario_id',
        'nome'
    ];

    public $timestamps = false;

    public function funcionario()
    {
        return $this->belongsTo(Funcionario::class, 'funcionario_id', 'funcionario_id');
    }

}