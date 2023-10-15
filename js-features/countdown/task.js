const timer = document.getElementById("timer");
let timerId = setInterval(() => {
  if (timer.textContent != 0) {
    timer.textContent -= 1;
  } else {
    alert("Вы победили в конкурсе!");
    clearTimeout(timerId);
    return;
  }
  }, 1000);

