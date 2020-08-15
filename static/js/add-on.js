/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/
var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

function maketheTheme(mode) {
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fal fa-sun-o";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fal fa-moon-o";
    }
}

toggle.addEventListener("click", () => {
    if (toggle.className === "fal fa-moon-o") {
        maketheTheme("dark");
    } else if (toggle.className === "fal fa-sun-o") {
        maketheTheme("light");
    }
});


// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
maketheTheme(savedTheme);

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);

    // same as above
}