const signButton = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const input = Array.from(document.querySelectorAll('.control'));

document.getElementById('signin__form').addEventListener('submit', (e) => {
  e.preventDefault()
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
  var formData = new FormData(form);
  xhr.send(formData);

  xhr.onload = function() {
    let answer = JSON.parse(xhr.responseText)

    if (answer.success) {
      welcome.classList.toggle('welcome_active');
      signin.classList.toggle('signin_active');

      welcome.firstElementChild.setAttribute('id', answer.user_id);
      welcome.firstElementChild.textContent = answer.user_id;
    } else {
      alert('Неверный пользователь / пароль!');
      input[0].value = '';
      input[1].value = '';
    }
  }
})