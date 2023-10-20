const progress = document.getElementById('progress');
const sendButton = document.getElementById('send');
const fileButton = document.querySelector('.input__wrapper-button');

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
  xhr.send(file);

  xhr.onprogress = function(event) {
    progress.value = event.loaded / event.total;
  };
})


fileButton.onclick = function() {
  progress.value = 0;
}








