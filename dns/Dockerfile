FROM --platform=linux/amd64 ubuntu:bionic
RUN apt update \
  && apt install -y \
  bind9 \
  bind9utils \
  bind9-doc
  
  RUN apt -y install nano
  RUN apt -y install iputils-ping
# Enable IPv4
RUN sed -i 's/OPTIONS=.*/OPTIONS="-4 -u bind"/' /etc/default/bind9

# Copy configuration files
COPY named.conf.options /etc/bind/
COPY named.conf.local /etc/bind/
COPY db.acit4050.com /etc/bind/zones/

# Run eternal loop
CMD ["/bin/bash", "-c", "while :; do sleep 10; done"]
