/*
  This js file is for individual users to modify the scripts for their personal site,
  or for the implementation of features specifically for their site. Anything that
  is an official part of the theme (ex. Pull Requests) should be included in main.js
  and follow the formatting and style given.
*/
var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

function maketheTheme(mode) {
    console.log('Function called');
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fal fa-sun-o";
        console.log(toggle.className);
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fal fa-moon-o";
        console.log(toggle.className);
    }
}

toggle.addEventListener("click", () => {
    console.log("the button was pressed");
    if (toggle.className === "fal fa-moon-o") {
        console.log("changing theme");
        maketheTheme("dark");
        console.log("theme changed");
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