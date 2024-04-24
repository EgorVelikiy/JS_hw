const div = document.querySelectorAll('.reveal')

function isVisible(elem) {
    elem.forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        if (bottom < 0) {
            return el.className = 'reveal'
        }
    
        if (top > window.innerHeight) {
            return el.className = 'reveal'
        }
        return el.className = 'reveal reveal_active'
    })
}


window.addEventListener('scroll', setInterval(() => {
    isVisible(div)
}, 200))