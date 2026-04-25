const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const savedTermsGrid = document.getElementById("savedTermsGrid");
const clearSavedBtn = document.getElementById("clearSavedBtn");

const termModal = document.getElementById("termModal");
const closeModal = document.getElementById("closeModal");

const modalCategory = document.getElementById("modalCategory");
const modalTerm = document.getElementById("modalTerm");
const modalSimple = document.getElementById("modalSimple");
const modalTechnical = document.getElementById("modalTechnical");
const modalExample = document.getElementById("modalExample");
const modalSafety = document.getElementById("modalSafety");
const modalRelated = document.getElementById("modalRelated");

let savedTerms = JSON.parse(localStorage.getItem("bemightSavedTerms")) || [];

const cyberTerms = [
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
  }
];

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

function saveTerms() {
  localStorage.setItem("bemightSavedTerms", JSON.stringify(savedTerms));
}

function removeSavedTerm(termName) {
  savedTerms = savedTerms.filter(term => term !== termName);
  saveTerms();
  renderSavedTerms();
}

function clearAllSavedTerms() {
  savedTerms = [];
  saveTerms();
  renderSavedTerms();
}

function renderSavedTerms() {
  savedTermsGrid.innerHTML = "";

  const savedItems = cyberTerms.filter(item => savedTerms.includes(item.term));

  if (savedItems.length === 0) {
    savedTermsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No saved terms yet</h3>
        <p>
          You have not saved any cybersecurity terms yet. Go to the Dictionary page,
          tap Save on a term, then return here to review it.
        </p>
        <a href="dictionary.html">Open Dictionary</a>
      </div>
    `;
    return;
  }

  savedItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "term-card";

    card.innerHTML = `
      <span class="term-category">${item.category}</span>
      <h3>${item.term}</h3>
      <p>${item.simpleMeaning}</p>

      <div class="term-actions">
        <button class="view-btn">View Details</button>
        <button class="remove-btn">Remove</button>
      </div>
    `;

    card.querySelector(".view-btn").addEventListener("click", () => {
      openModal(item);
    });

    card.querySelector(".remove-btn").addEventListener("click", () => {
      removeSavedTerm(item.term);
    });

    savedTermsGrid.appendChild(card);
  });
}

function openModal(item) {
  modalCategory.textContent = `${item.category} • ${item.level}`;
  modalTerm.textContent = item.term;
  modalSimple.textContent = item.simpleMeaning;
  modalTechnical.textContent = item.technicalMeaning;
  modalExample.textContent = item.example;

  modalSafety.innerHTML = "";

  item.safety.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    modalSafety.appendChild(li);
  });

  modalRelated.innerHTML = "";

  item.related.forEach(term => {
    const span = document.createElement("span");
    span.textContent = term;
    modalRelated.appendChild(span);
  });

  termModal.classList.add("show");
}

clearSavedBtn.addEventListener("click", () => {
  if (savedTerms.length === 0) {
    alert("You have no saved terms to clear.");
    return;
  }

  const confirmClear = confirm("Are you sure you want to remove all saved terms?");

  if (confirmClear) {
    clearAllSavedTerms();
  }
});

closeModal.addEventListener("click", () => {
  termModal.classList.remove("show");
});

termModal.addEventListener("click", event => {
  if (event.target === termModal) {
    termModal.classList.remove("show");
  }
});

renderSavedTerms();
