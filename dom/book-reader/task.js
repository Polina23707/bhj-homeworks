const fontSize = Array.from(document.querySelectorAll('.font-size'));

const book = document.getElementById('book');

let fontIndex = null;

fontSize.forEach((font, index) => {

  font.onclick = function(event) {
    fontIndex = index;
    font.classList.add('font-size_active');
    fontSize.filter((element, index) => index !== fontIndex)
    .forEach((element) => element.classList.remove('font-size_active'));

    event.preventDefault();
    
    switch (font.getAttribute('data-size')) {
      case "big":
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
        break;
      case "small":
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
        break;
      default:
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }
  }
})


