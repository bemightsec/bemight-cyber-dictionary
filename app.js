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
        isCloseMatch(searchValue, lowerTerm)
      );
    })
    .slice(0, 6);
}

function isCloseMatch(input, term) {
  if (input.length < 3) return false;

  const firstThree = input.slice(0, 3);

  return term.includes(firstThree);
}

function showSuggestions() {
  const value = homeSearch.value;
  const suggestions = getSuggestions(value);

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

homeSearchBtn.addEventListener("click", () => {
  const searchValue = homeSearch.value.trim();

  if (searchValue === "") {
    alert("Please type a cybersecurity term first.");
    return;
  }

  alert(`You searched for: ${searchValue}. Dictionary page will be connected next.`);
});

homeSearch.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    const searchValue = homeSearch.value.trim();

    if (searchValue === "") {
      alert("Please type a cybersecurity term first.");
      return;
    }

    alert(`You searched for: ${searchValue}. Dictionary page will be connected next.`);
  }
});

openDictionaryBtn.addEventListener("click", () => {
  alert("Dictionary page is the next page we will build.");
});

startLearningBtn.addEventListener("click", () => {
  alert("Learning page will be built after the Dictionary page.");
});

termOfDayBtn.addEventListener("click", () => {
  alert("Phishing means a trick used to steal passwords, money, or private information by pretending to be trusted.");
});
