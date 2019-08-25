<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 25/08/2019
 * Time: 16:20
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\Funcionario
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Funcionario newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Funcionario newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Funcionario query()
 * @mixin \Eloquent
 */
class Funcionario extends Model
{
    use SoftDeletes;

    protected $table = 'tb_funcionarios';

    protected $primaryKey = 'funcionario_id';

    protected $fillable = [
        'nome'
    ];

    public function dependentes()
    {
        $this->hasMany(FuncionarioDependente::class, 'funcionario_id', 'funcionario_id');
    }
}