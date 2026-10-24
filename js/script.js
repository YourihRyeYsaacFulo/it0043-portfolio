const menuButton = document.querySelector("#menu-toggle");
const menu = document.querySelector("#main-nav");

menuButton.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});


const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


const hobbies = [
    {
        title: "Badminton",
        description: "I enjoy playing badminton."
    },
    {
        title: "Video Editing",
        description: "I am passionate about video editing."
    }
];

const hobbiesContainer = document.querySelector("#hobbies-container");

if (hobbiesContainer) {
    hobbiesContainer.innerHTML = "";

    if (hobbies.length === 0) {
        hobbiesContainer.textContent = "No hobbies to display.";
    } else {
        hobbies.forEach(function (hobby) {
            const hobbyTitle = document.createElement("h3");
            const hobbyDescription = document.createElement("p");

            hobbyTitle.textContent = hobby.title || "Untitled Hobby";
            hobbyDescription.textContent = hobby.description || "No description available.";

            hobbiesContainer.appendChild(hobbyTitle);
            hobbiesContainer.appendChild(hobbyDescription);
        });
    }
}