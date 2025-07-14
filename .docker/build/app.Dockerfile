ARG base_image_version=latest

FROM ghcr.io/configuralo-it/app:$base_image_version

COPY .docker/build/app/entrypoint.sh .

ENTRYPOINT [ "/var/www/html/entrypoint.sh" ]

CMD [ "php-fpm" ]
