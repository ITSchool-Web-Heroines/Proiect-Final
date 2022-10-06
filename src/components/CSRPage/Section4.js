import React from "react";
import "../../styles/CSRPage/section4.scss"
import Picture from "../../images/550x395_LipStain.jpg"
import Picture2 from "../../images/610x551_PrimerSmear.jpg"

const Section4 = () => {
    return (
        <div id="section4">
            <h2>We're all about transparency</h2>
            <p class="info">We give it to you straight—what we formulate with, what we formulate without, how we test our products—because we
                believe you deserve to know what you’re getting</p>
            <br />
            <br />
            <br />
            <br />
            <img class="image1" src={Picture} />
            <h3 class="t1">Adouring Fragrances</h3>
            <p class="info1">We use both naturally derived scents and less than 1% of synthetic fragrance. We consider it indulging responsibly</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img class="image2" src={Picture2} />
            <h3 class="t2">Cruelty Free</h3>
            <p class="info2">We won’t release just any formula: Licensed toxicologists review all of our ingredients and final products for safety,
                allergens and efficacy without the use of animal testing because we are promoting a cruelty free based business, loving
                and caring for the animals</p>

            <br />
            <br />
            <br />
            <br />
            <h4>Award Winning Clean Beauty</h4>
            <p class="fans">These must-haves are loved by beauty editors and BITE fans alike</p>
        </div>

    )
}
export default Section4;