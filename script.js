// deklarasi variabel dengan menyeleksi tag yang ada di file hmtl
const humburger = document.querySelector(".humburger-menu");
const icon = document.querySelector(".humburger-menu .fas");
const navLinks = document.querySelector(".nav-links");

// function untuk humburger menu
function humburgerMenu() {
navLinks.classList.toggle("toggle");
icon.classList.toggle("fa-bars");
icon.classList.toggle("fa-times");
}

// event untuk humburger menu
humburger.addEventListener("click", humburgerMenu);