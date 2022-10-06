import React from "react";
import "../../styles/BoutiquePage/carousel.scss"
import Picture from "../../images/LIP_LAB_SUPPORTING_PG_DESKTOP_RATES.jpg"
import Picture2 from "../../images/200811_LipLab_HP_Refresh_Carousel_StoreLocator_Irvine_01.jpg"
import Picture3 from "../../images/200811_LipLab_HP_Refresh_Carousel_StoreLocator_Brooklyn.jpg"

const Carousel = () => {
    return (
        <div id="carousel">
            <img class="slideshow-img" src={Picture} />
            <img class="slideshow-img" src={Picture2} />
            <img class="slideshow-img" src={Picture3} />
        </div>
    )
}
export default Carousel;


