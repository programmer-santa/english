// Glossary terms data
const glossaryTerms = [
  {
    letter: "A",
    term: "Algorithm",
    definition: "A set of steps used to solve a problem or perform a task in programming.",
  },
  {
    letter: "B",
    term: "Backend",
    definition: "The part of a software system that handles logic, database, and server-side processing.",
  },
  {
    letter: "C",
    term: "Class",
    definition:
      "A template used in object-oriented programming to create objects with specific attributes and methods.",
  },
  {
    letter: "D",
    term: "Database",
    definition: "An organized collection of data that can be accessed and managed electronically.",
  },
  { letter: "E", term: "Entity", definition: "A real-world object or concept that has data stored in a database." },
  {
    letter: "F",
    term: "Framework",
    definition: "A collection of tools and libraries used to simplify and speed up software development.",
  },
  { letter: "G", term: "Git", definition: "A version control system used to track changes in source code." },
  { letter: "H", term: "HTML", definition: "The standard language used to create and structure content on the web." },
  {
    letter: "I",
    term: "Interface",
    definition: "A point where two systems or software components interact or communicate.",
  },
  {
    letter: "J",
    term: "JavaScript",
    definition: "A programming language used to create dynamic and interactive web pages.",
  },
  { letter: "K", term: "Keyword", definition: "A reserved word in a programming language with a special meaning." },
  {
    letter: "L",
    term: "Loop",
    definition: "A programming structure used to repeat a set of instructions until a condition is met.",
  },
  {
    letter: "M",
    term: "Model",
    definition: "A representation of data or business logic, often used in MVC architecture.",
  },
  {
    letter: "N",
    term: "Node.js",
    definition: "A runtime environment that allows JavaScript to run on the server side.",
  },
  {
    letter: "O",
    term: "Object",
    definition: "An instance of a class that contains data and methods to manipulate that data.",
  },
  {
    letter: "P",
    term: "Python",
    definition: "A high-level programming language known for its simplicity and readability.",
  },
  {
    letter: "Q",
    term: "Query",
    definition: "A request for data or information from a database using a specific syntax.",
  },
  {
    letter: "R",
    term: "Repository",
    definition: "A storage location for software packages or source code, often managed by version control.",
  },
  {
    letter: "S",
    term: "SQL",
    definition: "Structured Query Language used to communicate with and manipulate databases.",
  },
  {
    letter: "T",
    term: "Testing",
    definition: "The process of evaluating software to ensure it works correctly and meets requirements.",
  },
  {
    letter: "U",
    term: "UI/UX",
    definition: "User Interface and User Experience design focused on creating intuitive software interactions.",
  },
  {
    letter: "V",
    term: "Variable",
    definition: "A storage location with an associated name that contains data which can be modified.",
  },
  {
    letter: "W",
    term: "Web API",
    definition:
      "Application Programming Interface that allows different software applications to communicate over the web.",
  },
  {
    letter: "X",
    term: "XML",
    definition: "Extensible Markup Language used to store and transport data in a structured format.",
  },
  {
    letter: "Y",
    term: "YAML",
    definition: "A human-readable data serialization standard often used for configuration files.",
  },
  {
    letter: "Z",
    term: "Zero-based indexing",
    definition: "A numbering system where the first element of a sequence is assigned index 0.",
  },
]

// Game state
let gameState = {
  isSpinning: false,
  currentTerm: null,
  score: { correct: 0, incorrect: 0 },
  gameStarted: false,
  showResult: false,
  rotation: 0,
}

// DOM elements
const wheel = document.getElementById("spinning-wheel")
const spinBtn = document.getElementById("spin-btn")
const gameArea = document.getElementById("game-area")
const resultArea = document.getElementById("result-area")
const currentWord = document.getElementById("current-word")
const currentDefinition = document.getElementById("current-definition")
const userSpelling = document.getElementById("user-spelling")
const correctScore = document.getElementById("correct-score")
const incorrectScore = document.getElementById("incorrect-score")
const totalScore = document.getElementById("total-score")
const correctSpelling = document.getElementById("correct-spelling")
const userAnswer = document.getElementById("user-answer")
const resultEmoji = document.getElementById("result-emoji")

// Spin the wheel function
function spinWheel() {
  if (gameState.isSpinning) return

  gameState.isSpinning = true
  gameState.showResult = false
  userSpelling.value = ""

  // Hide game area and result area
  gameArea.classList.add("hidden")
  resultArea.classList.add("hidden")

  // Update button
  spinBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Spinning...'
  spinBtn.disabled = true

  // Add spinning animation
  wheel.classList.add("spinning")

  // Random rotation between 1080 and 2160 degrees (3-6 full rotations)
  const newRotation = gameState.rotation + 1080 + Math.random() * 1080
  gameState.rotation = newRotation
  wheel.style.transform = `rotate(${newRotation}deg)`

  // Select random term after spin animation
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * glossaryTerms.length)
    gameState.currentTerm = glossaryTerms[randomIndex]
    gameState.isSpinning = false
    gameState.gameStarted = true

    // Remove spinning animation
    wheel.classList.remove("spinning")

    // Show current term
    currentWord.textContent = gameState.currentTerm.term
    currentDefinition.textContent = `"${gameState.currentTerm.definition}"`

    // Show game area
    gameArea.classList.remove("hidden")

    // Hide spin button
    spinBtn.style.display = "none"

    // Focus on input
    userSpelling.focus()
  }, 2000)
}

// Mark answer as correct
function markCorrect() {
  gameState.score.correct++
  updateScore()
  showResult(true)
}

// Mark answer as incorrect
function markIncorrect() {
  gameState.score.incorrect++
  updateScore()
  showResult(false)
}

// Show result
function showResult(isCorrect) {
  gameState.showResult = true

  // Hide game area
  gameArea.classList.add("hidden")

  // Update result display
  correctSpelling.textContent = gameState.currentTerm.term
  userAnswer.textContent = userSpelling.value
  resultEmoji.textContent = isCorrect ? "🎉" : "📚"

  // Show result area
  resultArea.classList.remove("hidden")

  // Reset after 3 seconds
  setTimeout(() => {
    resultArea.classList.add("hidden")
    gameState.currentTerm = null
    gameState.gameStarted = false
    userSpelling.value = ""

    // Show spin button again
    spinBtn.style.display = "flex"
    spinBtn.innerHTML = '<i class="fas fa-play"></i> Spin Again!'
    spinBtn.disabled = false
  }, 3000)
}

// Update score display
function updateScore() {
  correctScore.textContent = gameState.score.correct
  incorrectScore.textContent = gameState.score.incorrect
  totalScore.textContent = gameState.score.correct + gameState.score.incorrect
}

// Reset game
function resetGame() {
  gameState = {
    isSpinning: false,
    currentTerm: null,
    score: { correct: 0, incorrect: 0 },
    gameStarted: false,
    showResult: false,
    rotation: 0,
  }

  // Reset UI
  updateScore()
  gameArea.classList.add("hidden")
  resultArea.classList.add("hidden")
  spinBtn.style.display = "flex"
  spinBtn.innerHTML = '<i class="fas fa-play"></i> Spin the Wheel!'
  spinBtn.disabled = false
  userSpelling.value = ""
  wheel.style.transform = "rotate(0deg)"
  wheel.classList.remove("spinning")
}

// Allow Enter key to submit
userSpelling.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // You can add auto-submit logic here if needed
    userSpelling.blur() // Remove focus to show the buttons clearly
  }
})
