FROM ubuntu:latest

RUN apt-get update 
RUN apt-get install -y curl

ADD httpd.conf /etc/httpd/conf/httpd.conf

WORKDIR /root

ENTRYPOINT ["ping"]

CMD ["google.com"]