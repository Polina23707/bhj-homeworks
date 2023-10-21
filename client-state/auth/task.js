const signButton = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const input = Array.from(document.querySelectorAll('.control'));

document.addEventListener('DOMContentLoaded', () => {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.firstElementChild.textContent = localStorage.id;

  if (!localStorage.id) {
      signin.classList.add('signin_active');
      welcome.classList.remove('welcome_active');
      document.getElementById('signin__form').addEventListener('submit', (e) => {
      e.preventDefault()
      const xhr = new XMLHttpRequest();
    
      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);
      var formData = new FormData(form);
      xhr.responseType = 'json';
      xhr.send(formData);
    
      xhr.onload = function() {
        let answer = xhr.response
    
        if (answer.success) {
          welcome.classList.add('welcome_active');
          signin.classList.remove('signin_active');
    
          welcome.firstElementChild.setAttribute('id', answer.user_id);
          welcome.firstElementChild.textContent = answer.user_id;

          localStorage.setItem('id', answer.user_id);
        } else {
          alert('Неверный пользователь / пароль!');
          form.reset();
          return;
        }
      }
    })

  }
});

