const tips = Array.from(document.querySelectorAll('.has-tooltip'));
const tipText = [];

let createTip = (title) => {
  let tipText = `<div class="tooltip">${title}</div>`;
  return tipText;
}

tips.forEach((tip) => {
  
  tip.insertAdjacentHTML("beforeEnd", createTip(tip.title));

  tip.addEventListener('click', (event) => {
    event.preventDefault();

    if (tip.firstElementChild.classList.contains('tooltip_active')) {
      tip.firstElementChild.classList.remove('tooltip_active');
    } else {
      tip.firstElementChild.classList.add('tooltip_active');
    }
  });
})





