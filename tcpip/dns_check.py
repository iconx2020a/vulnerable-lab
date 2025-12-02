from scapy.all import *
# Create a UDP packet 
udp = IP(dst="10.211.55.7")/UDP(dport=53)/DNS(rd=1, qd=DNSQR(qname="google.com")) 
udp.show() 
