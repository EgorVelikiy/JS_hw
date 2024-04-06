const clickCount = document.getElementById('clicker__counter');

const cookie = document.getElementById('cookie');

let counter = 0


function clicker (initialValue) {
    let counter = initialValue
    return () => {
        if (counter % 2  === 0) {
            clickCount.textContent = Number(clickCount.textContent) + 1;
            cookie.width -= 20;
            cookie.height -= 20;
        } else {
            clickCount.textContent = Number(clickCount.textContent) + 1;
            cookie.width += 20
            cookie.height += 20
        }
        counter++;
    }
}

let result = clicker(1)
cookie.onclick = result
