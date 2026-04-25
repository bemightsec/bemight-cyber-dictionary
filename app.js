const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

const homePage = document.getElementById("homePage");
const dictionaryPage = document.getElementById("dictionaryPage");
const learnPage = document.getElementById("learnPage");
const savedPage = document.getElementById("savedPage");
const comingSoonPage = document.getElementById("comingSoonPage");
const comingSoonTitle = document.getElementById("comingSoonTitle");

const openDictionaryBtn = document.getElementById("openDictionaryBtn");
const startLearningBtn = document.getElementById("startLearningBtn");
const homeSearchBtn = document.getElementById("homeSearchBtn");
const homeSearchInput = document.getElementById("homeSearchInput");
const termOfDayBtn = document.getElementById("termOfDayBtn");
const backHomeBtn = document.getElementById("backHomeBtn");

const dictionarySearch = document.getElementById("dictionarySearch");
const categoryButtons = document.querySelectorAll(".category-btn");
const termsGrid = document.getElementById("termsGrid");
const savedTermsGrid = document.getElementById("savedTermsGrid");

const learningGrid = document.getElementById("learningGrid");
const lessonDetail = document.getElementById("lessonDetail");
const backToLearningBtn = document.getElementById("backToLearningBtn");

const lessonPathLabel = document.getElementById("lessonPathLabel");
const lessonTitle = document.getElementById("lessonTitle");
const lessonIntro = document.getElementById("lessonIntro");
const lessonContent = document.getElementById("lessonContent");
const lessonKeyPoints = document.getElementById("lessonKeyPoints");

const prevLessonBtn = document.getElementById("prevLessonBtn");
const markCompleteBtn = document.getElementById("markCompleteBtn");
const nextLessonBtn = document.getElementById("nextLessonBtn");

const termModal = document.getElementById("termModal");
const closeModal = document.getElementById("closeModal");
const modalSaveBtn = document.getElementById("modalSaveBtn");

const modalCategory = document.getElementById("modalCategory");
const modalTerm = document.getElementById("modalTerm");
const modalSimple = document.getElementById("modalSimple");
const modalTechnical = document.getElementById("modalTechnical");
const modalExample = document.getElementById("modalExample");
const modalSafety = document.getElementById("modalSafety");
const modalRelated = document.getElementById("modalRelated");

let currentCategory = "All";
let selectedTerm = null;
let activePathId = null;
let activeLessonIndex = 0;

let savedTerms = JSON.parse(localStorage.getItem("bemightSavedTerms")) || [];
let learningProgress = JSON.parse(localStorage.getItem("bemightLearningProgress")) || {};

