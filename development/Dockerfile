FROM php:8.0.15-fpm-buster

WORKDIR /var/www/html

# Install npm

#RUN apt update && \
#    apt install curl && \
#    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && \
#    source ~/.bashrc

# Setup extensions
RUN apt-get install curl wget gnupg2 ca-certificates lsb-release apt-transport-https -y
RUN wget https://packages.sury.org/php/apt.gpg
RUN apt-key add apt.gpg
RUN apt update -y
RUN apt-get install php8.0 php8.0-json php8.0-common php8.0-zip php8.0-gd php8.0-mbstring php8.0-curl php8.0-xml php8.0-bcmath php8.0-gd php8.0-fpm php8.0-mysql libapache2-mod-php8.0 libapache2-mod-fcgid -y

COPY development/php/uploads.ini /usr/local/etc/php/conf.d