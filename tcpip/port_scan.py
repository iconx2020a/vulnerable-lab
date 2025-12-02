from scapy.all import *
def port_scan(target_ip, no_of_ports):
    open_ports = []
    for port in range(no_of_ports):
        ip = IP(dst=target_ip)
        tcp = TCP(dport=port, flags="S")
        response = sr1(ip/tcp, timeout=0.5, verbose=0)
        if response is not None and response.haslayer(TCP) and response[TCP].flags == 'SA':  # SYN-ACK
            # Port is open, send RST to close the connection
            sr(IP(dst=target_ip)/TCP(dport=response.sport, flags="R"), timeout=0.5, verbose=0)
            open_ports.append(port)
    if open_ports:
       print("List of opened ports:")
       print(sorted(open_ports))
if __name__ == "__main__": 
   port_scan("10.0.0.87", 1024)
