<?php
/**
 * Created by PhpStorm.
 * User: thales
 * Date: 27/08/2019
 * Time: 00:50
 */

class FuncionarioDependenteControllerTest extends TestCase
{
    use \Laravel\Lumen\Testing\DatabaseTransactions;

    protected function setUp(): void
    {
        parent::setUp();
    }

    public function testIndex()
    {
        $response = $this->get('/v1/funcionario/2/dependente');

        $response->assertResponseStatus(200);
    }

    public function testShow()
    {
        $response = $this->get('/v1/funcionario/2/dependente/4');

        $response->assertResponseStatus(200);
    }

    public function testShowNotFound()
    {
        $response = $this->get('/v1/funcionario/2/dependente/1');

        $response->assertResponseStatus(404);
    }

    public function testStore()
    {
        $response = $this->post('/v1/funcionario/2/dependente', ['nome' => 'Teste']);

        $response->assertResponseStatus(201);
    }

    public function testUpdate()
    {
        $response = $this->put('/v1/funcionario/2/dependente/4', ['nome' => 'Teste']);

        $response->assertResponseStatus(200);
    }

    public function testDelete()
    {
        $response = $this->delete('/v1/funcionario/2/dependente/4');

        $response->assertResponseStatus(204);
    }
}
