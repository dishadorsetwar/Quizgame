const questions = [
  {
    question: " Which language is primarily used for web development?",
    options:  ["Python", "Java", "JavaScript", "C++"],
    answer:"JavaScript"
  },
{
   question: "What does HTML stand for?",
   options: ["HyperText Markup Language", "HyperText Markdown Language", "HighText Machine Language", "Hyper Transfer Markup Language"],
   answer: "HyperText Markup Language"
},
{
   question:" Which CSS property changes the text color?",
   options: ["font-style", "text-color", "color", "background"],
   answer: "color"
},
{
  question:" Which CSS property is used to make text bold?",
  options: ["font-weight", "font-style", "text-decoration", "text-align"],
  answer: "font-weight"

},
{
  question: "What keyword is used in JavaScript to handle errors?",
  options: ["try", "catch", "finally", "All of the above"],
  answer: "All of the above"

},
{
  question: "Which one is a popular JavaScript frontend framework?",
  options: ["Laravel", "Django", "React", "Flask"],
  answer: "React"
},
{
  question: "In JavaScript, what does the DOM stand for?",
 options: ["Document Object Model", "Data Object Method", "Design Object Module", "Display Oriented Model"],
 answer: "Document Object Model"

},
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById('home-screen').classList.remove('active');
  document.getElementById('score-screen').classList.remove('active');
  document.getElementById('quiz-screen').classList.add('active');
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById('question-number').innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById('question-text').innerText = questionData.question;

  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = '';

  questionData.options.forEach(option => {
    const li = document.createElement('li');
    li.innerText = option;
    li.onclick = () => selectOption(li, option);
    optionsList.appendChild(li);
  });

  
  document.getElementById('next-btn');
  updateProgressBar();
}

function selectOption(selectedLi, selectedAnswer) {
  const options = document.querySelectorAll('#options-list li');
  options.forEach(opt => opt.onclick = null); 

  const correctAnswer = questions[currentQuestion].answer;

  if (selectedAnswer === correctAnswer) {
    selectedLi.classList.add('correct');
    score++;
  } else {
    selectedLi.classList.add('wrong');
    options.forEach(opt => {
      if (opt.innerText === correctAnswer) opt.classList.add('correct');
    });
  }

  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById('quiz-screen').classList.remove('active');
  document.getElementById('score-screen').classList.add('active');

  document.getElementById('final-score').innerText = `${score} / ${questions.length}`;

  let message = "Good Try!";
  if (score === questions.length) {
    message = "Great!";
  } else if (score === 0) {
    message = "Better luck next time!";
  }

  document.getElementById('score-message').innerText = message;
  updateProgressBar(); 
}

function updateProgressBar() {
  const progress = (score / questions.length) * 100;
  const quizBar = document.getElementById('progress-bar');
  const scoreBar = document.getElementById('score-progress-bar');

  if (quizBar) quizBar.style.width = `${progress}%`;
  if (scoreBar) scoreBar.style.width = `${progress}%`;
}







