/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/
var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var changetext = document.getElementById("togglethis")

function maketheTheme(mode) {
    if (mode === "dark") {
        darkTheme.disabled = false;
        changetext.innerHTML="Light"
    } else if (mode === "light") {
        darkTheme.disabled = true;
        changetext.innerHTML="Dark"

    }
}

toggle.addEventListener("click", () => {
    if (toggle.checked) {
        maketheTheme("dark");
    } else {
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