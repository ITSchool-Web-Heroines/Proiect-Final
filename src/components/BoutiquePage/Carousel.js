import React from "react";
import "../../styles/BoutiquePage/carousel.scss"
import Picture from "../../images/boutique.gif";

const Carousel = () => {
    return (
        <div id="carousel">
            <img class="slideshow-img" src={Picture} />
        </div>
    )
}
export default Carousel;


