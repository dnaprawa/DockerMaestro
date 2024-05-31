FROM ubuntu:trusty

RUN apt-get update && apt-get install -y stress && rm -rf /var/lib/apt/lists/*

ENTRYPOINT ["/usr/bin/stress", "--verbose"]
CMD []
