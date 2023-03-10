
#Install java 8
#!/bin/bash
sudo apt update 
sudo apt install openjdk-8-jdk -y
#Samba
echo "*********Install samba*********"
sudo apt -y install samba 
sudo mkdir -p /samba
sudo mkdir -p /samba/alice
sudo mkdir -p /samba/josh
sudo mkdir -p /samba/james
sudo mkdir -p /home/share
sudo chmod 777 /home/share
sudo ufw allow samba
sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bk
sudo cp smb.conf /etc/samba/
sudo cp private.key /samba/alice
sudo cp private.key /samba/josh
echo "*******samba done**********"

#install docker
echo "***********Install docker***********"
sudo apt update
sudo apt -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
sudo apt update
sudo apt -y install docker.io
sudo usermod -aG docker ${USER}
sudo apt -y install docker-compose 
echo "*********docker is done**********"

#install james server
echo "*********install james server********"
sudo apt -y install bash-completion  
curl -O https://archive.apache.org/dist/james/server/apache-james-2.3.2.tar.gz
tar -xzf apache-james-2.3.2.tar.gz
sudo cp -r james-2.3.2 /opt
sudo cp phoenix.sh /opt/james-2.3.2/bin/
sudo chmod +x /opt/james-2.3.2/bin/*.sh
echo "***********james server done **********"

#Install ssh server
sudo apt -y install openssh-server
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bk 
chmod 644 sshd_config
sudo cp sshd_config /etc/ssh/
sudo cp private.key ~/.ssh/
sudo cp public.pub ~/.ssh/
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
cat public.pub >> ~/.ssh/authorized_keys
sudo systemctl enable --now ssh
#crontab
sudo cp /etc/crontab /etc/crontab.bk
chmod 644 crontab
sudo cp crontab /etc/
sudo apt -y install net-tools

export JAVA_HOME="/usr/lib/jvm/java-8-openjdk-arm64"
export PATH=$PATH:$JAVA_HOME/bin
sudo systemctl restart smbd
