import React from "react";
import ReactDom from "react-dom";
import Section4 from "./Section4";


const btn = document.querySelector(".buttons");

btn.addEventListener("click", (event) => {
    const item = document.querySelectorAll(".tabs article, .buttons a");

    item.forEach((currentValue) => {
        currentValue.classList.remove("active");
    });

    event.target.classList.add("active");
    const selector = event.target.dataset.target;
    const article = document.querySelector(selector);
    article.classList.add("active");
});

const submitButton = document.getElementById("submitbutton1");
const popup1 = document.querySelector(".popup1");


submitButton.addEventListener(`click`, () => {
    if (popup1.style.display === `none`) {
        popup1.style.display = `block`;
    } else {
        popup1.style.display = `none`;
    }
})

const submitButton2 = document.getElementById("submitbutton2");
const popup = document.querySelector(".popup");


submitButton2.addEventListener(`click`, () => {
    if (popup.style.display === `none`) {
        popup.style.display = `block`;
    } else {
        popup.style.display = `none`;
    }
})

const closepopup1 = document.getElementById("closepopup1");
closepopup1.addEventListener(`click`, () => {
    if (popup1.style.display !== `none`) {
        popup1.style.display = `none`;
    } else {
        popup1.style.display = `block`;
    }
})

const closepopup2 = document.getElementById("closepopup2");
closepopup2.addEventListener(`click`, () => {
    if (popup.style.display !== `none`) {
        popup.style.display = `none`;
    } else {
        popup.style.display = `block`;
    }
})