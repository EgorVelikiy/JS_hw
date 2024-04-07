let getHole = index => document.getElementById(`hole${index}`);
let win = document.getElementById('dead');
let lose = document.getElementById('lost');

let counterWin = 0
let counterLose = 0
for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if (hole.className.includes('hole hole_has-mole')) {
            counterWin++;
            win.textContent = counterWin;
        } else if (hole.className.includes('hole')) {
            counterLose++;
            lose.textContent = counterLose
        }
        if (counterWin === 10) {
            alert('Победа!')
            counterWin = 0;
            counterLose = 0
            win.textContent = counterWin;
            lose.textContent = counterLose
        } else if (counterLose === 5) {
            alert('Вы проиграли!')
            counterLose = 0;
            counterWin = 0;
            lose.textContent = counterLose
            win.textContent = counterWin;
        }
    }
};

