// add declared variables
var highScores = document.querySelector("#highScores");
var clearScores = document.querySelector("#clearScores");
var goBack = document.querySelector("#goBack");

// get local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScores.appendChild(createLi);
    }
}

// create eventlistener to clear scores
clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// create eventlistener to go back to index page
goBack.addEventListener("click", function() {
    location.replace("index.html");
});