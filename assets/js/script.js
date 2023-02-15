// -- TIMER CODE -- //
var timeCounter = document.querySelector(".time");
var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeCounter.textContent = "Time: " + secondsLeft;

        if (secondsLeft >= 0) {

        }

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeDone();
        }


    }, 1500);
} 

function timeDone() {
    timeCounter.textContent = "Sorry, you're out of time!";
}

setTime();
// -- END TIMER CODE -- //

// -- START LANDING PAGE CODE -- //
var questionsBox = document.querySelector("#questions-box");
var selectionsBox = document.querySelector("#selections-box");

questionsBox.textContent = "Coding Quiz Challenge!";
selectionsBox.textContent = "Try to answer the following code related questions within the time limit. Incorrect answers will penalize your score and time!";



