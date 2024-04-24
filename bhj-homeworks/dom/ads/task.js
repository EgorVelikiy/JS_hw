const rotators = document.querySelectorAll('.rotator__case')

const change = function(index) {
    counter = index
    return () => {
        rotators.forEach((r) => {r.classList.remove('rotator__case_active')})
        rotators[counter].className = 'rotator__case rotator__case_active'
        counter++
        if (counter == rotators.length) {
            counter = 0
        }
    }
}

const result = change(0)
setInterval(() => {
    result();
}, 1000)
