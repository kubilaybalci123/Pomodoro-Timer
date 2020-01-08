var bTime = 5;
var sTime = 25;
var sec = 59;

function addBreak() {
    if (bTime < 5) {
        bTime++;
    }
    document.getElementById("break-result").innerHTML = bTime;
}

function minusBreak() {
    if (bTime > 1) {
        bTime--;
    }
    document.getElementById("break-result").innerHTML = bTime;
}

function addSession() {
    if (sTime < 25) {
        sTime++;
    }
    document.getElementById("session-result").innerHTML = sTime;
    document.getElementById("timer").innerHTML = sTime + ":00";
}

function minusSession() {
    if (sTime > 1) {
        sTime--;
    }
    document.getElementById("session-result").innerHTML = sTime;
    document.getElementById("timer").innerHTML = sTime + ":00";

}
const timebalancer = {
    repeat: true,
}
var startCountdown;
var startButton = document.getElementById("startButton");


function Countdown() {

    var min = sTime - 1;
    var timer = document.getElementById("timer");
    var title = document.getElementById("title");
    title.innerHTML = "Session Time";
    if (timebalancer.repeat) {
        timebalancer.repeat = false;
        startCountdown = setInterval(function() {
            timer.innerHTML = min + ":" + sec;
            sec--;
            if (sec == 0 && min !== 0) {
                timer.innerHTML = min + ":" + "00";
                min--;
                sec = 59;
            }
            if (min == 0 && sec == 0) {
                if (title.innerHTML == "Session Time") {
                    var audio_1 = new Audio("sounds/Violet.mp3");
                    audio_1.play();
                    timer.innerHTML = "00:00";
                    title.innerHTML = "Break Time";
                    min = bTime - 1;
                    sec = 60;

                } else if (title.innerHTML == "Break Time") {
                    var audio_2 = new Audio("sounds/Corner.mp3");
                    audio_2.play();
                    timer.innerHTML = "00:00";
                    title.innerHTML = "Session Time";
                    min = sTime - 1;
                    sec = 60;
                }
            }
        }, 1000);
    }

    var pauseButton = document.getElementById("pauseButton");
    pauseButton.onclick = function() {
        if (title.innerHTML == "Session Time") {
            min = sTime - 1;
        } else if (title.innerHTML == "Break Time") {
            sTime = bTime;
            min = bTime - 1;
            title.innerHTML = "Break Time";
        }
        timebalancer.repeat = true
        clearInterval(startCountdown);
    }
}


function resetTimer() {
    min = sTime - 1;
    sec = 59;
    document.getElementById("timer").innerHTML = "25" + ":" + "00";
    timebalancer.repeat = true;
    clearInterval(startCountdown);
}
