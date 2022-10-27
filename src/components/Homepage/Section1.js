import React from "react";
import "../../styles/HomePage/section1.scss"
import Picture from "../../images/20220401_NEWLipLabServices_promobanner_Desktop.jpg";
import { NavLink } from "react-router-dom";

const Section1 = () => {
    return (
        <div id="section1homepage">
            <div class="col">
                <h2>Have you met our color experts yet?</h2>
                <h3>Book a custom lipstick-making experience</h3>
                <button><NavLink to ="/boutique">Book an Appointment</NavLink></button>
            </div>
            <div class="image-box">
                <img src={Picture} />
            </div>
        </div>
    )
}
export default Section1;