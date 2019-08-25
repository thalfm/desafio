FROM php:7.3-fpm

#install dependences
RUN apt-get update; \
    apt-get -y install apt-utils zip; \
    docker-php-ext-install mbstring pdo pdo_mysql bcmath

#install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

#install some base extensions
RUN apt-get install -y \
        libzip-dev \
        zip \
  && docker-php-ext-configure zip --with-libzip \
  && docker-php-ext-install zip

#enable extension
RUN docker-php-ext-enable mbstring \
    && docker-php-ext-enable pdo

#intall lumen
RUN composer global require "laravel/lumen-installer"

#set lumen in PATH
ENV PATH "$PATH:~/.composer/vendor/bin"

WORKDIR /app

EXPOSE 9000