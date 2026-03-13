
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modified: " + document.lastModified;


// HAMBURGER MENU

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (menuButton.textContent === "☰") {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});