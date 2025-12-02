from scapy.all import *
s=IP(dst="10.0.0.87")
sm=ICMP()
sm.display()
sr1(s/sm/"data.txt") 
