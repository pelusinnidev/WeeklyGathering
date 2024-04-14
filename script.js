const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});