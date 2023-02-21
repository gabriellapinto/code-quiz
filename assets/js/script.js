var timeCounter = document.querySelector(".time");
var questionsBox = document.querySelector("#questions-box");
var correctAnswerBox = document.querySelector("#wrong-right-box");
var startBtn = document.querySelector("#start-btn");
var instructions = document.querySelector("#intro");
var submitBtn = document.querySelector("#submit-initials");
var optionBtns = document.querySelectorAll(".option");
var secondsLeft = 75;
var currentQuestionIndex = 0;
var score = 0;
var highScores = [];
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Timer that operates throughout quiz
function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeCounter.textContent = "Time: " + secondsLeft;
        // Clears interval and displays text when timer reaches 0
        if(secondsLeft === 0) {
            endQuiz();
            clearInterval(timerInterval);
            timeCounter.textContent = "Sorry, you're out of time!";
        }
    }, 1000);
}

// Landing page content with instructions on how the quiz works
questionsBox.textContent = "Coding Quiz Challenge!";

// The runQuiz function is called when the start button is clicked
function runQuiz() {
    // Starts timer and runs questions
    timer();
    showQuestion();
}

function showQuestion() {
    startBtn.style.display = "none";
    instructions.style.display = "none";

    // shows questions and answers
    var question = questions[currentQuestionIndex];
    questionsBox.textContent = question.question;
    for (var i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = questions[currentQuestionIndex].answers[i];
        optionBtns[i].addEventListener("click", selectAnswer);
        optionBtns[i].style.display = "block";
    }
}

function selectAnswer() {
    // Checks if user answers wrong or right
    if (this.textContent === questions[currentQuestionIndex].correctAnswer) {
        score++;
        correctAnswerBox.textContent = "Correct!";
    } else {
        secondsLeft -= 10;
        correctAnswerBox.textContent = "Wrong! 10 Second Penalty.";
    }
    // Increases the question array to show next question
    currentQuestionIndex++;
    // If there is another question, show it. If not, end the quiz
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}


function endQuiz() {
    var finalScore = score * secondsLeft;
    instructions.textContent = "Your Final Score is: " + finalScore;
    timeCounter.style.display = "none";

    for (var i = 0; i < optionBtns.length; i++) {
        optionBtns[i].style.display = "none";
        correctAnswerBox.style.display = "none";
        instructions.style.display = "block";
        questionsBox.textContent = "Quiz Over!";
        document.getElementById("initials-form").style.display = "block";
    } 

    submitBtn.addEventListener("click", function() {
        var initials = document.getElementById("initials").value;
        var scoreData = {initials: initials, score: score * secondsLeft};
        highScores.push(scoreData);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        window.location.href = "./high-scores.html";
    })
}









