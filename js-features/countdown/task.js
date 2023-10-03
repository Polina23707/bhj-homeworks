const timer = document.getElementById("timer");
setInterval(() => {
  if (timer.textContent != 0) {
    timer.textContent -= 1;
  } else {
    alert("Вы победили в конкурсе!");
    return;
  }
  }, 1000);

