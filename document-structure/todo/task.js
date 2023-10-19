let input = document.getElementById('task__input');
let tasklist = document.getElementById('tasks__list');
let add = document.getElementById('tasks__add');

let remove = document.createElement('a');

add.addEventListener('click', (e) => addTask(e));

document.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault();
    addTask(e);
  }
});

function addTask(event) {
  event.preventDefault();

  if (input.value.trim()) {
    let task = document.createElement('div');
    tasklist.appendChild(task);
    task.classList.add('task');

    let taskTitle = document.createElement('div');
    task.appendChild(taskTitle);
    taskTitle.classList.add('task__title');
    taskTitle.textContent = input.value;
    
    task.insertAdjacentElement('beforeEnd', remove);
    remove.outerHTML = '<a href="#" class="task__remove">&times;</a>'
    console.log(task.lastChild);

    task.lastChild.onclick = function () {
      console.log('delete');
      task.remove();
    }
    input.value = '';
  }
}






