#!/bin/bash
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add –
sudo apt-get install apt-transport-https
echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-8.x.list
curl -L -O https://artifacts.elastic.co/downloads/beats/elastic-agent/elastic-agent-8.16.1-amd64.deb
sudo dpkg -i elastic-agent-8.16.1-amd64.deb

wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg;
echo 'deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main' | sudo tee /etc/apt/sources.list.d/elastic-8.x.list;
sudo apt -y  install apt-transport-https
sudo apt update
sudo apt -y install filebeat

sudo apt-get install libpcap0.8
curl -L -O https://artifacts.elastic.co/downloads/beats/packetbeat/packetbeat-8.16.1-amd64.deb
sudo dpkg -i packetbeat-8.16.1-amd64.deb

curl -L -O https://artifacts.elastic.co/downloads/beats/auditbeat/auditbeat-8.16.1-amd64.deb
sudo dpkg -i auditbeat-8.16.1-amd64.deb

sudo systemctl enable filebeat
sudo systemctl restart filebeat

sudo systemctl enable auditbeat
sudo systemctl restart auditbbeat

sudo systemctl enable packetbeat
sudo systemctl restart packetbeat

sudo systemctl enable  suricata
sudo systemctl restart  suricata

sudo systemctl enable  elastic-agent
sudo systemctl restart  elastic-agent

echo "Filebeat _____________________"
sudo systemctl status filebeat
echo "Packetbeat  _____________________"
sudo systemctl status packetbeat
echo "Auditbeat  _____________________"
sudo systemctl status auditbeat
echo "Suricata \n _____________________\n"
sudo systemctl status  suricata
sudo systemctl status elastic-agent
