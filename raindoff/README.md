This app works with Tomcat 10+. You must install tomcat 10 using the tomcat.sh script in the scripts folder or visit this site [tomcat](https://www.digitalocean.com/community/tutorials/how-to-install-apache-tomcat-10-on-ubuntu-20-04) for tomcat 10 installation instructions.
Clone the repo and copy the latest version of the medicomstestapp to the /opt/tomcat/webapps folder and access the site from http://ipaddress:8080/medicomstestapp/.

For 3-tier installation clone the repository with git:
1. Run the mysql.sh script on your private or database instance.
2. Run the tomcat.sh on your internal or web application instance.
3. Run the webserver-ubuntu.sh on the public or the web server instance.
4. Run all scripts with sudo
