const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
let currentSection = "home";
   sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();
