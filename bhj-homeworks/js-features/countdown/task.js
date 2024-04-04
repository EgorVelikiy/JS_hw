const timer = document.getElementById('timer')


let timerInterval = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1;
    if (Number(timer.textContent) === -1) {
        alert('Вы победили в конкурсе!')
        clearInterval(timerInterval)
        timer.textContent = 0
    }
}, 1000)

