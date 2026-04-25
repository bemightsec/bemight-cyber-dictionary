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

const cyberTerms = typeof CYBER_TERMS !== "undefined" ? CYBER_TERMS : [];

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

  if (cyberTerms.length === 0) {
    savedTermsGrid.innerHTML = `
      <div class="empty-state">
        <h3>Terms data not loaded</h3>
        <p>
          Please check that terms-data.js is linked before saved.js in saved.html.
        </p>
      </div>
    `;
    return;
  }

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
