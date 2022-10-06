import React from "react";
import "../../styles/BoutiquePage/section1.scss"
import Picture from "../../images/4.png"
import Picture2 from "../../images/5.png"
import Picture3 from "../../images/6.png"

const Section1 = () => {
    return (
        <div id="section1">
            <div class="col1">
                <img src={Picture} />
            </div>
            <div class="col2">
                <img src={Picture2} />
                <p>Do you love lipstick?<br />Are you creative and great with people?</p>
                <br />
                <p>We're looking for new team members</p>
            </div>
            <div class="col3">
                <img src={Picture3} />
                <p>Apply to be part of the Lippie Factory Team</p>
                <br />
                <button>Apply Now</button>
            </div>
        </div>
    )
}
export default Section1;