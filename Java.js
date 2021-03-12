var millis=5000;
var highscore = 0;
var score = 0;
var check = 1;
var timeElm = document.getElementById("countdownClock");
var highElm = document.getElementById("highScore");
var playClicks = document.getElementById("playerClicks");
var goer;
function startTimerFunction() {
    if (check) {
        check = 0;
        goer = setInterval(function() {runCode()}, 10);
    }
}

function runCode() {
    if (millis > 0) {
        millis -= 10;
        timeElm.innerHTML = String(Math.floor(millis/1000))+"."+String(millis % 1000);
        playClicks.innerHTML = "Player Score: " + String(score);
    }
    else {
        end();
    }
}

function end() {
    clearInterval(goer);
    if (score > highscore) {
        highscore = score;
    }
    millis = 5000;
    score = 0;
    timeElm.innerHTML = "--";
    highElm.innerHTML = highscore;
    playClicks.innerHTML = "Player Score";
    check = 1;
}

function scoreFunction() {
    if (!check) {
        score++;
    }
} 