const editor = document.getElementById('editor');



editor.addEventListener('change', () => localStorage.setItem('text', editor.value));


document.addEventListener('DOMContentLoaded', () => editor.value = localStorage.text);
