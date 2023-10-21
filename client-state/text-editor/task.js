const editor = document.getElementById('editor');

// editor.addEventListener('input', () => localStorage.setItem('text', editor.value));

document.addEventListener('DOMContentLoaded', () => editor.value = localStorage.text);

window.addEventListener('beforeunload', () =>localStorage.setItem('text', editor.value));