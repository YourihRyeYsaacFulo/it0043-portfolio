const menuButton = document.querySelector("#menu-toggle");
const menu = document.querySelector("#main-nav");

menuButton.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});