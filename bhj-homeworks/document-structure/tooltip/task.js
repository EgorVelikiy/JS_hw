let toolTips = document.querySelectorAll('.has-tooltip')

let tip = document.createElement('div')
tip.classList.add('tooltip');
tip.innerHTML = ''
toolTips.forEach((tool) => {
  tool.onclick = (e) => {
    if (tip.innerHTML == tool.title) {
      tip.classList.toggle('tooltip_active')
    } else {
      tip.innerHTML = tool.title;
      tip.style.left = tool.offsetLeft + 'px';
      tool.insertAdjacentElement('afterEnd', tip)
      tip.classList.add('tooltip_active')
    }
    e.preventDefault()
  }
})