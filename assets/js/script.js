// add array of questions and answers
var questions = [
    {
        q: "What does HTML stand for?",
        c: ["home tool markup language", "hyperlinks and text manipulation language", "hypertext markup language", "home tool manipulation language"],
        a: "hypertext markup language"
    },
    {
        q: "Math.random() returns a random number between what two numbers?",
        c: ["1 and 9", "5 and 15", "0 and 100", "0 and 1"],
        a: "0 and 1"
    },
    {
        q: "What HTML tag is used to define an internal style sheet?",
        c: ["<style>", "<script>", "<css>", "none of these"],
        a: "<style>"
    },
    {
        q: "String values must be enclosed within ____ when being assigned to variables.",
        c: ["commas", "quotes", "curly brackets", "parenthesis"],
        a: "quotes"
    },
    {
        q: "A JavaScript Boolean represents one of two possible values. What are the two values?",
        c: ["true or false", "numbers or letters", "functions or objects", "arrays or dates"],
        a: "true or false"
    },
];

// add declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var quizDiv = document.querySelector("#quizDiv");
var choices = document.querySelector("#choices");
var container = document.querySelector("#container");

// set timer to 75
var timeRemaining = 75;
var timeInterval = 0;
var questionIndex = 0;
var score = 0;
var penalty = 10;
// create new ul element
var ulCreate = document.createElement("ul");

currentTime.textContent = "Assigned Time: " + timeRemaining + " seconds";

// add event listener when user clicks start quiz
timer.addEventListener("click", function(){
    if (timeInterval === 0) {
        timeInterval = setInterval(function() {
            timeRemaining--;
            currentTime.textContent = timeRemaining + " seconds left"

            if (timeRemaining <= 0) {
                clearInterval(timeInterval);
                completeQuiz();
                currentTime.textContent = "Time is UP!"
            }
        }, 1000)
    }
    renderQuestion(questionIndex);
});


// create function to display the questions
function renderQuestion(questionIndex) {
    quizDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // loop through each element of the array
    for (var i = 0; i < questions.length; i++) {
        var quizQuestion = questions[questionIndex].q;
        var quizChoices = questions[questionIndex].c;
        quizDiv.textContent = quizQuestion;
    }
    quizChoices.forEach(function(newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", checkAnswer);
    })
}

// create function to check the answers
function checkAnswer(event) {
    
    if (event.target.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        // if answer is correct
        if (event.target.textContent == questions[questionIndex].a) {
            score++;
            createDiv.textContent = "Correct!";
        }

        // if answer is incorrect, subtract 10 seconds
        else {
            createDiv.textContent = "Incorrect!";
            timeRemaining = timeRemaining - penalty;
        }
    }
    questionIndex++;

    if (questionIndex >= questions.length) {
        completeQuiz();
        createDiv.textContent = "You have completed the quiz! You answered " + score + "/" + questions.length + " questions correct.";
    } else {
        renderQuestion(questionIndex);
    }
    quizDiv.appendChild(createDiv);
}

// create function to append the last page
function completeQuiz() {
    // clear existing data
    quizDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // add heading element and append
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finished!";
    quizDiv.appendChild(createH1);

    // add paragraph element and append
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");
    quizDiv.appendChild(createP);
}
// replace time remaining with score

if (timeRemaining >= 0) {
    var timeLeft = timeRemaining;
    var createP2 = document.createElement("p");
    clearInterval(timeInterval);
    createP.textContent = "Your final score is " + timeLeft + ".";
    quizDiv.appendChild(createP2);
}