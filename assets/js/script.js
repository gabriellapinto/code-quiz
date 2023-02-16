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



function changeQuestions() {

}


