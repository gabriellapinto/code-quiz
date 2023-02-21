var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var clearBtn = document.getElementById("clear-scores");
var initials = document.getElementById("initials");
var storedHighScores = JSON.parse(localStorage.getItem("highScores"));

if (storedHighScores !== null) {
    highScores = storedHighScores;
}

updateHighScores();

// saves the highscores to the variable for local storage
function saveHighScores() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// updates the high scores list and adds it as an item in the html
function updateHighScores() {
    var highScoresList = document.getElementById("high-scores-list")
    highScoresList.innerHTML = "";
    // Appends the high score and initials to the page using a list
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highScores[i].initials + " = " + highScores[i].score;
        highScoresList.appendChild(li);
    }
}

// clears the high score board when clear button is clicked
clearBtn.addEventListener("click", function() {
    highScores = [];
    localStorage.removeItem("highScores");
    updateHighScores();
})