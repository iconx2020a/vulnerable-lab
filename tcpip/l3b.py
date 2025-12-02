#scapy code, stacking frame + IP
from scapy.all import *
ether = Ether()
ls(ether)
ether = Ether()/IP()
ls(ether)
