const items = document.getElementById('items');
const item = document.querySelector('.item');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  
  if (xhr.readyState !== xhr.DONE) {
    loader.classList.add('loader_active');
  } else {
    loader.classList.remove('loader_active');

    const parsedData = JSON.parse(xhr.responseText);

    let valutes = parsedData.response.Valute;

    Object.entries(valutes).forEach((valute) => {
      let charCode = valute[1].CharCode;
      let value = valute[1].Value;

      createItem(charCode, value);
    });
  }
});

xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();

function createItem(code, value) {
  let item = document.createElement('div');
  items.appendChild(item);
  item.classList.add('item');
  item.innerHTML = `<div class="item__code">${code}</div>
    <div class="item__value">${value}</div>
    <div class="item__currency">руб.</div>`
  return item;
}