const cyberTerms = [
  {
    term: "Phishing",
    category: "Attacks",
    level: "Beginner",
    simpleMeaning: "A trick used to make people reveal passwords, money, or private information.",
    technicalMeaning: "A social engineering attack where an attacker pretends to be a trusted person or organization to steal sensitive data.",
    example: "You receive a fake bank message asking you to click a link and confirm your account details.",
    safety: ["Check the sender carefully.", "Do not click suspicious links.", "Use multi-factor authentication.", "Verify messages through official channels."],
    related: ["Social Engineering", "Email Spoofing", "MFA"]
  },
  {
    term: "Malware",
    category: "Threats",
    level: "Beginner",
    simpleMeaning: "Harmful software designed to damage, spy, steal, or disturb a device.",
    technicalMeaning: "Malware is malicious software created to compromise systems, steal data, or disrupt normal operations.",
    example: "A fake app installs hidden software that steals information from your computer.",
    safety: ["Avoid cracked software.", "Install apps from trusted sources.", "Keep devices updated.", "Use trusted security protection."],
    related: ["Virus", "Ransomware", "Spyware"]
  },
  {
    term: "Ransomware",
    category: "Attacks",
    level: "Beginner",
    simpleMeaning: "Malware that locks files or systems and demands payment.",
    technicalMeaning: "A type of malware that encrypts or blocks access to data and demands ransom for restoration.",
    example: "A business opens a malicious email attachment and later finds its files locked.",
    safety: ["Back up important files.", "Do not open suspicious attachments.", "Update systems regularly.", "Use strong access controls."],
    related: ["Malware", "Backup", "Incident Response"]
  },
  {
    term: "Firewall",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "A security barrier that controls what enters or leaves a network or device.",
    technicalMeaning: "A network security control that monitors and filters traffic based on security rules.",
    example: "A firewall blocks unknown incoming traffic from reaching your computer.",
    safety: ["Keep your firewall enabled.", "Allow only trusted apps.", "Review firewall alerts carefully."],
    related: ["Network Security", "Ports", "Traffic Filtering"]
  },
  {
    term: "VPN",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "A tool that helps protect your internet connection by creating a private tunnel.",
    technicalMeaning: "A Virtual Private Network encrypts traffic between a device and a VPN server to improve privacy and security.",
    example: "You use a VPN on public Wi-Fi to reduce the risk of someone spying on your browsing activity.",
    safety: ["Use trusted VPN providers.", "Avoid unknown free VPNs.", "Still avoid suspicious websites even when using a VPN."],
    related: ["Encryption", "Public Wi-Fi", "Privacy"]
  },
  {
    term: "Encryption",
    category: "Protection",
    level: "Beginner",
    simpleMeaning: "A way of turning readable information into unreadable code unless you have the key.",
    technicalMeaning: "Encryption converts plaintext into ciphertext to protect the confidentiality of data.",
    example: "A messaging app may encrypt chats so only the sender and receiver can read them.",
    safety: ["Use HTTPS websites.", "Protect encryption keys.", "Use strong passwords for encrypted files."],
    related: ["HTTPS", "Confidentiality", "Cryptography"]
  },
  {
    term: "MFA",
    category: "Acronyms",
    level: "Beginner",
    simpleMeaning: "Extra security that asks for more than just a password.",
    technicalMeaning: "Multi-Factor Authentication verifies identity using two or more factors such as a password, code, fingerprint, or security key.",
    example: "After entering your password, you approve a login request on your phone.",
    safety: ["Turn on MFA for important accounts.", "Do not share verification codes.", "Use authenticator apps where possible."],
    related: ["Authentication", "Password", "Account Security"]
  },
  {
    term: "SOC",
    category: "Careers",
    level: "Beginner",
    simpleMeaning: "A team that watches for cyber threats and responds to security alerts.",
    technicalMeaning: "A Security Operations Center monitors, detects, analyzes, and responds to cybersecurity incidents.",
    example: "A SOC analyst checks alerts from security tools and investigates suspicious activity.",
    safety: ["Learn logs and alerts.", "Understand basic networking.", "Practice incident investigation.", "Document findings clearly."],
    related: ["SIEM", "Incident Response", "Threat Detection"]
  }
];

