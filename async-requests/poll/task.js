const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  
  if (xhr.readyState === xhr.DONE) {
    const parsedData = JSON.parse(xhr.responseText);

    title.textContent = parsedData.data.title;

    Object.entries(parsedData.data.answers).forEach((answer) => {
      let answerVariant = document.createElement('button');
      answers.appendChild(answerVariant);
      answerVariant.textContent = answer[1];
      answerVariant.classList.add('poll__answer');

      answerVariant.onclick = function() {
        alert('Спасибо, ваш голос засчитан!');
      }
    });
  } 
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.send();


