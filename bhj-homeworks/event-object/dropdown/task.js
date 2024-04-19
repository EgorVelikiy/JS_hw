const list = document.querySelector('.dropdown__list')
const elem = document.querySelector('.dropdown__value')
const li = document.querySelectorAll('.dropdown__item')
const link = document.querySelectorAll('.dropdown__link')

elem.onclick = () => {
    list.classList.toggle('dropdown__list_active');
}

li.forEach((el) => {
  el.onclick = (e) => {
    elem.textContent = el.textContent;
    list.className = 'dropdown__list'
    e.preventDefault()
  }
})
