from scapy.all import *
def os_fingerprint(target_ip, dport): 
 packet = IP(dst=target_ip)/TCP(dport=dport, flags='AFSU') 
 response = sr1(packet, timeout=2, verbose=0) 
 if response: 
    if response.haslayer(TCP) and response[TCP].flags == 'R': 
       print(target_ip + " is running a Windows OS") 
    elif response.haslayer(TCP) and response[TCP].flags == 'RA': 
       print(target_ip + " is running a Linux OS") 
    else: 
       print("OS could not be determined for " + target_ip) 
 else: print("No response from " + target_ip) 
if __name__ == "__main__": 
   os_fingerprint("YourIP", 80)
