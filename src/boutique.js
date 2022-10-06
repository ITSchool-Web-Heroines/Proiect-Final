import React from "react";
import ReactDom from "react-dom";
import AppBoutique from "./AppBoutique";

ReactDom.render(
    <AppBoutique />,
    document.getElementById("boutique")
);


/*Carousel Slider*/
const carouselSlideshow = document.getElementsByClassName("slideshow-img");

const nextImageDelay = 4000;
let currentImageCounter = 0;

carouselSlideshow[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    carouselSlideshow[currentImageCounter].style.opacity = 0;
    currentImageCounter = (currentImageCounter + 1) % carouselSlideshow.length;
    carouselSlideshow[currentImageCounter].style.opacity = 1;
}