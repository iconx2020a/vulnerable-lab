from scapy.all import *
# Create an ARP request
arp_request = ARP(pdst="192.168.1.1")
# Display the ARP request structure
arp_request.show()
