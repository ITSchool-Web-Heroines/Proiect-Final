import React from "react";
import "../../styles/HomePage/section1.scss"
import Picture from "../../images/20220401_NEWLipLabServices_promobanner_Desktop.jpg"

const Section1 = () => {
    return (
        <div id="section1">
            <div class="col">
                <h2>Have you met our color experts yet?</h2>
                <h3>Book a custom lipstick-making experience</h3>
                <button>Book an Appointment</button>
            </div>
            <img src={Picture} />
        </div>


    )
}
export default Section1;