const learningPaths = [
  {
    id: "basics",
    title: "Cybersecurity Basics",
    description: "Start with the foundation of cybersecurity and why it matters.",
    level: "Beginner",
    lessons: [
      {
        title: "What is Cybersecurity?",
        intro: "Cybersecurity is the practice of protecting computers, networks, accounts, and data from digital threats.",
        content: "Cybersecurity helps protect people, businesses, schools, and organizations from attacks like phishing, malware, scams, and data theft. It is not only for experts. Everyone who uses a phone, computer, or the internet needs basic cybersecurity awareness.",
        keyPoints: ["Cybersecurity protects devices, accounts, networks, and information.", "It helps reduce risks from online threats.", "Good cybersecurity depends on people, processes, and technology."]
      },
      {
        title: "The CIA Triad",
        intro: "The CIA Triad explains three main goals of cybersecurity.",
        content: "CIA means Confidentiality, Integrity, and Availability. Confidentiality keeps information private. Integrity keeps information accurate. Availability makes sure systems and data are usable when needed.",
        keyPoints: ["Confidentiality protects privacy.", "Integrity protects accuracy.", "Availability keeps systems usable."]
      },
      {
        title: "Common Cyber Threats",
        intro: "Beginners should understand the common threats people face online.",
        content: "Common threats include phishing, malware, ransomware, weak passwords, fake websites, and social engineering. Many attacks work because people are rushed, confused, or tricked into trusting the wrong source.",
        keyPoints: ["Phishing uses fake messages.", "Malware is harmful software.", "Weak passwords make accounts easier to compromise."]
      },
      {
        title: "Basic Protection",
        intro: "Simple habits can improve online safety.",
        content: "Use strong unique passwords, turn on MFA, update your devices, avoid suspicious links, back up important files, and verify messages before trusting them.",
        keyPoints: ["Use strong and unique passwords.", "Turn on multi-factor authentication.", "Keep software updated."]
      }
    ]
  },
  {
    id: "networking",
    title: "Internet & Networking Basics",
    description: "Understand basic internet terms like IP address, DNS, ports, and HTTPS.",
    level: "Beginner",
    lessons: [
      {
        title: "IP Address",
        intro: "An IP address helps identify a device on a network.",
        content: "When your phone or computer connects to a network, it uses an IP address to communicate with other devices and servers. It works like a digital address for sending and receiving data.",
        keyPoints: ["IP means Internet Protocol.", "Devices use IP addresses to communicate.", "Your router and internet provider help manage IP addresses."]
      },
      {
        title: "DNS",
        intro: "DNS helps turn website names into IP addresses.",
        content: "Humans remember names like example.com, but computers use IP addresses. DNS works like a phonebook that connects website names to the correct server address.",
        keyPoints: ["DNS means Domain Name System.", "It translates website names into IP addresses.", "Fake domains can be used in scams."]
      },
      {
        title: "Ports",
        intro: "Ports help organize different types of network communication.",
        content: "A port is like a door used by a service on a device. For example, web traffic uses common ports for HTTP and HTTPS.",
        keyPoints: ["Ports are communication points.", "Different services use different ports.", "Unnecessary open ports can increase risk."]
      },
      {
        title: "HTTP vs HTTPS",
        intro: "HTTPS is the safer version of HTTP.",
        content: "HTTP sends web data without strong protection. HTTPS uses encryption to help protect information between your browser and the website.",
        keyPoints: ["HTTPS helps protect data in transit.", "Look for HTTPS on sensitive websites.", "Still check that the website address is correct."]
      }
    ]
  },
  {
    id: "attacks",
    title: "Common Cyber Attacks",
    description: "Learn common attacks at a safe beginner-awareness level.",
    level: "Beginner",
    lessons: [
      {
        title: "Phishing",
        intro: "Phishing is one of the most common cyber attacks.",
        content: "Phishing uses fake messages, links, or websites to trick people into giving away passwords, money, or personal information.",
        keyPoints: ["Phishing messages often look urgent.", "Fake links may look similar to real websites.", "Verify before clicking or sharing information."]
      },
      {
        title: "Malware",
        intro: "Malware is harmful software.",
        content: "Malware can damage systems, steal information, spy on users, or disrupt normal activity. It may come from unsafe downloads, fake apps, infected attachments, or compromised websites.",
        keyPoints: ["Avoid unknown downloads.", "Keep your device updated.", "Use trusted security tools."]
      },
      {
        title: "Ransomware",
        intro: "Ransomware locks files or systems and demands payment.",
        content: "Ransomware can affect individuals, schools, hospitals, and businesses. The best protection includes backups, updates, careful email habits, and strong access control.",
        keyPoints: ["Backups reduce ransomware damage.", "Suspicious attachments are risky.", "Updates help fix known weaknesses."]
      },
      {
        title: "Social Engineering",
        intro: "Social engineering attacks the human side of security.",
        content: "Instead of attacking technology directly, attackers manipulate people. They may pretend to be support staff, a bank, a boss, or a trusted friend.",
        keyPoints: ["Verify people before trusting requests.", "Do not share passwords or codes.", "Be careful with pressure and urgency."]
      }
    ]
  },
  {
    id: "protection",
    title: "Protect Yourself Online",
    description: "Learn practical steps to stay safer online.",
    level: "Beginner",
    lessons: [
      {
        title: "Strong Passwords",
        intro: "Strong passwords protect your accounts from easy guessing.",
        content: "Use long, unique passwords for every important account. Avoid using your name, birthday, phone number, or simple words. A password manager can help you create and store strong passwords.",
        keyPoints: ["Use unique passwords for each account.", "Long passwords are stronger.", "A password manager can help."]
      },
      {
        title: "Multi-Factor Authentication",
        intro: "MFA adds another layer of protection.",
        content: "MFA means your account needs more than just a password. It may ask for a code, app approval, fingerprint, or security key.",
        keyPoints: ["Turn on MFA for important accounts.", "Do not share verification codes.", "Authenticator apps are safer than SMS in many cases."]
      },
      {
        title: "Backups",
        intro: "Backups help you recover important files.",
        content: "A backup is a copy of your important data. If your phone, laptop, or files are lost, damaged, or locked by ransomware, backups can help you recover.",
        keyPoints: ["Back up important files regularly.", "Use cloud and external storage where possible.", "Test that backups can be restored."]
      },
      {
        title: "Safe Browsing",
        intro: "Safe browsing means being careful with links, websites, and downloads.",
        content: "Before entering information on a website, check the address, spelling, and HTTPS. Avoid pop-ups, fake downloads, and links from unknown senders.",
        keyPoints: ["Check website addresses carefully.", "Avoid suspicious downloads.", "Do not enter passwords on unknown pages."]
      }
    ]
  }
];

