const QUESTION_BANK = [
  {
    category: "Basics",
    question: "What is cybersecurity mainly about?",
    options: [
      "Protecting systems, accounts, networks, and data",
      "Making computers look beautiful",
      "Increasing phone battery life",
      "Designing posters"
    ],
    answer: "Protecting systems, accounts, networks, and data",
    explanation: "Cybersecurity focuses on protecting digital systems, accounts, networks, and data from threats."
  },
  {
    category: "Basics",
    question: "What does the CIA Triad stand for?",
    options: [
      "Confidentiality, Integrity, Availability",
      "Control, Internet, Access",
      "Cyber, Identity, Antivirus",
      "Code, Interface, Application"
    ],
    answer: "Confidentiality, Integrity, Availability",
    explanation: "The CIA Triad means Confidentiality, Integrity, and Availability."
  },
  {
    category: "Basics",
    question: "What does confidentiality mean?",
    options: [
      "Keeping information private",
      "Making files larger",
      "Deleting all passwords",
      "Opening data to everyone"
    ],
    answer: "Keeping information private",
    explanation: "Confidentiality means information should only be accessed by authorized people."
  },
  {
    category: "Basics",
    question: "What does integrity mean in cybersecurity?",
    options: [
      "Keeping information accurate and unchanged",
      "Making websites load faster",
      "Making data public",
      "Removing passwords"
    ],
    answer: "Keeping information accurate and unchanged",
    explanation: "Integrity means information should remain correct and not be changed without permission."
  },
  {
    category: "Basics",
    question: "What does availability mean?",
    options: [
      "Systems and data are accessible when needed",
      "All accounts must be public",
      "Passwords are shared with friends",
      "Every website is dangerous"
    ],
    answer: "Systems and data are accessible when needed",
    explanation: "Availability means authorized users can access systems and information when needed."
  },
  {
    category: "Basics",
    question: "What is a cyber threat?",
    options: [
      "Anything that can harm digital systems or data",
      "A new phone wallpaper",
      "A computer mouse problem",
      "A social media trend only"
    ],
    answer: "Anything that can harm digital systems or data",
    explanation: "A cyber threat is anything that may cause harm to systems, accounts, networks, or data."
  },
  {
    category: "Basics",
    question: "What is a vulnerability?",
    options: [
      "A weakness that can be used to cause harm",
      "A strong password",
      "A safe backup",
      "A trusted update"
    ],
    answer: "A weakness that can be used to cause harm",
    explanation: "A vulnerability is a weakness in software, hardware, settings, or processes."
  },
  {
    category: "Basics",
    question: "What is cyber hygiene?",
    options: [
      "Good everyday digital safety habits",
      "Cleaning a keyboard with soap",
      "Deleting every file",
      "Changing phone wallpaper daily"
    ],
    answer: "Good everyday digital safety habits",
    explanation: "Cyber hygiene means safe habits like updates, strong passwords, MFA, backups, and careful browsing."
  },

  {
    category: "Attacks",
    question: "What is phishing?",
    options: [
      "A trick used to steal information",
      "A type of keyboard",
      "A safe backup method",
      "A computer cleaning tool"
    ],
    answer: "A trick used to steal information",
    explanation: "Phishing uses fake messages, links, or websites to trick people into giving sensitive information."
  },
  {
    category: "Attacks",
    question: "Which sign may suggest a phishing message?",
    options: [
      "Urgent pressure to click a link",
      "A trusted app update from the official store",
      "A normal school timetable",
      "A printed receipt"
    ],
    answer: "Urgent pressure to click a link",
    explanation: "Many phishing messages create urgency so users act quickly without checking carefully."
  },
  {
    category: "Attacks",
    question: "What is malware?",
    options: [
      "Harmful software",
      "A safe password tool",
      "A type of monitor",
      "A legal software license"
    ],
    answer: "Harmful software",
    explanation: "Malware is malicious software designed to harm, spy, steal, or disrupt systems."
  },
  {
    category: "Attacks",
    question: "What is ransomware mainly known for?",
    options: [
      "Locking files and demanding payment",
      "Creating free websites",
      "Improving internet speed",
      "Cleaning a keyboard"
    ],
    answer: "Locking files and demanding payment",
    explanation: "Ransomware blocks or encrypts access to files and demands payment."
  },
  {
    category: "Attacks",
    question: "What is social engineering?",
    options: [
      "Tricking people into unsafe actions",
      "Building roads",
      "Designing phone cases",
      "Installing official updates"
    ],
    answer: "Tricking people into unsafe actions",
    explanation: "Social engineering manipulates people instead of attacking technology directly."
  },
  {
    category: "Attacks",
    question: "What is a brute force attack?",
    options: [
      "Trying many passwords until one works",
      "Using a stronger phone case",
      "Backing up files safely",
      "Updating software"
    ],
    answer: "Trying many passwords until one works",
    explanation: "A brute force attack tries many possible passwords to gain access."
  },
  {
    category: "Attacks",
    question: "What is a fake login page often used for?",
    options: [
      "Stealing usernames and passwords",
      "Making a laptop faster",
      "Printing documents",
      "Charging a phone"
    ],
    answer: "Stealing usernames and passwords",
    explanation: "Fake login pages may look real but are created to capture login details."
  },
  {
    category: "Attacks",
    question: "What is DDoS mainly designed to affect?",
    options: [
      "Availability of a service",
      "Screen brightness",
      "Battery percentage",
      "Keyboard layout"
    ],
    answer: "Availability of a service",
    explanation: "A DDoS attack floods a service with traffic, making it hard for real users to access it."
  },

  {
    category: "Protection",
    question: "What is MFA?",
    options: [
      "Extra login protection beyond a password",
      "A music file format",
      "A keyboard shortcut",
      "A type of printer"
    ],
    answer: "Extra login protection beyond a password",
    explanation: "MFA adds another verification step, such as a code, app approval, fingerprint, or security key."
  },
  {
    category: "Protection",
    question: "Why should you use different passwords for different accounts?",
    options: [
      "One leaked password will not expose all accounts",
      "It makes the screen brighter",
      "It removes the need for updates",
      "It turns off the internet"
    ],
    answer: "One leaked password will not expose all accounts",
    explanation: "Unique passwords reduce damage if one account password is exposed."
  },
  {
    category: "Protection",
    question: "What does a password manager help you do?",
    options: [
      "Create and store strong unique passwords",
      "Hack websites",
      "Remove your internet connection",
      "Design logos automatically"
    ],
    answer: "Create and store strong unique passwords",
    explanation: "A password manager helps generate and store strong passwords securely."
  },
  {
    category: "Protection",
    question: "Why are backups important?",
    options: [
      "They help recover files after loss or attack",
      "They make passwords shorter",
      "They stop all spam messages",
      "They remove all viruses automatically"
    ],
    answer: "They help recover files after loss or attack",
    explanation: "Backups give you another copy of important files if the original is lost, damaged, or locked."
  },
  {
    category: "Protection",
    question: "What should you do before clicking a suspicious link?",
    options: [
      "Verify the sender and link first",
      "Click quickly",
      "Forward it to everyone",
      "Enter your password immediately"
    ],
    answer: "Verify the sender and link first",
    explanation: "Always verify suspicious links and messages before interacting with them."
  },
  {
    category: "Protection",
    question: "Why should software updates not be ignored?",
    options: [
      "They often fix security weaknesses",
      "They delete all apps",
      "They always make devices unsafe",
      "They remove internet access"
    ],
    answer: "They often fix security weaknesses",
    explanation: "Updates often patch vulnerabilities that attackers could abuse."
  },
  {
    category: "Protection",
    question: "What is least privilege?",
    options: [
      "Giving users only the access they need",
      "Giving everyone admin rights",
      "Sharing one password with all staff",
      "Turning off account protection"
    ],
    answer: "Giving users only the access they need",
    explanation: "Least privilege reduces risk by limiting unnecessary access."
  },
  {
    category: "Protection",
    question: "What is a good action after a data breach affects your account?",
    options: [
      "Change the password and enable MFA",
      "Use the same password everywhere",
      "Ignore all alerts",
      "Share your login code"
    ],
    answer: "Change the password and enable MFA",
    explanation: "Changing affected passwords and enabling MFA helps protect accounts after a breach."
  },

  {
    category: "Networking",
    question: "What is an IP address?",
    options: [
      "A number used to identify a device on a network",
      "A phone battery type",
      "A social media account",
      "A computer game"
    ],
    answer: "A number used to identify a device on a network",
    explanation: "An IP address helps devices communicate on networks."
  },
  {
    category: "Networking",
    question: "What does DNS do?",
    options: [
      "Changes website names into IP addresses",
      "Protects a phone case",
      "Deletes browser history automatically",
      "Designs web pages"
    ],
    answer: "Changes website names into IP addresses",
    explanation: "DNS translates domain names like example.com into IP addresses."
  },
  {
    category: "Networking",
    question: "What is HTTPS?",
    options: [
      "A safer web connection that uses encryption",
      "A type of keyboard",
      "A phone charger",
      "A photo editing tool"
    ],
    answer: "A safer web connection that uses encryption",
    explanation: "HTTPS helps protect data exchanged between your browser and a website."
  },
  {
    category: "Networking",
    question: "Why should public Wi-Fi be used carefully?",
    options: [
      "It may expose users to privacy and security risks",
      "It always deletes your files",
      "It cannot connect to websites",
      "It makes passwords stronger automatically"
    ],
    answer: "It may expose users to privacy and security risks",
    explanation: "Public Wi-Fi can be risky, especially when used for sensitive accounts without protection."
  },
  {
    category: "Networking",
    question: "What is a port in networking?",
    options: [
      "A communication point used by services",
      "A phone charger hole only",
      "A picture format",
      "A type of password"
    ],
    answer: "A communication point used by services",
    explanation: "Ports help computers organize different types of network communication."
  },
  {
    category: "Networking",
    question: "Why is HTTPS important on login pages?",
    options: [
      "It helps protect data during transmission",
      "It makes passwords visible",
      "It removes the need for passwords",
      "It blocks all websites"
    ],
    answer: "It helps protect data during transmission",
    explanation: "HTTPS uses encryption to help protect information sent between your browser and a website."
  },

  {
    category: "Tools",
    question: "What is antivirus software used for?",
    options: [
      "Helping detect and block harmful programs",
      "Increasing screen size",
      "Charging a laptop",
      "Creating passwords for attackers"
    ],
    answer: "Helping detect and block harmful programs",
    explanation: "Antivirus tools help identify and block malware and other suspicious activity."
  },
  {
    category: "Tools",
    question: "What is a firewall?",
    options: [
      "A security control that filters network traffic",
      "A physical wall of fire",
      "A music app",
      "A keyboard button"
    ],
    answer: "A security control that filters network traffic",
    explanation: "A firewall controls network traffic based on security rules."
  },
  {
    category: "Tools",
    question: "What is a SIEM used for?",
    options: [
      "Collecting and analyzing security logs",
      "Editing videos",
      "Charging phones",
      "Printing receipts"
    ],
    answer: "Collecting and analyzing security logs",
    explanation: "A SIEM helps security teams collect and analyze logs for suspicious activity."
  },
  {
    category: "Tools",
    question: "What is a VPN used for?",
    options: [
      "Creating a protected connection through a private tunnel",
      "Deleting all websites",
      "Making a computer screen bigger",
      "Replacing antivirus completely"
    ],
    answer: "Creating a protected connection through a private tunnel",
    explanation: "A VPN can help protect traffic, especially on untrusted networks, but it does not replace safe habits."
  },
  {
    category: "Tools",
    question: "What is EDR used for?",
    options: [
      "Monitoring endpoints for suspicious activity",
      "Editing music files",
      "Printing flyers",
      "Charging laptops"
    ],
    answer: "Monitoring endpoints for suspicious activity",
    explanation: "Endpoint Detection and Response helps monitor devices and support investigation."
  },
  {
    category: "Tools",
    question: "What are logs useful for?",
    options: [
      "Reviewing system and security activity",
      "Making phones waterproof",
      "Increasing screen resolution",
      "Deleting all data automatically"
    ],
    answer: "Reviewing system and security activity",
    explanation: "Logs record activity and help with monitoring, troubleshooting, and investigations."
  },

  {
    category: "Careers",
    question: "What does a SOC team do?",
    options: [
      "Monitors and responds to security alerts",
      "Repairs car engines",
      "Sells mobile phones only",
      "Designs clothes"
    ],
    answer: "Monitors and responds to security alerts",
    explanation: "A Security Operations Center monitors, detects, investigates, and responds to security incidents."
  },
  {
    category: "Careers",
    question: "Which skill is useful for a beginner SOC analyst?",
    options: [
      "Understanding logs and alerts",
      "Ignoring suspicious activity",
      "Sharing passwords",
      "Avoiding documentation"
    ],
    answer: "Understanding logs and alerts",
    explanation: "SOC analysts often review logs and alerts to investigate suspicious activity."
  },
  {
    category: "Careers",
    question: "Why is documentation important in cybersecurity work?",
    options: [
      "It helps explain findings clearly",
      "It makes attacks legal",
      "It removes the need to learn",
      "It hides mistakes from everyone"
    ],
    answer: "It helps explain findings clearly",
    explanation: "Good documentation helps teams understand what happened and what actions were taken."
  },
  {
    category: "Careers",
    question: "What is incident response?",
    options: [
      "Handling and recovering from security incidents",
      "Designing birthday cards",
      "Changing phone wallpaper",
      "Sharing passwords"
    ],
    answer: "Handling and recovering from security incidents",
    explanation: "Incident response is the process of preparing for, detecting, handling, and recovering from incidents."
  },

  {
    category: "Acronyms",
    question: "What does MFA stand for?",
    options: [
      "Multi-Factor Authentication",
      "Main File Access",
      "Mobile Firewall App",
      "Managed Fast Account"
    ],
    answer: "Multi-Factor Authentication",
    explanation: "MFA stands for Multi-Factor Authentication."
  },
  {
    category: "Acronyms",
    question: "What does SOC stand for?",
    options: [
      "Security Operations Center",
      "Simple Online Computer",
      "System Office Code",
      "Secure Open Cable"
    ],
    answer: "Security Operations Center",
    explanation: "SOC stands for Security Operations Center."
  },
  {
    category: "Acronyms",
    question: "What does SIEM stand for?",
    options: [
      "Security Information and Event Management",
      "Simple Internet Email Manager",
      "Secure Internal Editing Mode",
      "System Identity Entry Method"
    ],
    answer: "Security Information and Event Management",
    explanation: "SIEM stands for Security Information and Event Management."
  },
  {
    category: "Acronyms",
    question: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Digital Network Screen",
      "Data Notice Service",
      "Device Name Security"
    ],
    answer: "Domain Name System",
    explanation: "DNS stands for Domain Name System."
  },
  {
    category: "Acronyms",
    question: "What does VPN stand for?",
    options: [
      "Virtual Private Network",
      "Visual Phone Number",
      "Verified Public Name",
      "Video Protection Notice"
    ],
    answer: "Virtual Private Network",
    explanation: "VPN stands for Virtual Private Network."
  },
  {
    category: "Acronyms",
    question: "What does EDR stand for?",
    options: [
      "Endpoint Detection and Response",
      "External Data Reader",
      "Encrypted Device Router",
      "Email Delivery Report"
    ],
    answer: "Endpoint Detection and Response",
    explanation: "EDR stands for Endpoint Detection and Response."
  },
  {
    category: "Acronyms",
    question: "What does IOC stand for?",
    options: [
      "Indicator of Compromise",
      "Internet Office Code",
      "Internal Online Control",
      "Identity Output Check"
    ],
    answer: "Indicator of Compromise",
    explanation: "IOC stands for Indicator of Compromise."
  }
];
