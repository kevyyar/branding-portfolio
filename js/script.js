let hamburgerMenu = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");
let closeBtn = document.querySelector(".close-btn");

let openMenu = () => {
  mobileMenu.classList.add("active");
  closeBtn.style.display = "block";
};

let closeMenu = () => {
  mobileMenu.classList.remove("active");
  closeBtn.style.display = "none";
};

hamburgerMenu.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
