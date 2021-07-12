/*
 * Title: Stopwatch
 * Description: stopwatch with three features (start, pause, reset)
 * Author: Samin Yasar
 * Date: 12/July/2021
 */

/*
 * select all necessary DOM
 * define all functionality
 * call events
 */

// DOM selecting

const displayEl = document.getElementById("display");
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secondEl = document.getElementById("second");
const btnStartEl = document.getElementById("btnStart");
const btnPauseEl = document.getElementById("btnPause");
const btnResetEl = document.getElementById("btnReset");

let globalSecond = 0;
let isStart = false;
let intervalId = null;

// functionality define

function startTimer() {
    if (!isStart) {
        isStart = true;
        intervalId = setInterval(() => {
            globalSecond++;
            let timeRecords = getTimer(globalSecond);
            updateDisplay(timeRecords);
        }, 1000);
    }
}

function pauseTimer() {
    if (isStart) {
        isStart = false;
        clearInterval(intervalId);
    }
}

function resetTimer() {
    pauseTimer();
    globalSecond = 0;
    hourEl.textContent = "00";
    minEl.textContent = "00";
    secondEl.textContent = "00";
}

function getTimer(sec) {
    let minute = parseInt(sec / 60);
    let hour = parseInt(minute / 60);
    let second = parseInt(sec % 60);
    return {
        hour,
        minute,
        second,
    };
}

function updateDisplay(timeRecords) {
    hourEl.textContent =
        timeRecords.hour < 10 ? `0${timeRecords.hour}` : timeRecords.hour;
    minEl.textContent =
        timeRecords.minute < 10 ? `0${timeRecords.minute}` : timeRecords.minute;
    secondEl.textContent =
        timeRecords.second < 10 ? `0${timeRecords.second}` : timeRecords.second;
}

// call events

btnStartEl.addEventListener("click", startTimer);
btnPauseEl.addEventListener("click", pauseTimer);
btnResetEl.addEventListener("click", resetTimer);
