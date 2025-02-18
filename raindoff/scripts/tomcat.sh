#!/bin/bash
sudo apt update
sudo apt -y install default-jdk
sudo apt -y wget
sudo apt -y install lynx
cd /tmp 
wget https://archive.apache.org/dist/tomcat/tomcat-10/v10.1.8/bin/apache-tomcat-10.1.8.tar.gz
sudo mkdir -p /opt/tomcat
sudo tar xzvf apache-tomcat-10*tar.gz -C /opt/tomcat --strip-components=1
sudo groupadd tomcat
sudo useradd -g tomcat -d /usr/local/tomcat tomcat
sudo useradd -g tomcat -c "Tomcat User" -d /usr/local/tomcat tomcat
sudo chown -R tomcat:tomcat /opt/tomcat/
sudo chmod -R u+x /opt/tomcat/bin
sudo cp /etc/systemd/system/tomcat.service /etc/systemd/system/tomcat.service.bk
sudo cat << EOF > /etc/systemd/system/tomcat.service
[Unit]
Description=Tomcat
After=network.target

[Service]
Type=forking

User=tomcat
Group=tomcat

Environment="JAVA_HOME=/usr/lib/jvm/java-1.11.0-openjdk-amd64"
Environment="JAVA_OPTS=-Djava.security.egd=file:///dev/urandom"
Environment="CATALINA_BASE=/opt/tomcat"
Environment="CATALINA_HOME=/opt/tomcat"
Environment="CATALINA_PID=/opt/tomcat/temp/tomcat.pid"
Environment="CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC"

ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh

RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl start tomcat
sudo systemctl status tomcat
sudo systemctl enable tomcat



