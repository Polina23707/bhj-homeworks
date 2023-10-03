const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let counter = 0;
cookie.onclick = function () {
  counter += 1;
  clickerCounter.textContent = counter;

  if (clickerCounter.textContent % 2 === 0) {
    cookie.width = 200;
  } else {
    cookie.width = 230;
  }
}