// ЕСЛИ НЕСКОЛЬКО КНОПОК

let dropValue = Array.from(document.querySelectorAll('.dropdown__value'));
let lists = Array.from(document.querySelectorAll('.dropdown__list'));

let links = Array.from(document.querySelectorAll('.dropdown__link'));


dropValue.forEach((value, index) => {
  value.onclick = function () {
    if (lists[index].classList.contains('dropdown__list_active')) {
      lists[index].classList.remove('dropdown__list_active');
    } else {
      lists[index].classList.add('dropdown__list_active');
    }

    let items = Array.from(lists[index].children);
    items.forEach((item) => {
      item.onclick = function () {
      dropValue[index].textContent = item.textContent;
      lists[index].classList.remove('dropdown__list_active');
      }
    })
  }
})

links.forEach((link) => {
  link.onclick = function (event) {
    event.preventDefault();
  }
})


// ЕСЛИ 1 КНОПКА
// let dropValue = document.querySelector('.dropdown__value');
// let list = document.querySelector('.dropdown__list');
// let items = document.querySelectorAll('.dropdown__item');
// let links = Array.from(document.querySelectorAll('.dropdown__link'));
// console.log(links);

// dropValue.onclick = function () {
//   if (list.classList.contains('dropdown__list_active')) {
//     list.classList.remove('dropdown__list_active');
//   } else {
//     list.classList.add('dropdown__list_active');
//   }
// }

// items.forEach((item) => {
//   item.onclick = function () {
//     // console.log(item.textContent);
//     dropValue.textContent = item.textContent;
//     list.classList.remove('dropdown__list_active');
//   }
// })

// links.forEach((link) => {
//   link.onclick = function (event) {
//     event.preventDefault();
//   }
// })
