const openWindowBtns = document.getElementsByClassName("open-window");
const closeWindowBtns = document.getElementsByClassName("close-window");
const hamburgerBtn = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar-links");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

for (const btn of openWindowBtns) {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.style.display = "block";
  });
}

for (const btn of closeWindowBtns) {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
}