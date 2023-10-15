const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function () {
  cookie.width = ++clickerCounter.textContent % 2 ? 250 : 200;
}