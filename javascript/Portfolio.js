const hambuger_menu = document.querySelector(".Mobile_Hamburger_Menu");
const Mobile_nav =  document.querySelector(".Mobile_Navbar");
const close_button =  document.querySelector(".close_button");

hambuger_menu.addEventListener("click", () => {
    Mobile_nav.style.display = "block";
    Mobile_nav.classList.toggle("active");
});

close_button.addEventListener("click", () => {
    Mobile_nav.style.display = "none";
});

document.querySelectorAll(".nav-link").forEach(
    n => n.addEventListener("click", () => {
        Mobile_nav.style.display = "none";
    }))