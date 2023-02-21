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

// adds highscores to the list
function addHighScores(initials, finalScore) {
    highScores.push({initials: initials, score: finalScore});
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });
    if (highScores.length > 10) {
        highScores.pop();
    }
    saveHighScores();
    updateHighScores();
}

// 
function updateHighScores() {
    var highScoresList = document.getElementById("high-scores-list")
    highScoresList.innerHTML = "";
    // Appends the high score and initials to the page using a list
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = highScores[i].initials + " = " + highScores[i].finalScore;
        highScoresList.appendChild(li);
    }
}

// clears the high score board when clear button is clicked
clearBtn.addEventListener("click", function() {
    highScores = [];
    localStorage.removeItem("highScores");
    updateHighScores();
})