function saveTermsToLocalStorage() {
  localStorage.setItem("bemightSavedTerms", JSON.stringify(savedTerms));
}

function saveLearningProgress() {
  localStorage.setItem("bemightLearningProgress", JSON.stringify(learningProgress));
}

function isSaved(termName) {
  return savedTerms.includes(termName);
}

function toggleSaveTerm(termName) {
  if (isSaved(termName)) {
    savedTerms = savedTerms.filter(item => item !== termName);
  } else {
    savedTerms.push(termName);
  }

  saveTermsToLocalStorage();
  renderTerms();
  renderSavedTerms();
  updateModalSaveButton();
}

function getPathProgress(pathId) {
  const path = learningPaths.find(item => item.id === pathId);
  const completedLessons = learningProgress[pathId] || [];

  if (!path) return 0;

  return Math.round((completedLessons.length / path.lessons.length) * 100);
}

function isLessonCompleted(pathId, lessonIndex) {
  const completedLessons = learningProgress[pathId] || [];
  return completedLessons.includes(lessonIndex);
}

function showPage(page) {
  homePage.classList.remove("active");
  dictionaryPage.classList.remove("active");
  learnPage.classList.remove("active");
  savedPage.classList.remove("active");
  comingSoonPage.classList.remove("active");

  if (page === "home") {
    homePage.classList.add("active");
  } else if (page === "dictionary") {
    dictionaryPage.classList.add("active");
    renderTerms();
  } else if (page === "learn") {
    learnPage.classList.add("active");
    lessonDetail.classList.add("hidden");
    learningGrid.classList.remove("hidden");
    renderLearningPaths();
  } else if (page === "saved") {
    savedPage.classList.add("active");
    renderSavedTerms();
  } else {
    comingSoonTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1) + " Coming Soon";
    comingSoonPage.classList.add("active");
  }

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.page === page);
  });

  navMenu.classList.remove("show");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTerms() {
  const searchValue = dictionarySearch.value.toLowerCase();

  const filteredTerms = cyberTerms.filter(item => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchValue) ||
      item.simpleMeaning.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue);

    const matchesCategory = currentCategory === "All" || item.category === currentCategory;

    return matchesSearch && matchesCategory;
  });

  termsGrid.innerHTML = "";

  if (filteredTerms.length === 0) {
    termsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No term found</h3>
        <p>Try searching another cybersecurity word.</p>
      </div>
    `;
    return;
  }

  filteredTerms.forEach(item => {
    const card = document.createElement("div");
    card.className = "term-card";

    const saved = isSaved(item.term);

    card.innerHTML = `
      <span class="term-category">${item.category}</span>
      <h3>${item.term}</h3>
      <p>${item.simpleMeaning}</p>

      <div class="term-actions">
        <button class="view-btn">View Details</button>
        <button class="save-btn ${saved ? "saved" : ""}">
          ${saved ? "Saved ✓" : "Save"}
        </button>
      </div>
    `;

    card.querySelector(".view-btn").addEventListener("click", () => openTermModal(item));
    card.querySelector(".save-btn").addEventListener("click", () => toggleSaveTerm(item.term));

    termsGrid.appendChild(card);
  });
}

function renderSavedTerms() {
  savedTermsGrid.innerHTML = "";

  const savedItems = cyberTerms.filter(item => savedTerms.includes(item.term));

  if (savedItems.length === 0) {
    savedTermsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No saved terms yet</h3>
        <p>Go to the Dictionary page and tap Save on any term you want to review later.</p>
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
        <button class="save-btn saved">Remove</button>
      </div>
    `;

    card.querySelector(".view-btn").addEventListener("click", () => openTermModal(item));
    card.querySelector(".save-btn").addEventListener("click", () => toggleSaveTerm(item.term));

    savedTermsGrid.appendChild(card);
  });
}

