FROM debian:jessie
MAINTAINER Michal Rostecki <michal.rostecki@gmail.com>

RUN apt-get update \
    && apt-get -y install \
        git \
        npm \
    && apt-get clean

RUN ln -s /usr/bin/nodejs /usr/bin/node

ADD . /opt/obd-consumer-ui
WORKDIR /opt/obd-consumer-ui

EXPOSE 8082
CMD ["./start.sh"]
