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