function renderLearningPaths() {
  learningGrid.innerHTML = "";

  learningPaths.forEach(path => {
    const progress = getPathProgress(path.id);

    const card = document.createElement("div");
    card.className = "learning-card";

    card.innerHTML = `
      <span class="term-category">${path.level}</span>
      <h3>${path.title}</h3>
      <p>${path.description}</p>
      <p class="lesson-count">${path.lessons.length} Lessons</p>

      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>

      <p class="progress-text">${progress}% completed</p>

      <button>Start Learning</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      openLearningPath(path.id);
    });

    learningGrid.appendChild(card);
  });
}

function openLearningPath(pathId) {
  activePathId = pathId;
  activeLessonIndex = 0;

  learningGrid.classList.add("hidden");
  lessonDetail.classList.remove("hidden");

  renderLesson();
}

function renderLesson() {
  const path = learningPaths.find(item => item.id === activePathId);

  if (!path) return;

  const lesson = path.lessons[activeLessonIndex];

  lessonPathLabel.textContent = path.title;
  lessonTitle.textContent = lesson.title;
  lessonIntro.textContent = lesson.intro;
  lessonContent.textContent = lesson.content;

  lessonKeyPoints.innerHTML = "";

  lesson.keyPoints.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    lessonKeyPoints.appendChild(li);
  });

  prevLessonBtn.disabled = activeLessonIndex === 0;
  nextLessonBtn.disabled = activeLessonIndex === path.lessons.length - 1;

  if (isLessonCompleted(activePathId, activeLessonIndex)) {
    markCompleteBtn.textContent = "Completed ✓";
    markCompleteBtn.disabled = true;
  } else {
    markCompleteBtn.textContent = "Mark as Complete";
    markCompleteBtn.disabled = false;
  }
}

function markCurrentLessonComplete() {
  if (!learningProgress[activePathId]) {
    learningProgress[activePathId] = [];
  }

  if (!learningProgress[activePathId].includes(activeLessonIndex)) {
    learningProgress[activePathId].push(activeLessonIndex);
  }

  saveLearningProgress();
  renderLesson();
}

function openTermModal(item) {
  selectedTerm = item;

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

  updateModalSaveButton();
  termModal.classList.add("show");
}

function updateModalSaveButton() {
  if (!selectedTerm) return;

  if (isSaved(selectedTerm.term)) {
    modalSaveBtn.textContent = "Saved ✓";
    modalSaveBtn.classList.add("saved");
  } else {
    modalSaveBtn.textContent = "Save Term";
    modalSaveBtn.classList.remove("saved");
  }
}

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showPage(link.dataset.page);
  });
});

openDictionaryBtn.addEventListener("click", () => {
  showPage("dictionary");
});

startLearningBtn.addEventListener("click", () => {
  showPage("learn");
});

homeSearchBtn.addEventListener("click", () => {
  const value = homeSearchInput.value.trim();

  showPage("dictionary");
  dictionarySearch.value = value;
  renderTerms();
});

homeSearchInput.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    const value = homeSearchInput.value.trim();

    showPage("dictionary");
    dictionarySearch.value = value;
    renderTerms();
  }
});

termOfDayBtn.addEventListener("click", () => {
  const phishing = cyberTerms.find(item => item.term === "Phishing");
  openTermModal(phishing);
});

backHomeBtn.addEventListener("click", () => {
  showPage("home");
});

dictionarySearch.addEventListener("input", renderTerms);

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
    currentCategory = button.dataset.category;

    renderTerms();
  });
});

backToLearningBtn.addEventListener("click", () => {
  lessonDetail.classList.add("hidden");
  learningGrid.classList.remove("hidden");
  renderLearningPaths();
});

prevLessonBtn.addEventListener("click", () => {
  if (activeLessonIndex > 0) {
    activeLessonIndex--;
    renderLesson();
  }
});

nextLessonBtn.addEventListener("click", () => {
  const path = learningPaths.find(item => item.id === activePathId);

  if (path && activeLessonIndex < path.lessons.length - 1) {
    activeLessonIndex++;
    renderLesson();
  }
});

markCompleteBtn.addEventListener("click", () => {
  markCurrentLessonComplete();
});

closeModal.addEventListener("click", () => {
  termModal.classList.remove("show");
});

termModal.addEventListener("click", event => {
  if (event.target === termModal) {
    termModal.classList.remove("show");
  }
});

modalSaveBtn.addEventListener("click", () => {
  if (selectedTerm) {
    toggleSaveTerm(selectedTerm.term);
  }
});

renderTerms();
renderSavedTerms();
renderLearningPaths();
