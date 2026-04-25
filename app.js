const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const homeSearch = document.getElementById("homeSearch");
const homeSearchBtn = document.getElementById("homeSearchBtn");
const openDictionaryBtn = document.getElementById("openDictionaryBtn");
const startLearningBtn = document.getElementById("startLearningBtn");
const termOfDayBtn = document.getElementById("termOfDayBtn");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

homeSearchBtn.addEventListener("click", () => {
  alert("Dictionary page will be added next. Search will work after we build it.");
});

homeSearch.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    alert("Dictionary page will be added next. Search will work after we build it.");
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
