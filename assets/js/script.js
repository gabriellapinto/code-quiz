var timeCounter = document.querySelector(".time");
var questionsBox = document.querySelector("#questions-box");
var selectionsBox = document.querySelector("#selections-box");
var correctAnswerBox = document.querySelector("#wrong-right-box");
var secondsLeft = 75;
var currentQuestion = 0;

// Timer that operates throughout quiz
function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeCounter.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeDone();
        }

    }, 1000);
}
// Timer reaches 0 or user finishes quiz
function timeDone() {
    timeCounter.textContent = "Sorry, you're out of time!";
}

// Landing page content with instructions on how the quiz works
questionsBox.textContent = "Coding Quiz Challenge!";
selectionsBox.textContent = "Try to answer the following code related questions within the time limit. Incorrect answers will penalize your score and time!";




// The runQuiz function is called when the start button is clicked
function runQuiz() {
    timer();

}

// START HERE 

function changeQuestions(id) {
    var question = document.getElementById("#questions-box");

    // Getting the question
    question.innerText = questions[id].text;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Providing option text
    op1.innerText = questions[id].options[0].text;
    op2.innerText = questions[id].options[1].text;
    op3.innerText = questions[id].options[2].text;
    op4.innerText = questions[id].options[3].text;

    // Providing true/false value to options
    op1.value = questions[id].options[0].isCorrect;
    op2.value = questions[id].options[1].isCorrect;
    op3.value = questions[id].options[2].isCorrect;
    op4.value = questions[id].options[3].isCorrect;




}




