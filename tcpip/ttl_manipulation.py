from scapy.all import *
# Create an ICMP Echo Request packet
icmp= IP(dst=”10.211.55.7”, ttl=120)/ICMP()
# Display the ICMP packet structure
icmp_packet.show()
print(sr((icmp))
