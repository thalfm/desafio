# Desafio-PHP

Desafio para desenvolvimento em PHP


# -   Tecnologias utilizadas com suas respectivas versões;

- PHP 7.3-fpm
- Nginx:1.13.8
- Angular 7.2.0
- npm

## Orientações de instalação e execução do ambiente

<pre>
<code>
cd docker
docker-compose up -d

docker exec -it api bash
cd desafio
composer install

touch database/database.sqlite

cp .env.exemple .env
php artisan migrate --seed

</code>
</pre>

## Orientações de execução do código e de seus testes

### Acesso a documentação da API
> [http://localhost:8000/api/documentation](http://localhost:8000/api/documentation)

### Acesso ao frontend
> [http://localhost:88](http://localhost:88)
>
### Rodando os teste
<pre>
<code>
docker exec -it api bash
cd desafio
php vendor/bin/phpunit 

</code>
</pre>
