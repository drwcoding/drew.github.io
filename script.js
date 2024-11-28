function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
 
  if (e.key === 'F12') {
      e.preventDefault();
  }
 
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
  }

  if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
  }
});
