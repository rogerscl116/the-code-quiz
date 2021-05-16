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
var h1 = document.getElementsByTagName("h1");
var p = document.getElementsByTagName("p");

// set timer to 75
var timeRemaining = 75;
var timeInterval = 0;
var questionIndex = 0;
var score = 0;
var penalty = 10;

currentTime.textContent = "Assigned Time: " + timeRemaining + " seconds.";


// create function to display the questions
function renderQuestion(questionIndex) {
    quizDiv.innerHTML = "";
    h1.innerHTML = "";
    choices.innerHTML = "";
    // loop through each element of the array
    for (var i = 0; i < questions.length; i++) {
        var quizQuestion = questions[questionIndex].q;
        var quizChoices = questions[questionIndex].c;
        choices.textContent = quizQuestion;
    }
    quizChoices.forEach(function(listItem){
        var li = document.createElement("li");
        li.textContent = listItem;
        quizDiv.appendChild(choices);
        choices.appendChild(li);
        li.addEventListener("click", checkAnswer);
    })
}

// create function to check the answers


// create function to append the last page


// add event listener when user clicks start quiz
timer.addEventListener("click", function(){

    if (timeInterval === 0) {
        timeInterval = setInterval(function(){
            timeRemaining--;
            currentTime.textContent = timeRemaining + " seconds left."

            if (timeRemaining <= 0) {
                clearInterval(timeInterval);
                quizComplete();
                currentTime.textContent = "Time is UP!"
            }
        }, 1000)
    }
    renderQuestion(questionIndex);
});