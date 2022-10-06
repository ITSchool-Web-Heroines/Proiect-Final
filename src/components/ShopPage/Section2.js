import React from "react";
import awardpicture from "../../images/bite-byrdie-eco-award-2020.png"
import picture from "../../images/AwardWinner-Background-Desktop.jpg"
import "../../styles/ShopPage/section2.scss"

const Section2 = () => {
    return (
        <div id="section2">
            <img src={awardpicture}/>
            <div class="award">
               <h3>Best Lipstick</h3>
               <h4>-Byrdie Eco Awards 2020</h4>
            </div>
        </div>
    )
}
export default Section2;