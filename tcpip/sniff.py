from scapy.all import *
# Callback function to process packets
def packet_handler(packet):
     print(packet.summary())
if __name__ == "__main__":
 #Sniff packets, filtering for TCP, UDP, and ICMP
  sniff(iface='en0', filter="tcp or udp or icmp", prn=packet_handler)
