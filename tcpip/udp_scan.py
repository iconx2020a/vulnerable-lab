from scapy.all import *
def udp_scan(target_ip, target_port): 
  udp_packet = IP(dst=target_ip)/UDP(dport=target_port) 
  response = sr1(udp_packet, timeout=2, verbose=0) 
  if response is None: 
   print("Port "+ str(target_port) + "is open or filtered (UDP Scan)") 
  elif  response.haslayer(ICMP) and response[ICMP].type == 3 and response[ICMP].code == 3: 
   print("Port " + str(target_port) + " is closed (UDP Scan)") 
  else: 
   print("Port " + str(target_port) + " is filtered (UDP Scan)") 
if __name__ == "__main__":
   udp_scan("YourIP", 80)
