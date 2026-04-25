const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const quizSetup = document.getElementById("quizSetup");
const quizBox = document.getElementById("quizBox");
const quizResult = document.getElementById("quizResult");

const quizCategory = document.getElementById("quizCategory");
const questionCount = document.getElementById("questionCount");
const startQuizBtn = document.getElementById("startQuizBtn");

const questionCounter = document.getElementById("questionCounter");
const quizScore = document.getElementById("quizScore");
const quizCategoryLabel = document.getElementById("quizCategoryLabel");
const questionTitle = document.getElementById("questionTitle");
const optionsGrid = document.getElementById("optionsGrid");

const feedbackBox = document.getElementById("feedbackBox");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");
const restartQuizBtn = document.getElementById("restartQuizBtn");
const randomQuizBtn = document.getElementById("randomQuizBtn");

const historyList = document.getElementById("historyList");
const emptyHistoryText = document.getElementById("emptyHistoryText");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = "Mixed";
let selectedCount = 5;

let quizHistory = JSON.parse(localStorage.getItem("bemightQuizHistory")) || [];

const questionBank = [
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
    question: "What does the CIA Triad stand for in cybersecurity?",
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
    explanation: "Confidentiality means only authorized people should access private information."
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
    explanation: "Integrity means data should remain accurate and not be changed without permission."
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
  }
];

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temporaryValue = shuffled[i];
    shuffled[i] = shuffled[randomIndex];
    shuffled[randomIndex] = temporaryValue;
  }

  return shuffled;
}

function getFilteredQuestions() {
  if (selectedCategory === "Mixed") {
    return questionBank;
  }

  return questionBank.filter(item => item.category === selectedCategory);
}

function startQuiz() {
  selectedCategory = quizCategory.value;
  selectedCount = Number(questionCount.value);

  const filteredQuestions = getFilteredQuestions();
  const shuffledQuestions = shuffleArray(filteredQuestions);

  currentQuestions = shuffledQuestions
    .slice(0, Math.min(selectedCount, shuffledQuestions.length))
    .map(item => ({
      ...item,
      options: shuffleArray(item.options)
    }));

  currentQuestionIndex = 0;
  score = 0;

  quizSetup.style.display = "none";
  quizResult.classList.remove("show");
  quizBox.classList.add("show");

  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const optionLetters = ["A", "B", "C", "D"];

  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  quizScore.textContent = `Score: ${score}`;
  quizCategoryLabel.textContent = `Category: ${selectedCategory}`;
  questionTitle.textContent = currentQuestion.question;

  feedbackBox.classList.remove("show");
  optionsGrid.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.dataset.option = option;
    button.innerHTML = `<strong>${optionLetters[index]}.</strong> ${option}`;

    button.addEventListener("click", () => {
      checkAnswer(button, option);
    });

    optionsGrid.appendChild(button);
  });
}

function checkAnswer(selectedButton, selectedOption) {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const optionButtons = document.querySelectorAll(".option-btn");

  optionButtons.forEach(button => {
    button.disabled = true;

    if (button.dataset.option === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  if (selectedOption === currentQuestion.answer) {
    score++;
    selectedButton.classList.add("correct");
    feedbackTitle.textContent = "Correct ✅";
  } else {
    selectedButton.classList.add("wrong");
    feedbackTitle.textContent = "Not quite ❌";
  }

  feedbackText.textContent = currentQuestion.explanation;
  quizScore.textContent = `Score: ${score}`;
  feedbackBox.classList.add("show");

  if (currentQuestionIndex === currentQuestions.length - 1) {
    nextQuestionBtn.textContent = "Finish Quiz";
  } else {
    nextQuestionBtn.textContent = "Next Question";
  }
}

function nextQuestion() {
  if (currentQuestionIndex === currentQuestions.length - 1) {
    finishQuiz();
    return;
  }

  currentQuestionIndex++;
  renderQuestion();
}

function finishQuiz() {
  quizBox.classList.remove("show");
  quizResult.classList.add("show");

  finalScore.textContent = `${score}/${currentQuestions.length}`;

  const percentage = Math.round((score / currentQuestions.length) * 100);

  if (percentage >= 80) {
    resultMessage.textContent =
      "Excellent work. You are building strong beginner cybersecurity knowledge.";
  } else if (percentage >= 50) {
    resultMessage.textContent =
      "Good effort. Review the explanations and try another quiz to improve.";
  } else {
    resultMessage.textContent =
      "Keep learning. Cybersecurity takes practice, and every attempt helps you improve.";
  }

  saveQuizHistory(percentage);
}

function saveQuizHistory(percentage) {
  const historyItem = {
    category: selectedCategory,
    score: `${score}/${currentQuestions.length}`,
    percentage: `${percentage}%`,
    date: new Date().toLocaleString()
  };

  quizHistory.unshift(historyItem);
  quizHistory = quizHistory.slice(0, 8);

  localStorage.setItem("bemightQuizHistory", JSON.stringify(quizHistory));
  renderQuizHistory();
}

function restartSameSetup() {
  quizResult.classList.remove("show");
  quizBox.classList.remove("show");
  quizSetup.style.display = "block";
}

function tryAnotherRandomQuiz() {
  quizCategory.value = "Mixed";
  questionCount.value = "5";
  startQuiz();
}

function renderQuizHistory() {
  historyList.innerHTML = "";

  if (quizHistory.length === 0) {
    emptyHistoryText.style.display = "block";
    return;
  }

  emptyHistoryText.style.display = "none";

  quizHistory.forEach(item => {
    const div = document.createElement("div");
    div.className = "history-item";

    div.innerHTML = `
      <span><strong>${item.score}</strong> (${item.percentage})</span>
      <span>${item.category}</span>
      <span>${item.date}</span>
    `;

    historyList.appendChild(div);
  });
}

function clearHistory() {
  if (quizHistory.length === 0) {
    alert("No quiz history to clear.");
    return;
  }

  const confirmClear = confirm("Are you sure you want to clear your quiz history?");

  if (!confirmClear) return;

  quizHistory = [];
  localStorage.setItem("bemightQuizHistory", JSON.stringify(quizHistory));
  renderQuizHistory();
}

startQuizBtn.addEventListener("click", startQuiz);
nextQuestionBtn.addEventListener("click", nextQuestion);
restartQuizBtn.addEventListener("click", restartSameSetup);
randomQuizBtn.addEventListener("click", tryAnotherRandomQuiz);
clearHistoryBtn.addEventListener("click", clearHistory);

renderQuizHistory();
