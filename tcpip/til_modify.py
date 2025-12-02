from scapy.all import *
# Create an IP packet
ip_packet = IP(dst="8.8.8.8", ttl=82)
# Display the IP packet structure
ip_packet.show()
print(sr1(ip_packet, timeout=1, verbose=0))
