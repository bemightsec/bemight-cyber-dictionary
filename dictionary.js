const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const dictionarySearch = document.getElementById("dictionarySearch");
const searchBtn = document.getElementById("searchBtn");
const suggestionsBox = document.getElementById("suggestionsBox");
const categoryButtons = document.querySelectorAll(".category-btn");
const termsGrid = document.getElementById("termsGrid");

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
let savedTerms = JSON.parse(localStorage.getItem("bemightSavedTerms")) || [];

const cyberTerms = typeof CYBER_TERMS !== "undefined" ? CYBER_TERMS : [];

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

function saveTerms() {
  localStorage.setItem("bemightSavedTerms", JSON.stringify(savedTerms));
}

function isSaved(termName) {
  return savedTerms.includes(termName);
}

function toggleSave(termName) {
  if (isSaved(termName)) {
    savedTerms = savedTerms.filter(item => item !== termName);
  } else {
    savedTerms.push(termName);
  }

  saveTerms();
  renderTerms();
  updateModalSaveButton();
}

function normalizeText(text) {
  return text.toLowerCase().trim();
}

function isCloseMatch(input, term) {
  if (input.length < 3) return false;

  const shortInput = input.slice(0, 3);
  return term.includes(shortInput);
}

function getSuggestions(value) {
  const searchValue = normalizeText(value);

  if (!searchValue) return [];

  return cyberTerms
    .filter(item => {
      const term = normalizeText(item.term);
      const category = normalizeText(item.category);
      const simpleMeaning = normalizeText(item.simpleMeaning);

      return (
        term.includes(searchValue) ||
        term.startsWith(searchValue) ||
        category.includes(searchValue) ||
        simpleMeaning.includes(searchValue) ||
        isCloseMatch(searchValue, term)
      );
    })
    .slice(0, 8);
}

function showSuggestions() {
  const suggestions = getSuggestions(dictionarySearch.value);

  suggestionsBox.innerHTML = "";

  if (suggestions.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  suggestions.forEach(item => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.term;

    btn.addEventListener("click", () => {
      dictionarySearch.value = item.term;
      suggestionsBox.style.display = "none";
      renderTerms();
    });

    suggestionsBox.appendChild(btn);
  });

  suggestionsBox.style.display = "block";
}

function renderTerms() {
  const searchValue = normalizeText(dictionarySearch.value);

  const filteredTerms = cyberTerms.filter(item => {
    const term = normalizeText(item.term);
    const category = normalizeText(item.category);
    const level = normalizeText(item.level);
    const simpleMeaning = normalizeText(item.simpleMeaning);
    const technicalMeaning = normalizeText(item.technicalMeaning);

    const matchesSearch =
      term.includes(searchValue) ||
      category.includes(searchValue) ||
      level.includes(searchValue) ||
      simpleMeaning.includes(searchValue) ||
      technicalMeaning.includes(searchValue);

    const matchesCategory =
      currentCategory === "All" || item.category === currentCategory;

    return matchesSearch && matchesCategory;
  });

  termsGrid.innerHTML = "";

  if (cyberTerms.length === 0) {
    termsGrid.innerHTML = `
      <div class="empty-state">
        <h3>Terms data not loaded</h3>
        <p>
          Please check that terms-data.js is linked before dictionary.js in dictionary.html.
        </p>
      </div>
    `;
    return;
  }

  if (filteredTerms.length === 0) {
    termsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No term found</h3>
        <p>
          Try another spelling or search a related word like attack, password,
          network, malware, account, or protection.
        </p>
      </div>
    `;
    return;
  }

  filteredTerms.forEach(item => {
    const card = document.createElement("div");
    card.className = "term-card";

    card.innerHTML = `
      <span class="term-category">${item.category}</span>
      <h3>${item.term}</h3>
      <p>${item.simpleMeaning}</p>

      <div class="term-actions">
        <button class="view-btn">View Details</button>
        <button class="save-btn ${isSaved(item.term) ? "saved" : ""}">
          ${isSaved(item.term) ? "Saved ✓" : "Save"}
        </button>
      </div>
    `;

    card.querySelector(".view-btn").addEventListener("click", () => {
      openModal(item);
    });

    card.querySelector(".save-btn").addEventListener("click", () => {
      toggleSave(item.term);
    });

    termsGrid.appendChild(card);
  });
}

function openModal(item) {
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

dictionarySearch.addEventListener("input", () => {
  showSuggestions();
  renderTerms();
});

dictionarySearch.addEventListener("focus", () => {
  if (dictionarySearch.value.trim() !== "") {
    showSuggestions();
  }
});

searchBtn.addEventListener("click", () => {
  suggestionsBox.style.display = "none";
  renderTerms();
});

document.addEventListener("click", event => {
  if (!dictionarySearch.parentElement.contains(event.target)) {
    suggestionsBox.style.display = "none";
  }
});

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
    currentCategory = button.dataset.category;

    renderTerms();
  });
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
    toggleSave(selectedTerm.term);
  }
});

const urlParams = new URLSearchParams(window.location.search);
const queryFromHome = urlParams.get("search");

if (queryFromHome) {
  dictionarySearch.value = queryFromHome;
}

renderTerms();
