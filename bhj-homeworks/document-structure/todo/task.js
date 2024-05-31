let form = document.querySelector('form')
let input = document.querySelector('.tasks__input')
let append = document.querySelector('.tasks__add')
let tasksList = document.querySelector('.tasks__list')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value.trim().length != 0) {
    tasksList.insertAdjacentHTML('afterbegin', `
    <div class="task">
    <div class="task__title">${input.value}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`);
    let tasksActive = document.querySelectorAll('.task')

    tasksActive.forEach((task) => {
      task.lastElementChild.onclick = (e) => {
        e.preventDefault();
        task.remove();
      }
    })
    form.reset()
  }
})
