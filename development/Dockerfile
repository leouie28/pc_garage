FROM php:8.0.15-fpm-buster

WORKDIR /var/www/html

# Install npm

#RUN apt update && \
#    apt install curl && \
#    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && \
#    source ~/.bashrc

# Setup extensions
#RUN apt-get update -y
#RUN apt install -y lsb-release ca-certificates apt-transport-https software-properties-common -y
#RUN echo “deb https://packages.sury.org/php/ $(lsb_release -sc) main” | tee /etc/apt/sources.list.d/sury-php.list
#RUN wget -qO – https://packages.sury.org/php/apt.gpg | apt-key add –
#RUN apt update -y

#RUN apt-get install php8.0-{mysql,cli,common,imap,ldap,xml,fpm,curl,mbstring,zip,bcmath,gd} -y

COPY development/php/uploads.ini /usr/local/etc/php/conf.d