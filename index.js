// function toggleNav() {
//     const nav = document.getElementById('nav-menu');
//         nav.classList.toggle('active');
//     }


const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
navLinks.classList.toggle('show');
});

