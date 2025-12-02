rom scapy.all import DNS, DNSQR, IP, sr1, UDP
dns_req = IP(dst='8.8.8.8')/UDP(dport=53)/DNS(rd=1, qd=DNSQR(qname='www.thepacketgeek.com'))
answer = sr1(dns_req/"data.txt", verbose=0)
print(answer[DNS].summary())
