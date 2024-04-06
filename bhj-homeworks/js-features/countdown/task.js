let timerElement = document.getElementById('timer');

let timeInSeconds = Number(timerElement.textContent);

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let Seconds = seconds % 60;
    return `${hours}:${minutes}:${Seconds}`;
}

let countdown = setInterval(() => {
    if (timeInSeconds > -1) {
        timerElement.textContent = formatTime(timeInSeconds);
        timeInSeconds--;
    } else {
        alert('Вы победили в конкурсе!')
        clearInterval(countdown);
    }
}, 1000);