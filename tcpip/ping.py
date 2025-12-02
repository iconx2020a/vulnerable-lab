from scapy.all import *
# Send an ICMP Echo Request
icmp_request = IP(dst="8.8.8.8")/ICMP()
# Send the packet and wait for a response
response = sr1(icmp_request, timeout=2)
# Check if we received a reply
if response:
  print("ICMP Echo Reply received:")
  response.show()
else:
  print("No reply received.")
