let toolTips = document.querySelectorAll('.has-tooltip')

toolTips.forEach((tool, index) => {
  let tip = document.createElement('div')
  tip.classList.add('tooltip');
  tip.innerHTML = tool.title;
  tip.style.left = tool.offsetLeft + 'px';
  tool.appendChild(tip);
  tool.onclick = (e) => {
    let tips = document.querySelectorAll('.tooltip')
    tips.forEach((t, i) => {
      if (t.parentElement !== tool)
        t.className = 'tooltip'
    })
    e.preventDefault()
    tip.classList.toggle('tooltip_active')
  }
})