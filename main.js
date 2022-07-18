"use strict";

const ratingList = document.querySelectorAll(".rating");
const btnSubmit = document.querySelector(".submit-btn");

const cardRating = document.querySelector(".container");
const thankYou = document.querySelector(".thanks-wrapper");
const displayScreen = document.querySelector(".screen");

let currentActive;

ratingList.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        // Reseting ratings to inactive
        ratingList.forEach((reset) => {
            reset.classList.remove("active");
        });
        // Setting the clicked active
        rating.classList.add("active");
        currentActive = rating.textContent;
    });
});

btnSubmit.addEventListener("click", () => {
    cardRating.style.display = "none";
    thankYou.style.display = "block";
    displayScreen.textContent = `You selected ${currentActive} out of 5`;
});
