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

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const messageError = document.querySelector("#message-error");
    const successMessage = document.querySelector("#success-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!emailInput.validity.valid) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter a message.";
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = "Your message was submitted successfully!";
            contactForm.reset();
        }
    });

    nameInput.addEventListener("input", function () {
        if (nameInput.value.trim() !== "") {
            nameError.textContent = "";
        }
    });

    emailInput.addEventListener("input", function () {
        if (emailInput.value.trim() !== "" && emailInput.validity.valid) {
            emailError.textContent = "";
        }
    });

    messageInput.addEventListener("input", function () {
        if (messageInput.value.trim() !== "") {
            messageError.textContent = "";
        }
    });
}