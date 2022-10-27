import React from "react";
import "../../styles/BoutiquePage/section3.scss"
import Picture from "../../images/2021_LipLap_Hp_GiftCard_heroimage_desktop (1).png"
import Picture2 from "../../images/6.png"
import { NavLink } from "react-router-dom";

const Section3 = () => {
    return (
        <div id="section3boutique">
            <div class="col1">
                <img src={Picture} />
            </div>
            <div class="col2">
                <img src={Picture2} />
                <button><NavLink to="/giftcards">Buy Now</NavLink></button>
            </div>
        </div>
    )
}
export default Section3;