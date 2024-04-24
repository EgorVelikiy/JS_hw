const fontSizes = document.querySelectorAll('.font-size')
const book = document.querySelector('.book')

const content = document.querySelector('.book__content')


const colors = document.querySelector('.book__control_color')
const controlColors = colors.querySelectorAll('.color')

const backgrounds = document.querySelector('.book__control_background')
const controlBackgrounds = backgrounds.querySelectorAll('.color')

fontSizes.forEach((fonstSize, index) => {
    fonstSize.onclick = (f) => {
        fontSizes.forEach((f) => {f.classList.remove('font-size_active')})
        fonstSize.classList.add('font-size_active')
        f.preventDefault()
        if (index === 0) {
            book.classList.remove('book_fs-big')
            book.classList.add('book_fs-small')
        } else if (index === 1) {
            book.classList.remove('book_fs-big')
            book.classList.remove('book_fs-small')
            book.className = book.className
        } else {
            book.classList.remove('book_fs-small')
            book.classList.add('book_fs-big')
        }
    }
})

controlColors.forEach((color, index) => {
    color.onclick = (c) => {
        controlColors.forEach((colr) => {colr.classList.remove('color_active')})
        color.classList.add('color_active')
        c.preventDefault()
        if (index === 0) {
            content.className = 'book__content book_color-black'
        } else if (index === 1) {
            content.className = 'book__content book_color-gray'
        } else {
            content.className = 'book__content book_color-whitesmoke'
        }
    }
})

controlBackgrounds.forEach((background, index) => {
    background.onclick = (bc) => {
        bookName = book.className
        controlBackgrounds.forEach((backgr) => {backgr.classList.remove('color_active')})
        background.classList.add('color_active')
        bc.preventDefault()
        if (index === 0) {
            book.classList.remove('book_bg-gray')
            book.classList.remove('book_bg-white')
            book.classList.add('book_bg-black')
        } else if (index === 1) {
            book.classList.remove('book_bg-white')
            book.classList.remove('book_bg-black')
            book.classList.add('book_bg-gray')
        } else {
            book.classList.remove('book_bg-black')
            book.classList.remove('book_bg-gray')
            book.classList.add('book_bg-white')
        }
    }
})