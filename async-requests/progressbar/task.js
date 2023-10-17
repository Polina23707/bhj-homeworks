const progress = document.getElementById('progress');

const file = document.getElementById('file');

file.addEventListener('onload', () => {
  // var formData = new FormData(file);
  var xhr = new XMLHttpRequest();
  // console.log('fff');

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.onprogress = function(event) {
    progress.value = event.loaded / event.total;
    console.log('load');
  }

  xhr.send();
  // e.preventDefault();
})










