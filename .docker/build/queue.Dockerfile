ARG base_image_version=latest

FROM ghcr.io/configuralo-it/app:$base_image_version

CMD ["php", "artisan", "queue:work", "--tries", "3"]
