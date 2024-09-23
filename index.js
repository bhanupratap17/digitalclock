const clock = document.getElementById("clock")



setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// stopwatch
let startTime, updatedTime, difference, timerInterval;
let isRunning = false;
let elapsedTime = 0;

const stopwatchDisplay = document.getElementById('stopwatch');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Format time to HH:MM:SS
function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    // let milliseconds = Math.floor((time % 1000) / 10);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            updatedTime = Date.now();
            elapsedTime = updatedTime - startTime;
            stopwatchDisplay.textContent = formatTime(elapsedTime);
        }, 1000);
    }
}

// Stop the stopwatch
function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
    }
}

// Reset the stopwatch
function resetStopwatch() {
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    stopwatchDisplay.textContent = "00:00:00";
}

// Event listeners for buttons
startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
