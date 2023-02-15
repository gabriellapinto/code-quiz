var timeCounter = document.querySelector(".time");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeCounter.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeDone();
        }


    }, 1500);
} 

function timeDone() {
    timeCounter.textContent = "TIME DONE";
}

setTime();