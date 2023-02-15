// -- TIMER CODE -- //
var timeCounter = document.querySelector(".time");
var questionsBox = document.querySelector("#questions-box");
var selectionsBox = document.querySelector("#selections-box");
var secondsLeft = 75;

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

function timeDone() {
    timeCounter.textContent = "Sorry, you're out of time!";
}
// -- END TIMER CODE -- //

// -- START LANDING PAGE CODE -- //

questionsBox.textContent = "Coding Quiz Challenge!";
selectionsBox.textContent = "Try to answer the following code related questions within the time limit. Incorrect answers will penalize your score and time!";



// -- RUN QUIZ FUNCTION -- //

function runQuiz() {
    timer();



}


