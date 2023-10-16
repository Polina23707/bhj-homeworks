let input = document.getElementById('task__input');
let tasklist = document.getElementById('tasks__list');

document.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault();
    let task = document.createElement('div');
    tasklist.appendChild(task);

    task.outerHTML = `<div class="task">
    <div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;
    input.value = '';

    const removes = Array.from(document.querySelectorAll('.task__remove'));

    removes.forEach((remove) => {
      remove.onclick = function () {
        console.log('remove');
        console.log(remove.parentElement.className);
        remove.parentElement.remove();
      }
    })
  }
});





