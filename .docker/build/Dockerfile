ARG composer_version=2
ARG php_version=8.2-fpm
ARG node_version=18

FROM php:$php_version as base

RUN \
    apt-get update \
    && apt-get install -y \
        libzip-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install -j$(nproc) \
      bcmath \
      pdo_mysql \
      zip

RUN cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini

COPY .docker/build/php/conf.d/*.ini /usr/local/etc/php/conf.d/

WORKDIR /var/www/html

FROM composer:$composer_version as composer

FROM base as vendor

COPY --from=composer /usr/bin/composer /usr/local/bin/composer

COPY composer.json composer.lock ./

ARG nova_email
ARG nova_password

RUN \
    composer config --global http-basic.nova.laravel.com ${nova_email} ${nova_password} \
    && composer install \
        --no-autoloader \
        --no-dev \
        --no-interaction \
        --no-plugins \
        --no-scripts \
        --prefer-dist

COPY . .

RUN composer dumpautoload

FROM node:$node_version as build

WORKDIR /root

COPY . .

RUN \
    npm ci \
    && npm run build

FROM base

LABEL org.opencontainers.image.source=https://github.com/configuralo-it/app

COPY --from=vendor /var/www/html .

COPY --from=build /root/public/build public/build

RUN php artisan nova:publish

RUN chown www-data:www-data -R /var/www
