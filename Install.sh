#Install java 8
#!/bin/bash
sudo apt update
sudo apt install openjdk-8-jdk -y
#Samba
echo "*********Install samba*********"
sudo apt install samba -y
sudo mkdir -p /samba
sudo ufw allow samba
echo "*******samba done**********"

#install docker
echo "***********Install docker***********"
# Add Docker's official GPG key:
sudo apt -y update
sudo apt -y install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt -y update
sudo apt -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker ${USER}
echo "*********docker is done**********"

#install james server
echo "*********install james server********"
sudo apt -y install bash-completion
curl -O https://archive.apache.org/dist/james/server/apache-james-2.3.2.tar.gz
tar -xzf apache-james-2.3.2.tar.gz
sudo cp -r james-2.3.2 /opt
sudo mv ./phoenix.sh /opt/james-2.3.2/bin/phoenix.sh
sudo chmod +x /opt/james-2.3.2/bin/*.sh
echo "***********james server done **********"

#Tomcat
echo "********About to install apache tomcat***"
#curl -O https://dlcdn.apache.org/tomcat/tomcat-10/v10.0.27/bin/apache-tomcat-10.0.27.tar.gz
curl -O https://archive.apache.org/dist/tomcat/tomcat-10/v10.0.27/bin/apache-tomcat-10.0.27.tar.gz
tar -xzf apache-tomcat-10.0.27.tar.gz
mkdir -p apache-tomcat-10.0.27/conf/Catalina/localhost/
cp server.xml tomcat-users.xml apache-tomcat-10.0.27/conf
cp manager.xml apache-tomcat-10.0.27/conf/Catalina/localhost/
sudo mv apache-tomcat-10.0.27 /opt
echo "apache tomcat is done"

#Postfix smtp
echo "Installing postfix smtp server"
sudo apt update
sudo apt -y install postfix
sudo cp /etc/postfix/main.cf /etc/postfix/main.cf.bk
echo "***smtp done***"

#Log4j PoC
echo "*********log4j poc************"
mkdir ~/mylog4j
git clone https://github.com/kozmer/log4j-shell-poc.git
sudo mv log4j-shell-poc ~/mylog4j
cp poc.py ~/mylog4j/log4j-shell-poc/
cd ~/mylog4j/log4j-shell-poc
sudo apt -y install python3-pip
pip install -r requirements.txt

echo "*******log4j poc done*******"

#Install ssh server
sudo apt -y install openssh-server
sudo systemctl enable --now ssh
export JAVA_HOME="/usr/lib/jvm/java-8-openjdk-arm64"
export PATH=$PATH:$JAVA_HOME/bin
