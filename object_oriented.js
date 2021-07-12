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

// Main object constructor

class StopWatch {
    constructor(hourEl, minuteEl, secondEl) {
        this.hourEl = hourEl;
        this.minuteEl = minuteEl;
        this.secondEl = secondEl;

        this.globalHour = 0;
        this.globalMinute = 0;
        this.globalSecond = 0;
        this.isStart = false;
        this.intervalId = null;
    }

    startTimer() {
        if (!this.isStart) {
            this.isStart = true;
            this.intervalId = setInterval(() => {
                this.globalSecond++;
                let timeRecords = this.getTimer(this.globalSecond);
                this.updateDisplay.call(this, timeRecords);
            }, 1000);
        }
    }

    pauseTimer() {
        if (this.isStart) {
            this.isStart = false;
            clearInterval(this.intervalId);
        }
    }

    resetTimer() {
        this.pauseTimer();
        this.globalHour = 0;
        this.globalMinute = 0;
        this.globalSecond = 0;
        this.hourEl.textContent = `00`;
        this.minuteEl.textContent = `00`;
        this.secondEl.textContent = `00`;
    }

    getTimer(sec) {
        let minute = parseInt(sec / 60);
        let hour = parseInt(minute / 60);
        let second = parseInt(sec % 60);
        return {
            hour,
            minute,
            second,
        };
    }

    updateDisplay(timeRecords) {
        this.hourEl.textContent =
            timeRecords.hour < 10 ? `0${timeRecords.hour}` : timeRecords.hour;
        this.minuteEl.textContent =
            timeRecords.minute < 10
                ? `0${timeRecords.minute}`
                : timeRecords.minute;
        this.secondEl.textContent =
            timeRecords.second < 10
                ? `0${timeRecords.second}`
                : timeRecords.second;
    }
}

const stopwatch_1 = new StopWatch(hourEl, minEl, secondEl);

// call events

btnStartEl.addEventListener("click", stopwatch_1.startTimer.bind(stopwatch_1));
btnPauseEl.addEventListener("click", stopwatch_1.pauseTimer.bind(stopwatch_1));
btnResetEl.addEventListener("click", stopwatch_1.resetTimer.bind(stopwatch_1));
