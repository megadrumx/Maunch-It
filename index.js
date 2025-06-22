const toggleBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    toggleBtn.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});

const badgeIcon = document.querySelector('.badge-icon');
window.addEventListener('scroll', () => {
const rotation = window.scrollY % 360;
badgeIcon.style.transform = `rotate(${rotation}deg)`;
  });
