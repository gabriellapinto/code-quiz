var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var clearBtn = document.getElementById("clear-scores");
var finalScore = score * secondsLeft;
var initials = document.getElementById("initials")

// saves the highscores to the variable for local storage
function saveHighScores() {
    localStorage.setItem("highscores", JSON.stringify(highScores));
}


function addHighScores() {
    highScores.push({})
}

function updateHighScores() {
    var highScoresList = document.getElementById("high-")

    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highScores[i].initials + " = " + highScores[i].finalScore;
        highScoresList.appendChild(li);
    }
}













// clears the high score board when clear button is clicked
clearBtn.addEventListener("click", function() {
    highScores = [];
    localStorage.removeItem("highscores");
    updateHighScores();
})