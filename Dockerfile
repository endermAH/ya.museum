FROM php:7.2-apache

# Set new document root
ENV APACHE_DOCUMENT_ROOT /var/www/museum

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

COPY .htaccess "${APACHE_DOCUMENT_ROOT}"

COPY ./ya.museum "${APACHE_DOCUMENT_ROOT}"

