let form = document.querySelector('form')
let input = document.querySelector('.tasks__input')
let append = document.querySelector('.tasks__add')
let tasksList = document.querySelector('.tasks__list')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value != null) {
    
    let newTask = document.createElement('div');
    newTask.classList.add('task');
    
    let newTitle = document.createElement('div');
    newTitle.classList.add('task__title');
    newTitle.innerHTML = `${input.value}`;
    
    let newRemove = document.createElement('a');
    newRemove.classList.add('task__remove');
    newRemove.innerHTML = '&times';
    newRemove.href = '#';
    
    newTask.appendChild(newTitle);
    newTask.appendChild(newRemove);
    
    tasksList.appendChild(newTask);
    
    newRemove.onclick = (e) => {
      e.preventDefault();
      newTask.remove()
    }
    form.reset()
  }
})