let tabs = document.querySelectorAll('.tab')
let tabContent = document.querySelectorAll('.tab__content')

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabContent.forEach(tc => {tc.className = 'tab__content'})
    tabs.forEach(t => {t.className = 'tab'});
    tab.className = 'tab_active'
    
    tabContent[index].className = 'tab__content tab__content_active'
  })
})