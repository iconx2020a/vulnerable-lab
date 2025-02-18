FROM ubuntu
#RUN apt update && install -y curl
RUN apt-get update && apt-get install -y \
curl
CMD /bin/bash
RUN apt -y install default-jdk
RUN apt -y install lynx
RUN apt -y install mysql-client
RUN apt -y  install  iputils-ping
RUN apt -y install nano
RUN apt install -y net-tools
RUN apt -y install telnet
WORKDIR /tmp
RUN curl -O  https://archive.apache.org/dist/tomcat/tomcat-10/v10.1.8/bin/apache-tomcat-10.1.8.tar.gz
RUN tar xzvf apache-tomcat-10*tar.gz 
RUN mv apache-tomcat-10*/  tomcat/
RUN mkdir /opt/tomcat/
RUN mv tomcat/ /opt/
ADD iconx.war /opt/tomcat/webapps/
ADD index.jsp /opt/tomcat/webapps/ROOT/
ADD index.html /opt/tomcat/webapps/ROOT/
ADD web.xml /opt/tomcat/webapps/ROOT/WEB-INF/
WORKDIR /opt/tomcat/


EXPOSE 8080
#CMD chmod +x /opt/tomcat/bin/catalina.sh
CMD ["/opt/tomcat/bin/catalina.sh", "run"]
