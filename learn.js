const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const learningGrid = document.getElementById("learningGrid");
const lessonDetail = document.getElementById("lessonDetail");
const backToPathsBtn = document.getElementById("backToPathsBtn");

const lessonPathLabel = document.getElementById("lessonPathLabel");
const lessonTitle = document.getElementById("lessonTitle");
const lessonIntro = document.getElementById("lessonIntro");
const lessonContent = document.getElementById("lessonContent");
const lessonKeyPoints = document.getElementById("lessonKeyPoints");

const prevLessonBtn = document.getElementById("prevLessonBtn");
const markCompleteBtn = document.getElementById("markCompleteBtn");
const nextLessonBtn = document.getElementById("nextLessonBtn");

let activePathId = null;
let activeLessonIndex = 0;

let learningProgress =
  JSON.parse(localStorage.getItem("bemightLearningProgress")) || {};

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
        content:
          "Cybersecurity helps protect people, businesses, schools, and organizations from attacks like phishing, malware, scams, and data theft. It is not only for experts. Everyone who uses a phone, computer, or the internet needs basic cybersecurity awareness.",
        keyPoints: [
          "Cybersecurity protects devices, accounts, networks, and information.",
          "It helps reduce risks from online threats.",
          "Good cybersecurity depends on people, processes, and technology."
        ]
      },
      {
        title: "The CIA Triad",
        intro: "The CIA Triad explains three main goals of cybersecurity: Confidentiality, Integrity, and Availability.",
        content:
          "Confidentiality means keeping information private. Integrity means keeping information accurate and unchanged. Availability means making sure systems and information are accessible when needed.",
        keyPoints: [
          "Confidentiality protects privacy.",
          "Integrity protects accuracy.",
          "Availability keeps systems usable."
        ]
      },
      {
        title: "Common Cyber Threats",
        intro: "Beginners should understand the most common threats people face online.",
        content:
          "Common threats include phishing, malware, ransomware, weak passwords, fake websites, and social engineering. Many attacks work because people are rushed, confused, or tricked into trusting the wrong source.",
        keyPoints: [
          "Phishing uses fake messages to trick people.",
          "Malware is harmful software.",
          "Weak passwords make accounts easier to compromise."
        ]
      },
      {
        title: "Basic Protection",
        intro: "Simple habits can greatly improve your online safety.",
        content:
          "Use strong unique passwords, turn on MFA, update your devices, avoid suspicious links, back up important files, and verify messages before trusting them.",
        keyPoints: [
          "Use strong and unique passwords.",
          "Turn on multi-factor authentication.",
          "Keep software updated."
        ]
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
        content:
          "When your phone or computer connects to a network, it uses an IP address to communicate with other devices and servers. It works like a digital address for sending and receiving data.",
        keyPoints: [
          "IP means Internet Protocol.",
          "Devices use IP addresses to communicate.",
          "Your router and internet provider help manage IP addresses."
        ]
      },
      {
        title: "DNS",
        intro: "DNS helps turn website names into IP addresses.",
        content:
          "Humans remember names like example.com, but computers use IP addresses. DNS works like a phonebook that connects website names to the correct server address.",
        keyPoints: [
          "DNS means Domain Name System.",
          "It translates website names into IP addresses.",
          "Fake domains can be used in scams."
        ]
      },
      {
        title: "Ports",
        intro: "Ports help computers organize different types of network communication.",
        content:
          "A port is like a door used by a service on a device. For example, web traffic uses common ports for HTTP and HTTPS. Security teams often monitor ports to understand what services are exposed.",
        keyPoints: [
          "Ports are communication points.",
          "Different services use different ports.",
          "Unnecessary open ports can increase risk."
        ]
      },
      {
        title: "HTTP vs HTTPS",
        intro: "HTTPS is the safer version of HTTP.",
        content:
          "HTTP sends web data without strong protection. HTTPS uses encryption to help protect information between your browser and the website. It is important for login pages, banking, shopping, and private information.",
        keyPoints: [
          "HTTPS helps protect data in transit.",
          "Look for HTTPS on sensitive websites.",
          "Still check that the website address is correct."
        ]
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
        content:
          "Phishing uses fake messages, links, or websites to trick people into giving away passwords, money, or personal information. Attackers often create urgency to make victims act quickly.",
        keyPoints: [
          "Phishing messages often look urgent.",
          "Fake links may look similar to real websites.",
          "Verify before clicking or sharing information."
        ]
      },
      {
        title: "Malware",
        intro: "Malware is harmful software.",
        content:
          "Malware can damage systems, steal information, spy on users, or disrupt normal activity. It may come from unsafe downloads, fake apps, infected attachments, or compromised websites.",
        keyPoints: [
          "Avoid unknown downloads.",
          "Keep your device updated.",
          "Use trusted security tools."
        ]
      },
      {
        title: "Ransomware",
        intro: "Ransomware locks files or systems and demands payment.",
        content:
          "Ransomware can affect individuals, schools, hospitals, and businesses. The best protection includes backups, updates, careful email habits, and strong access control.",
        keyPoints: [
          "Backups reduce ransomware damage.",
          "Suspicious attachments are risky.",
          "Updates help fix known weaknesses."
        ]
      },
      {
        title: "Social Engineering",
        intro: "Social engineering attacks the human side of security.",
        content:
          "Instead of attacking technology directly, attackers manipulate people. They may pretend to be support staff, a bank, a boss, or a trusted friend.",
        keyPoints: [
          "Verify people before trusting requests.",
          "Do not share passwords or codes.",
          "Be careful with pressure and urgency."
        ]
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
        content:
          "Use long, unique passwords for every important account. Avoid using your name, birthday, phone number, or simple words. A password manager can help you create and store strong passwords.",
        keyPoints: [
          "Use unique passwords for each account.",
          "Long passwords are stronger.",
          "A password manager can help."
        ]
      },
      {
        title: "Multi-Factor Authentication",
        intro: "MFA adds another layer of protection.",
        content:
          "MFA means your account needs more than just a password. It may ask for a code, app approval, fingerprint, or security key. This helps protect your account even if your password is stolen.",
        keyPoints: [
          "Turn on MFA for important accounts.",
          "Do not share verification codes.",
          "Authenticator apps are safer than SMS in many cases."
        ]
      },
      {
        title: "Backups",
        intro: "Backups help you recover important files.",
        content:
          "A backup is a copy of your important data. If your phone, laptop, or files are lost, damaged, or locked by ransomware, backups can help you recover.",
        keyPoints: [
          "Back up important files regularly.",
          "Use cloud and external storage where possible.",
          "Test that backups can be restored."
        ]
      },
      {
        title: "Safe Browsing",
        intro: "Safe browsing means being careful with links, websites, and downloads.",
        content:
          "Before entering information on a website, check the address, spelling, and HTTPS. Avoid pop-ups, fake downloads, and links from unknown senders.",
        keyPoints: [
          "Check website addresses carefully.",
          "Avoid suspicious downloads.",
          "Do not enter passwords on unknown pages."
        ]
      }
    ]
  }
];

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

function saveLearningProgress() {
  localStorage.setItem(
    "bemightLearningProgress",
    JSON.stringify(learningProgress)
  );
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

function renderLearningPaths() {
  learningGrid.innerHTML = "";

  learningPaths.forEach(path => {
    const progress = getPathProgress(path.id);

    const card = document.createElement("div");
    card.className = "learning-card";

    card.innerHTML = `
      <span class="level-tag">${path.level}</span>
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

  learningGrid.style.display = "none";
  lessonDetail.classList.add("show");

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

backToPathsBtn.addEventListener("click", () => {
  lessonDetail.classList.remove("show");
  learningGrid.style.display = "grid";
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

renderLearningPaths();
