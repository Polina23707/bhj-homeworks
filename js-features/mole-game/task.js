const hole1 = document.getElementById("hole1");
const hole2 = document.getElementById("hole2");
const hole3 = document.getElementById("hole3");
const hole4 = document.getElementById("hole4");
const hole5 = document.getElementById("hole5");
const hole6 = document.getElementById("hole6");
const hole7 = document.getElementById("hole7");
const hole8 = document.getElementById("hole8");
const hole9 = document.getElementById("hole9");
let holes = [hole1, hole2, hole3, hole4, hole5, hole6, hole7, hole8, hole9];

const dead = document.getElementById("dead");
let deadCounter = 0;
const lost = document.getElementById("lost");
let lostCounter = 0;

for (let i = 0; i < holes.length - 1; i++) {
  holes[i].onclick = function() {
    if (holes[i].className.includes('hole_has-mole')) {
      deadCounter += 1;
      dead.textContent = deadCounter; 

      if (deadCounter === 10) {
        alert("Победа!");
        dead.textContent = 0;
        deadCounter = 0;
        lostCounter = 0;
        lost.textContent = 0;
      }
    } else {
      lostCounter += 1;
      lost.textContent = lostCounter;

      if (lostCounter === 5) {
        alert("Вы проиграли!");
        dead.textContent = 0;
        deadCounter = 0;
        lostCounter = 0;
        lost.textContent = 0;
      }
    }
  }
}