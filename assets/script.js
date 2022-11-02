var startBtn = document.querySelector("#startBtn");
var introPage = document.querySelector("#homepage");

var questionPage = document.querySelector("#questionPage");
var actualProblem = document.querySelector("#actualProblem");

var clickBtn = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#answerBtn1");
var answerBtn2 = document.querySelector("#answerBtn2");
var answerBtn3 = document.querySelector("#answerBtn3");
var answerBtn4 = document.querySelector("#answerBtn4");

var resultScore = document.querySelector("#resultPage");
var finalScore = document.querySelector("#finalScore");
var userInitial = document.querySelector(".initial");

var submitBtn = document.querySelector("#submitBtn");
var highscorePage = document.querySelector("#highscorePage");
var recordScore = document.querySelector("#recordScore");
var scoreCheck = document.querySelector("#scoreCheck");
var finish = document.querySelector("#finish");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");
var checkAnswer = document.querySelector("#checkAnswer");

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

var questionNumber = 0;

//quiz page set up
function startQuestion (i) {
    actualProblem.textContent = questionSource[i].question;
    answerBtn1.textContent = questionSource[i].choices[0];
    answerBtn2.textContent = questionSource[i].choices[1];
    answerBtn3.textContent = questionSource[i].choices[2];
    answerBtn4.textContent = questionSource[i].choices[3];
    questionNumber = i;
};

var timeLeft = document.getElementById("timer");
var secondLeft = 50;
var questionCount = 1;
var totalScore = 0;

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
};

//start quiz
function quizStart () {
    introPage.style.display = "none";
    questionPage.style.display = "block";
    questionNumber = 0
    countDown();
    startQuestion(questionNumber);
};

startBtn.addEventListener("click", quizStart);

//answer check
function finalAnswer (event) {
    event.preventDefault();
    checkAnswer.style.display = "block";
    setTimeout(function () {
        checkAnswer.style.display = "none";
    }, 1000);
    if (questionSource[questionNumber].answer == event.target.value) {
        checkAnswer.textContent = "Correct!!!";
        totalScore = totalScore++;
    } else {
        secondLeft = secondLeft - 10;
        checkAnswer.textContent = "Wrong!";
    }

    if (questionNumber < questionSource.length -1) {
        startQuestion(questionNumber +1);
    } else {
        gameOver();
    }
    questionCount++;
    console.log(questionCount)
};

//end game
function gameOver () {
    questionPage.style.display = "none";
    resultScore.style.display = "block";
    console.log(resultScore)
    finalScore.textContent = "Your final score is :" + totalScore;
    timeLeft.style.display = "none";
};

//answer check
clickBtn.forEach(function(click){
    click.addEventListener("click", finalAnswer);
});

//score result 
function scoreResult() {
    var latestResult = localStorage.getItem("PastScore");
    if (latestResult !== null){
        newList = JSON.parse(latestResult);
        return newList;
    } else {
        newList=[];
    }
    return newList;
};

//save score and intial
function saveScore(i) {
    var saveResult = scoreResult();
    saveResult.push(i);
    localStorage.setItem("PastScore", JSON.stringify(saveResult));
};

function addScore() {
    var scoreProp = {
        user: userInitial.value,
        score: totalScore
    }
    saveScore(scoreProp);
};

//score ranking
function ranking() {
    var noneRankingList = scoreResult();
    if (scoreResult == null) {
        return;
    } else {
        noneRankingList.sort(function(a,b) {
            return b.score - a.score;
        });
        return noneRankingList;
    };
};

//display scoreboard


//high score check
scoreCheck.addEventListener("click",function(event){
    event.preventDefault();
    homepage.style.display="none";
    highscorePage.style.display="block";
    questionPage.style.display="none";
    resultPage.style.display="none";
});

//submit score button
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    homepage.style.display="none";
    highscorePage.style.display="block";
    questionPage.style.display="none";
    resultPage.style.display="none";
    addScore();
});

//goback button
backBtn.addEventListener("click", function(event){
    event.preventDefault();
    homepage.style.display="block";
    highscorePage.style.display="none";
    questionPage.style.display="none";
    resultPage.style.display="none";
    location.reload();
});

//clear score
clearBtn.addEventListener("click",function(event){

})