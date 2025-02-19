
#!/bin/bash
sudo apt update
sudo apt  -y install httpd
sudo cp  /etc/httpd/conf.d/vhost.conf  /etc/httpd/conf.d/vhost.conf.bk 
sudo cp 000-default.conf /etc/httpd/conf.d/vhost.conf 
sudo a2enmod proxy && sudo a2enmod proxy_http && sudo a2enmod ssl
sudo systemctl restart httpd
sudo systemctl enable httpd 
