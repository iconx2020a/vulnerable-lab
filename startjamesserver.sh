#startjamesserver.sh
sudo systemctl stop postfix
sudo systemctl stop smbd
sudo systemctl stop samba
cd /opt/james-2.3.2/bin
echo "apache james server started"
sudo ./run.sh
