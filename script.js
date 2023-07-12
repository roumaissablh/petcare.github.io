


window.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    function makeNavLinkActive(index) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      navLinks[index].classList.add('active');
    }
  
    function checkSectionInView() {
      const scrollPosition = window.scrollY;
    
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const threshold = 50; // Adjust this value as needed
    
        if (scrollPosition >= sectionTop - threshold && scrollPosition < sectionTop + sectionHeight - threshold) {
          makeNavLinkActive(index);
        }
      });
    }
  
    window.addEventListener('scroll', checkSectionInView);
  });