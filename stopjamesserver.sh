#!/bin/bash
sudo systemctl start postfix
sudo systemctl  start smbd
sudo systemctl start samba
cd /opt/james-2.3.2/bin
sudo ./phoenix.sh stop
