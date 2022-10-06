import React from "react";
import "../../styles/HomePage/section3.scss"
import Picture from "../../images/PrivateParties.jpg"
import Picture2 from "../../images/WHAT_YOU_GET_MOBILE_ATTENDESS.jpg"

const Section3 = () => {
    return (
        <div id="section3">
            <div class="col">
                <h2>Do you want to host an unforgettable party?</h2>
                <h3>Birthday bash? Bachelorette party? Corporate team-building event?<br />We're ready to help you celebrate any and every
                    occasion.<br />Big or small, day or night, we'll make it memorable.</h3>
                <button>Book a party</button>
            </div>
            <img src={Picture} />
            <img src={Picture2} />
        </div>

    )
}
export default Section3;