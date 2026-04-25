const CYBER_TERMS = [
  {
    term: "Phishing",
    category: "Attacks",
    level: "Beginner",
    simpleMeaning: "A trick used to make people reveal passwords, money, or private information.",
    technicalMeaning: "A social engineering attack where an attacker pretends to be a trusted person or organization to steal sensitive data.",
    example: "You receive a fake bank message asking you to click a link and confirm your account details.",
    safety: [
      "Check the sender carefully.",
      "Do not click suspicious links.",
      "Use multi-factor authentication.",
      "Verify messages through official channels."
    ],
    related: ["Social Engineering", "Email Spoofing", "MFA"]
  },
  {
    term: "Malware",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "Harmful software designed to damage, spy, steal, or disturb a device.",
    technicalMeaning: "Malware is malicious software created to compromise systems, steal data, or disrupt normal operations.",
    example: "A fake app installs hidden software that steals information from your computer.",
    safety: [
      "Avoid cracked software.",
      "Install apps from trusted sources.",
      "Keep devices updated.",
      "Use trusted security protection."
    ],
    related: ["Virus", "Ransomware", "Spyware"]
  },
  {
    term: "Ransomware",
    category: "Attacks",
    level: "Beginner",
    simpleMeaning: "Malware that locks files or systems and demands payment.",
    technicalMeaning: "A type of malware that encrypts or blocks access to data and demands ransom for restoration.",
    example: "A business opens a malicious email attachment and later finds its files locked.",
    safety: [
      "Back up important files.",
      "Do not open suspicious attachments.",
      "Update systems regularly.",
      "Use strong access controls."
    ],
    related: ["Malware", "Backup", "Incident Response"]
  },
  {
    term: "Firewall",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "A security barrier that controls what enters or leaves a network or device.",
    technicalMeaning: "A network security control that monitors and filters traffic based on security rules.",
    example: "A firewall blocks unknown incoming traffic from reaching your computer.",
    safety: [
      "Keep your firewall enabled.",
      "Allow only trusted apps.",
      "Review firewall alerts carefully."
    ],
    related: ["Network Security", "Ports", "Traffic Filtering"]
  },
  {
    term: "VPN",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "A tool that helps protect your internet connection by creating a private tunnel.",
    technicalMeaning: "A Virtual Private Network encrypts traffic between a device and a VPN server to improve privacy and security.",
    example: "You use a VPN on public Wi-Fi to reduce the risk of someone spying on your browsing activity.",
    safety: [
      "Use trusted VPN providers.",
      "Avoid unknown free VPNs.",
      "Still avoid suspicious websites even when using a VPN."
    ],
    related: ["Encryption", "Public Wi-Fi", "Privacy"]
  },
  {
    term: "Encryption",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "A way of turning readable information into unreadable code unless you have the key.",
    technicalMeaning: "Encryption converts plaintext into ciphertext to protect the confidentiality of data.",
    example: "A messaging app may encrypt chats so only the sender and receiver can read them.",
    safety: [
      "Use HTTPS websites.",
      "Protect encryption keys.",
      "Use strong passwords for encrypted files."
    ],
    related: ["HTTPS", "Confidentiality", "Cryptography"]
  },
  {
    term: "MFA",
    category: "Acronyms",
    level: "Beginner",
    simpleMeaning: "Extra security that asks for more than just a password.",
    technicalMeaning: "Multi-Factor Authentication verifies identity using two or more factors such as a password, code, fingerprint, or security key.",
    example: "After entering your password, you approve a login request on your phone.",
    safety: [
      "Turn on MFA for important accounts.",
      "Do not share verification codes.",
      "Use authenticator apps where possible."
    ],
    related: ["Authentication", "Password", "Account Security"]
  },
  {
    term: "Social Engineering",
    category: "Attacks",
    level: "Beginner",
    simpleMeaning: "Tricking people instead of attacking technology directly.",
    technicalMeaning: "Manipulation techniques used to influence people into revealing information or performing unsafe actions.",
    example: "Someone pretends to be IT support and asks for your password.",
    safety: [
      "Verify identities.",
      "Never share passwords.",
      "Be careful with urgent requests.",
      "Report suspicious behavior."
    ],
    related: ["Phishing", "Impersonation", "Pretexting"]
  },
  {
    term: "Zero-Day",
    category: "Threats",
    level: "Intermediate",
    simpleMeaning: "A security weakness that is not yet fixed by the maker of the software.",
    technicalMeaning: "A vulnerability unknown to the vendor or without an available patch.",
    example: "Attackers abuse a new browser weakness before the company releases an update.",
    safety: [
      "Keep systems updated.",
      "Use layered security.",
      "Limit unnecessary software.",
      "Monitor trusted security alerts."
    ],
    related: ["Vulnerability", "Exploit", "Patch"]
  },
  {
    term: "Vulnerability",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "A weakness that could be used to harm a system.",
    technicalMeaning: "A flaw or weakness in software, hardware, process, or configuration that can be exploited.",
    example: "An outdated app has a security weakness that attackers can abuse.",
    safety: [
      "Install updates.",
      "Use secure settings.",
      "Remove unused apps.",
      "Follow security advisories."
    ],
    related: ["Patch", "Exploit", "Risk"]
  },
  {
    term: "Exploit",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "A method attackers use to take advantage of a weakness.",
    technicalMeaning: "A technique used to abuse a vulnerability and cause unintended behavior.",
    example: "An attacker takes advantage of old software that has not been updated.",
    safety: [
      "Patch vulnerable software.",
      "Use security tools.",
      "Limit permissions.",
      "Monitor suspicious activity."
    ],
    related: ["Vulnerability", "Zero-Day", "Patch"]
  },
  {
    term: "Patch",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "An update that fixes a problem or security weakness.",
    technicalMeaning: "A software update released to correct bugs, improve features, or fix security vulnerabilities.",
    example: "Your phone update fixes a security issue that attackers could abuse.",
    safety: [
      "Update devices regularly.",
      "Enable automatic updates.",
      "Restart devices when updates require it."
    ],
    related: ["Update", "Vulnerability", "Software Security"]
  },
  {
    term: "Antivirus",
    category: "Tools",
    level: "Beginner",
    simpleMeaning: "Security software that helps detect and block harmful programs.",
    technicalMeaning: "Software designed to identify, prevent, and remove malware and other malicious activity.",
    example: "Antivirus warns you when a downloaded file looks dangerous.",
    safety: [
      "Keep antivirus updated.",
      "Do not rely on antivirus alone.",
      "Avoid suspicious downloads."
    ],
    related: ["Malware", "Endpoint Security", "Threat Detection"]
  },
  {
    term: "Password Manager",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "An app that stores and helps create strong passwords.",
    technicalMeaning: "A password manager securely stores credentials and can generate strong unique passwords.",
    example: "Instead of reusing one password, you use a password manager to create different passwords for every account.",
    safety: [
      "Use a strong master password.",
      "Turn on MFA.",
      "Use unique passwords for each account."
    ],
    related: ["Password", "MFA", "Authentication"]
  },
  {
    term: "Data Breach",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "When private information is exposed or stolen.",
    technicalMeaning: "A security incident where unauthorized people access confidential, sensitive, or protected data.",
    example: "A company database is exposed and customer emails are leaked.",
    safety: [
      "Change affected passwords.",
      "Enable MFA.",
      "Watch for suspicious messages.",
      "Monitor accounts."
    ],
    related: ["Privacy", "Incident", "Leak"]
  },
  {
    term: "IP Address",
    category: "Networking",
    level: "Beginner",
    simpleMeaning: "A number that helps identify a device on a network.",
    technicalMeaning: "An Internet Protocol address is a unique address used for network communication.",
    example: "Your phone gets an IP address when it connects to Wi-Fi.",
    safety: [
      "Use trusted networks.",
      "Avoid exposing devices directly online.",
      "Secure your router."
    ],
    related: ["Networking", "Router", "DNS"]
  },
  {
    term: "DNS",
    category: "Networking",
    level: "Beginner",
    simpleMeaning: "The system that changes website names into IP addresses.",
    technicalMeaning: "Domain Name System translates human-readable domain names into IP addresses used by devices.",
    example: "When you type a website name, DNS helps your browser find the correct server.",
    safety: [
      "Use trusted DNS services.",
      "Watch out for fake domains.",
      "Check website spelling carefully."
    ],
    related: ["Domain", "IP Address", "DNS Spoofing"]
  },
  {
    term: "HTTPS",
    category: "Networking",
    level: "Beginner",
    simpleMeaning: "A safer version of HTTP that encrypts communication with websites.",
    technicalMeaning: "HTTPS uses TLS encryption to protect data exchanged between a browser and a website.",
    example: "A banking website uses HTTPS to help protect login details.",
    safety: [
      "Check for HTTPS on sensitive sites.",
      "Avoid entering passwords on suspicious pages.",
      "Still verify the website address."
    ],
    related: ["Encryption", "TLS", "Web Security"]
  },
  {
    term: "SOC",
    category: "Careers",
    level: "Beginner",
    simpleMeaning: "A team that watches for cyber threats and responds to security alerts.",
    technicalMeaning: "A Security Operations Center monitors, detects, analyzes, and responds to cybersecurity incidents.",
    example: "A SOC analyst checks alerts from security tools and investigates suspicious activity.",
    safety: [
      "Learn logs and alerts.",
      "Understand basic networking.",
      "Practice incident investigation.",
      "Document findings clearly."
    ],
    related: ["SIEM", "Incident Response", "Threat Detection"]
  },
  {
    term: "SIEM",
    category: "Tools",
    level: "Intermediate",
    simpleMeaning: "A tool that collects security logs and helps detect suspicious activity.",
    technicalMeaning: "Security Information and Event Management software collects, analyzes, and correlates logs from systems and networks.",
    example: "A SIEM shows repeated failed login attempts from an unusual location.",
    safety: [
      "Review alerts regularly.",
      "Tune noisy alerts.",
      "Connect important log sources.",
      "Investigate unusual patterns."
    ],
    related: ["Logs", "SOC", "Detection"]
  },
  {
    term: "Authentication",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "The process of proving that you are who you say you are.",
    technicalMeaning: "Authentication verifies the identity of a user, device, or system before granting access.",
    example: "Entering your password and confirming a code before logging into your email.",
    safety: [
      "Use strong passwords.",
      "Turn on MFA.",
      "Do not share login codes."
    ],
    related: ["MFA", "Password", "Authorization"]
  },
  {
    term: "Authorization",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "The permission given after login to access certain files, apps, or systems.",
    technicalMeaning: "Authorization determines what an authenticated user is allowed to access or do.",
    example: "A student account can view learning materials but cannot change admin settings.",
    safety: [
      "Give users only the access they need.",
      "Remove access when it is no longer needed.",
      "Review account permissions regularly."
    ],
    related: ["Authentication", "Access Control", "Least Privilege"]
  },
  {
    term: "Access Control",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "Rules that decide who can access something.",
    technicalMeaning: "Access control limits system or data access based on identity, role, permissions, or policy.",
    example: "Only managers can open payroll files in a company system.",
    safety: [
      "Limit access to sensitive files.",
      "Use separate accounts for different roles.",
      "Review permissions often."
    ],
    related: ["Authorization", "Least Privilege", "Identity"]
  },
  {
    term: "Least Privilege",
    category: "Protection",
    level: "Intermediate",
    simpleMeaning: "Giving users only the access they need to do their work.",
    technicalMeaning: "The principle of least privilege limits permissions to the minimum required for a task.",
    example: "A normal employee should not have admin access unless they truly need it.",
    safety: [
      "Avoid giving everyone admin rights.",
      "Review privileged accounts.",
      "Remove unnecessary permissions."
    ],
    related: ["Access Control", "Authorization", "Admin Rights"]
  },
  {
    term: "Backup",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "A copy of important files kept for recovery.",
    technicalMeaning: "A backup is a copy of data stored separately so it can be restored after loss, damage, or attack.",
    example: "Saving copies of important school files to cloud storage and an external drive.",
    safety: [
      "Back up important files regularly.",
      "Keep at least one backup separate.",
      "Test that backups can be restored."
    ],
    related: ["Ransomware", "Recovery", "Data Protection"]
  },
  {
    term: "Public Wi-Fi",
    category: "Networking",
    level: "Beginner",
    simpleMeaning: "Internet access shared in public places like cafés, airports, or schools.",
    technicalMeaning: "Public Wi-Fi is a wireless network available to many users, often with weaker trust and privacy guarantees.",
    example: "Using free Wi-Fi at a bus station to browse the internet.",
    safety: [
      "Avoid sensitive transactions on public Wi-Fi.",
      "Use HTTPS websites.",
      "Use a trusted VPN when needed."
    ],
    related: ["VPN", "HTTPS", "Network Security"]
  },
  {
    term: "Brute Force Attack",
    category: "Attacks",
    level: "Beginner",
    simpleMeaning: "Trying many passwords until one works.",
    technicalMeaning: "A brute force attack attempts many possible passwords or keys to gain unauthorized access.",
    example: "An attacker repeatedly tries common passwords on an account.",
    safety: [
      "Use long and unique passwords.",
      "Enable MFA.",
      "Use account lockout or rate limiting."
    ],
    related: ["Password", "MFA", "Authentication"]
  },
  {
    term: "Spyware",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "Software that secretly watches or collects information.",
    technicalMeaning: "Spyware is malware that monitors activity or collects data without proper consent.",
    example: "A fake app secretly tracks browsing activity or messages.",
    safety: [
      "Install apps from trusted sources.",
      "Review app permissions.",
      "Keep security tools updated."
    ],
    related: ["Malware", "Privacy", "Mobile Security"]
  },
  {
    term: "Trojan",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "Malware that pretends to be something useful or safe.",
    technicalMeaning: "A Trojan disguises itself as legitimate software while performing malicious actions.",
    example: "A free cracked game installs hidden malware on a laptop.",
    safety: [
      "Avoid cracked software.",
      "Download from official sources.",
      "Scan suspicious files."
    ],
    related: ["Malware", "Virus", "Spyware"]
  },
  {
    term: "Botnet",
    category: "Threats",
    level: "Intermediate",
    simpleMeaning: "Many infected devices controlled together by an attacker.",
    technicalMeaning: "A botnet is a group of compromised devices remotely controlled for malicious activity.",
    example: "Thousands of infected computers are used to send spam or flood a service.",
    safety: [
      "Keep devices updated.",
      "Change default passwords.",
      "Monitor unusual device behavior."
    ],
    related: ["Malware", "DDoS", "Compromised Device"]
  },
  {
    term: "DDoS",
    category: "Attacks",
    level: "Intermediate",
    simpleMeaning: "An attack that floods a service with too much traffic.",
    technicalMeaning: "Distributed Denial of Service uses many systems to overwhelm a target and reduce availability.",
    example: "A website becomes unavailable because too many fake requests are sent to it.",
    safety: [
      "Use traffic filtering.",
      "Monitor unusual spikes.",
      "Use DDoS protection services."
    ],
    related: ["Botnet", "Availability", "Network Security"]
  },
  {
    term: "Incident Response",
    category: "Careers",
    level: "Intermediate",
    simpleMeaning: "The process of handling a cyber incident.",
    technicalMeaning: "Incident response involves preparing for, detecting, containing, removing, and recovering from security incidents.",
    example: "A team investigates a malware infection and restores affected systems safely.",
    safety: [
      "Have a response plan.",
      "Document what happened.",
      "Learn from every incident."
    ],
    related: ["SOC", "Detection", "Recovery"]
  },
  {
    term: "Logs",
    category: "Tools",
    level: "Beginner",
    simpleMeaning: "Records of activity on a system, app, or network.",
    technicalMeaning: "Logs are event records used for monitoring, troubleshooting, and security investigations.",
    example: "A login log shows when someone attempted to access an account.",
    safety: [
      "Keep important logs.",
      "Review suspicious activity.",
      "Protect logs from tampering."
    ],
    related: ["SIEM", "SOC", "Monitoring"]
  },
  {
    term: "Endpoint Security",
    category: "Tools",
    level: "Beginner",
    simpleMeaning: "Protection for devices like laptops, phones, and desktops.",
    technicalMeaning: "Endpoint security protects user devices from malware, unauthorized access, and suspicious activity.",
    example: "A company installs security software on staff laptops.",
    safety: [
      "Keep endpoint tools updated.",
      "Monitor device alerts.",
      "Avoid installing unknown software."
    ],
    related: ["Antivirus", "EDR", "Malware"]
  },
  {
    term: "EDR",
    category: "Acronyms",
    level: "Intermediate",
    simpleMeaning: "A security tool that watches devices for suspicious behavior.",
    technicalMeaning: "Endpoint Detection and Response monitors endpoints, detects suspicious activity, and supports investigation and response.",
    example: "EDR alerts a security team when a laptop starts behaving unusually.",
    safety: [
      "Review EDR alerts.",
      "Investigate unusual behavior.",
      "Keep devices monitored."
    ],
    related: ["Endpoint Security", "SOC", "Detection"]
  },
  {
    term: "Threat Intelligence",
    category: "Tools",
    level: "Intermediate",
    simpleMeaning: "Useful information about cyber threats and attackers.",
    technicalMeaning: "Threat intelligence is analyzed information about threats, indicators, tactics, and risks used to improve defense.",
    example: "A security team learns that a phishing campaign is targeting schools.",
    safety: [
      "Follow trusted security alerts.",
      "Use threat information to improve defenses.",
      "Share relevant warnings with users."
    ],
    related: ["IOC", "Threat Actor", "SOC"]
  },
  {
    term: "IOC",
    category: "Acronyms",
    level: "Intermediate",
    simpleMeaning: "A clue that may show a security incident happened.",
    technicalMeaning: "Indicator of Compromise is evidence such as malicious IPs, domains, file hashes, or unusual activity.",
    example: "A known malicious domain appears in network logs.",
    safety: [
      "Monitor known indicators.",
      "Investigate suspicious matches.",
      "Update detection rules carefully."
    ],
    related: ["Threat Intelligence", "Logs", "Detection"]
  },
  {
    term: "Threat Actor",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "A person or group behind a cyber threat.",
    technicalMeaning: "A threat actor is an individual, group, or organization that may cause harm to systems or data.",
    example: "A scam group sends fake messages to steal account details.",
    safety: [
      "Understand common attacker goals.",
      "Protect high-value accounts.",
      "Report suspicious activity."
    ],
    related: ["Threat Intelligence", "Phishing", "Risk"]
  },
  {
    term: "Risk",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "The chance that something bad could happen and cause harm.",
    technicalMeaning: "Risk is the combination of likelihood and impact of a threat exploiting a weakness.",
    example: "Using the same weak password everywhere increases account risk.",
    safety: [
      "Identify important assets.",
      "Reduce weak points.",
      "Prioritize serious risks first."
    ],
    related: ["Threat", "Vulnerability", "Impact"]
  },
  {
    term: "Asset",
    category: "Basics",
    level: "Beginner",
    simpleMeaning: "Something valuable that needs protection.",
    technicalMeaning: "An asset is data, hardware, software, account, system, or service that has value to a person or organization.",
    example: "A school’s student records are important information assets.",
    safety: [
      "Know what needs protection.",
      "Classify sensitive information.",
      "Apply security controls to important assets."
    ],
    related: ["Risk", "Data Protection", "Access Control"]
  },
  {
    term: "Security Awareness",
    category: "Basics",
    level: "Beginner",
    simpleMeaning: "Learning how to recognize and avoid digital risks.",
    technicalMeaning: "Security awareness teaches users safe behavior to reduce human-related cybersecurity risks.",
    example: "Training students to identify phishing messages before clicking links.",
    safety: [
      "Teach common scams.",
      "Repeat safety reminders.",
      "Encourage reporting suspicious activity."
    ],
    related: ["Phishing", "Social Engineering", "Cyber Hygiene"]
  },
  {
    term: "Cyber Hygiene",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "Good everyday habits that keep you safer online.",
    technicalMeaning: "Cyber hygiene refers to regular security practices that reduce digital risk.",
    example: "Updating apps, using MFA, and avoiding suspicious links.",
    safety: [
      "Update software.",
      "Use strong passwords.",
      "Back up important files."
    ],
    related: ["Security Awareness", "MFA", "Patch"]
  }
];
