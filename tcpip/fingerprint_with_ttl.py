from scapy.all import *
def get_os_fingerprint_ttl(ip):
    try:
        packet= IP(dst=ip)/ICMP()
        response = sr1(packet, timeout=1, verbose=0)
        if response:
            ttl = response.ttl
            if ttl >= 120:
                return f"Windows (TTL={ttl})"
            elif ttl >= 60:
                return f"Linux (TTL={ttl})"
            elif ttl >= 250:
                return f"Router (TTL={ttl})"
            else:
                return f"Unknown OS (TTL={ttl})"
        else:
            return "No response"
    except Exception as e:
        return f"Error: {e}"
if __name__ == "__main__":
  print(get_os_fingerprint_ttl("TargetIP"))
