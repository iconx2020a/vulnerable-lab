from scapy.all import *
print("SENDING SPOOFED UDP PACKET...")
# Define the IP header with a spoofed source IP and target destination IP
ip = IP(src="10.211.55.20", dst="10.0.0.87")
# Define the TCP header with specified source and destination ports
tcp = TCP(sport=3345, dport=80)
# Define the data payload
data = "IP address spoofing payload"
# Combine IP, TCP, and data to create the full packet
pkt = ip/tcp/data
# Display the packet details
pkt.show()
# Send the packet
send(pkt, verbose=0)
