var questionSource = [
    {
        question: "1. Commonly used data types DO Not Include:",
        choices: ["a. strings","b. booleans","c. alerts","d. numbers"],
        answer: "c"
    },
    {
        question: "2. Arrays in JavaScript can be used to store ________.",
        choices: ["a. numbers and strings","b. other arrays","c. booleans","d. all of the above"],
        answer: "d"
    },
    {
        question: "3. A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. JavaScript","b. terminal/bash","c. for loops","d. console.log"],
        answer: "d"
    },
    {
        question: "4. The condition in an if / else statement is enclosed with _______.",
        choices: ["a. quotes","b. curly brackets","c. parenthesis","d. square brackets"],
        answer: "c"
    },
    {
        question: "5. String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas","b. curly brackets","c. quotes","d. parenthesis"],
        answer: "c"
    },
]

function countDown () {
    var timerInterval = setInterval(function(){
        secondLeft--;
        timeLeft.textContent = "Time left: " + secondLeft + " s";
        if (secondLeft <= 0){
            clearInterval(timerInterval);
            timeLeft.textContent = "Time is up!";
            finish.textContent = "Time is up!";
            gameOver();
        } else if (questionCount >= questionSource.length +1) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}