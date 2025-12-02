from scapy.all import *
# Callback function to process packets
def packet_handler(packet):
# Check if it's a TCP packet
 if packet.haslayer(TCP):
   print("[+] TCP Packet Captured:"+packet.summary())
# Check if it's a UDP packet
 elif packet.haslayer(UDP):
     print("[+] UDP Packet Captured:"+packet.summary())
# Check if it's an ICMP packet
 elif packet.haslayer(ICMP):
     print("[+] ICMP Packet Captured:"+ packet.summary())
if __name__ == "__main__":
 #Sniff packets, filtering for TCP, UDP, and ICMP
  sniff(iface='en0',filter="tcp or udp or icmp", prn=packet_handler)
