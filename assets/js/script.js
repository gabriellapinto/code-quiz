var timeCounter = document.querySelector(".time");
var questionsBox = document.querySelector("#questions-box");
var selectionsBox = document.querySelector("#selections-box");
var correctAnswerBox = document.querySelector("#wrong-right-box");
var startBtn = document.querySelector("#start-btn");
var optionBtns = document.querySelector(".option");
var secondsLeft = 75;
var currentQuestionIndex = 0;
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
        // Deducts 10 seconds if user answers incorrectly
        if (isCorrect = false) {
            secondsLeft = secondsLeft - 10;
        }
    }, 1000);
}

// Landing page content with instructions on how the quiz works
questionsBox.textContent = "Coding Quiz Challenge!";
selectionsBox.textContent = "Try to answer the following code related questions within the time limit. Incorrect answers will penalize your score and time!";

// The runQuiz function is called when the start button is clicked
function runQuiz() {
    // Hides start button
    startBtn.style.display = "none";
    // Shows answer buttons
    optionBtns.style.display = "block";
    // Starts timer
    timer();

}

function showQuestion() {
    var question = questions[currentQuestionIndex];
    questionsBox.textContent = question.text;
    for (i = 0; i < selectionsBox.length; i++) {
        selectionsBox[i].textContent = questions.options[i];
        selectionsBox[i].addEventListener("click", selectAnswer);
    }
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


    // Emptys both the question and answers container
    // selectionsBox.textContent = "";
    // questionsBox.textContent = "";













    // Getting the question
    // questionsBox.textContent = questions[id].text;

    // // Getting the options
    // const op1 = document.getElementById('op1');
    // const op2 = document.getElementById('op2');
    // const op3 = document.getElementById('op3');
    // const op4 = document.getElementById('op4');

    // // Providing option text
    // op1.innerText = questions[id].options[0].text;
    // op2.innerText = questions[id].options[1].text;
    // op3.innerText = questions[id].options[2].text;
    // op4.innerText = questions[id].options[3].text;

    // // Providing true/false value to options
    // op1.value = questions[id].options[0].isCorrect;
    // op2.value = questions[id].options[1].isCorrect;
    // op3.value = questions[id].options[2].isCorrect;
    // op4.value = questions[id].options[3].isCorrect;









