from scapy.all import * 
#network scanning and service fingerprinting 
def network_scanner(target_subnet): 
    print(f"Scanning network: {target_subnet}") 
    # Scan for live hosts 
    live_hosts = [] 
    for ip in Net(target_subnet): 
        ping_packet = IP(dst=str(ip))/ICMP() 
        response = sr1(ping_packet, timeout=1, verbose=0) 
    if response: 
       live_hosts.append(str(ip)) 
    print(f"Live hosts discovered: {live_hosts}")

if __name__ == "__main__": 
   network_scanner("10.0.0.0/24")
