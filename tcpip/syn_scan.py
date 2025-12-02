from scapy.all import *
def syn_scan(target_ip, target_port):
    syn_packet = IP(dst=target_ip)/TCP(dport=target_port, flags="S")
    response = sr1(syn_packet, timeout=1, verbose=0)
    if response and response.haslayer(TCP):
        if response[TCP].flags == "SA":  # SYN-ACK response
            print("Port " + str(target_port) + " is open")
        elif response[TCP].flags == "RA":  # RST-ACK response
            print("Port " + str(target_port) + " i s  closed")
        else:
            print("Port " + {target_port} + " is filtered or no response")
if __name__ == "__main__":
    syn_scan(”Your IP", 80)
#save the file as syn_scan.py and execute it with the sudo #python3 syn_scan.py command
