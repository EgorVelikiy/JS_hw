let editor = document.querySelector('#editor')
let storedText = localStorage.getItem('text')

if (storedText) {
    editor.value = localStorage.getItem('text')
}

editor.oninput = () => {
    const text = editor.value
    localStorage.setItem('text', text)
}

let clear = document.querySelector('.clear')
clear.onclick = () => {
    localStorage.clear()
    editor.value = null
}
