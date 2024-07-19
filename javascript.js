document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('header .navbar ul li a');

  menu.addEventListener('click', function() {
      header.classList.toggle('toggle');
  });

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          header.classList.remove('toggle');
      });
  });

  window.addEventListener('scroll', function() {
      if (header.classList.contains('toggle')) {
          header.classList.remove('toggle');
      }
  });
});
