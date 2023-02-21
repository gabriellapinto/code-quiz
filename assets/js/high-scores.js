var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
var clearBtn = document.getElementById("clear-scores");
var finalScore = score * secondsLeft;
var initials = document.getElementById("initials")


















// clears the high score board when clear button is clicked
clearBtn.addEventListener("click", function() {
    highScores = [];
    localStorage.removeItem("highscores");
    updateHighScores();
})