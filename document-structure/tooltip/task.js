const links = Array.from(document.querySelectorAll('.has-tooltip'));

let createTip = (title) => {
  let tipText = `<div class="tooltip">${title}</div>`;
  return tipText;
}

links.forEach((link) => {
  link.insertAdjacentHTML("afterEnd", createTip(link.title));

  link.addEventListener('click', (event) => {
    event.preventDefault();

    link.nextElementSibling.classList.toggle('tooltip_active');

    link.nextElementSibling.setAttribute('style', `left: ${link.getBoundingClientRect().left}px; top: ${link.getBoundingClientRect().top + 20}px` );
  });
})





