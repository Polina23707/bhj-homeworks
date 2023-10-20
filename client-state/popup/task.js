const popup = document.getElementById('subscribe-modal')
const close = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
  
  if (document.cookie !== 'close=true') {
    popup.classList.toggle('modal_active');
  }
});

close.onclick = function() {
  popup.classList.remove('modal_active');
  document.cookie = 'close=true';
}

