document.getElementById("hamburger").onclick = function () {
  var navbar = document.getElementById("nav");
  navbar.classList.toggle("show");
};

var navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
      var navbar = document.getElementById("nav");
      navbar.classList.toggle("show");
  });
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
      // Controlla se l'ancora punta a un ID interno della pagina corrente
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
          event.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const offset = 152;
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });
          } 
      }
  });
});