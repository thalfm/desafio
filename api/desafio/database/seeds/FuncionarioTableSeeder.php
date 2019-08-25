<?php

use Illuminate\Database\Seeder;

class FuncionarioTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Funcionario::class, 10)
            ->create()
            ->each(function (\App\Models\Funcionario $funcionario) {
               factory(\App\Models\FuncionarioDependente::class, 3)
                   ->make()
                   ->each(function (\App\Models\FuncionarioDependente $funcionarioDependente) use ($funcionario) {
                       $funcionarioDependente->funcionario_id = $funcionario->funcionario_id;
                       $funcionarioDependente->save();
                   });
            });
    }
}
