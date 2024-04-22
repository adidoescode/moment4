"use strict";

// Navigationsmeny

let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");
let navMenuEl = document.getElementById("nav-menu");

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

function toggleMenu() {


    if (navMenuEl.style.display === "none" || navMenuEl.style.display === "") {
        navMenuEl.style.display = "block";
    }
    else {
        navMenuEl.style.display = "none";
    }
}

