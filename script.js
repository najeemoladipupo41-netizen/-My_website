document.getElementById('year').textContent = new Date().getFullYear();
const button = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
button.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
