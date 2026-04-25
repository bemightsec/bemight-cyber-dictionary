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

const questionBank = typeof QUESTION_BANK !== "undefined" ? QUESTION_BANK : [];

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

  if (questionBank.length === 0) {
    alert("Quiz data not loaded. Please check that quiz-data.js is linked before quiz.js.");
    return;
  }

  const filteredQuestions = getFilteredQuestions();

  if (filteredQuestions.length === 0) {
    alert("No questions found for this category yet.");
    return;
  }

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
  quizCategory.value = selectedCategory;
  questionCount.value = String(selectedCount);

  quizResult.classList.remove("show");
  quizBox.classList.remove("show");
  quizSetup.style.display = "block";
}

function tryAnotherRandomQuiz() {
  quizCategory.value = "Mixed";
  questionCount.value = "5";

  quizResult.classList.remove("show");
  quizBox.classList.remove("show");
  quizSetup.style.display = "block";

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
