  const roles = [" Frontend Developer", " Web Designer", "Student"];
  let index = 0;
  let letterIndex = 0;
  let currentRole = '';
  let isDeleting = false;
  const speed = 50;

  function type() {
    const element = document.getElementById('changing-text');

    currentRole = roles[index];
    
    if (!isDeleting) {
      letterIndex++;
      element.textContent = currentRole.slice(0, letterIndex);
      
     if (letterIndex === currentRole.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 1000); 
      }
    } else {
      letterIndex--;
      element.textContent = currentRole.slice(0, letterIndex);
      
      if (letterIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length; 
      }
    }

    setTimeout(type, speed);
  }

  document.addEventListener('DOMContentLoaded', () => {
    type(); 
  });

  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollY = window.scrollY; // Get the current vertical scroll position

    if (scrollY > 100) { // You can adjust the value for when to change the background
      navbar.classList.add('scrolled'); // Add the class to make the background white
    } else {
      navbar.classList.remove('scrolled'); // Remove the class to return to transparent
    }
  });

  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  }
  
  document.addEventListener("click", function(event) {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.querySelector(".hamburger");
  
    // Check if the clicked element is neither the hamburger icon nor the links
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      navLinks.classList.remove("show"); // Close the menu
    }
  });