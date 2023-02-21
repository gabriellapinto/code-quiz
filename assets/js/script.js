var timeCounter = document.querySelector(".time");
var questionsBox = document.querySelector("#questions-box");
var correctAnswerBox = document.querySelector("#wrong-right-box");
var startBtn = document.querySelector("#start-btn");
var instructions = document.querySelector("#intro");
var optionBtns = document.querySelector(".option");
var secondsLeft = 75;
var currentQuestionIndex = 0;
var score = 0;
var highScores = [];

// Timer that operates throughout quiz
function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeCounter.textContent = "Time: " + secondsLeft;
        // Clears interval and displays text when timer reaches 0
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeCounter.textContent = "Sorry, you're out of time!";
        }
    }, 1000);
}

// Landing page content with instructions on how the quiz works
questionsBox.textContent = "Coding Quiz Challenge!";

// The runQuiz function is called when the start button is clicked
function runQuiz() {
    // Starts timer
    timer();
    showQuestion();
    // Shows answer buttons
    

}

function showQuestion() {
    startBtn.style.display = "none";
    instructions.style.display = "none";

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
        correctAnswerBox.textContent = "Wrong!";
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
    clearInterval(timerInterval);
    var finalScore = score * secondsLeft;




}




// When answer option is clicked, it will go on to the next question
optionBtns.addEventListener("click", function () {
    if (questions[currentQuestionIndex] == undefined) {
        questionsBox.textContent = "Quiz Over!";
    } else {
        questionsBox.textContent = questions.text[currentQuestionIndex];
        currentQuestionIndex++;
    }

});







