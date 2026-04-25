const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const homeSearch = document.getElementById("homeSearch");
const homeSearchBtn = document.getElementById("homeSearchBtn");
const openDictionaryBtn = document.getElementById("openDictionaryBtn");
const startLearningBtn = document.getElementById("startLearningBtn");
const termOfDayBtn = document.getElementById("termOfDayBtn");

const cyberTerms = [
  "Phishing",
  "Malware",
  "Ransomware",
  "Firewall",
  "VPN",
  "Encryption",
  "MFA",
  "Social Engineering",
  "Zero-Day",
  "Vulnerability",
  "Exploit",
  "Patch",
  "Antivirus",
  "Password Manager",
  "Data Breach",
  "IP Address",
  "DNS",
  "HTTPS",
  "SOC",
  "SIEM",
  "Authentication",
  "Authorization",
  "Backup",
  "Spyware",
  "Trojan",
  "Virus",
  "Botnet",
  "Brute Force Attack",
  "Public Wi-Fi",
  "Incident Response"
];

const suggestionsBox = document.createElement("div");
suggestionsBox.className = "suggestions-box";
homeSearch.parentElement.appendChild(suggestionsBox);

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

function getSuggestions(value) {
  const searchValue = value.toLowerCase().trim();

  if (!searchValue) return [];

  return cyberTerms
    .filter(term => {
      const lowerTerm = term.toLowerCase();

      return (
        lowerTerm.includes(searchValue) ||
        lowerTerm.startsWith(searchValue) ||
        lowerTerm.includes(searchValue.slice(0, 3))
      );
    })
    .slice(0, 6);
}

function showSuggestions() {
  const suggestions = getSuggestions(homeSearch.value);

  suggestionsBox.innerHTML = "";

  if (suggestions.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  suggestions.forEach(term => {
    const item = document.createElement("button");
    item.type = "button";
    item.textContent = term;

    item.addEventListener("click", () => {
      homeSearch.value = term;
      suggestionsBox.style.display = "none";
    });

    suggestionsBox.appendChild(item);
  });

  suggestionsBox.style.display = "block";
}

function goToDictionary() {
  const searchValue = homeSearch.value.trim();

  if (searchValue === "") {
    window.location.href = "dictionary.html";
  } else {
    window.location.href = `dictionary.html?search=${encodeURIComponent(searchValue)}`;
  }
}

homeSearch.addEventListener("input", showSuggestions);

homeSearch.addEventListener("focus", () => {
  if (homeSearch.value.trim() !== "") {
    showSuggestions();
  }
});

document.addEventListener("click", event => {
  if (!homeSearch.parentElement.contains(event.target)) {
    suggestionsBox.style.display = "none";
  }
});

homeSearchBtn.addEventListener("click", goToDictionary);

homeSearch.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    goToDictionary();
  }
});

openDictionaryBtn.addEventListener("click", () => {
  window.location.href = "dictionary.html";
});

startLearningBtn.addEventListener("click", () => {
  window.location.href = "learn.html";
});

termOfDayBtn.addEventListener("click", () => {
  window.location.href = "dictionary.html?search=Phishing";
});
