import React from "react";
import "../../styles/ProductDetails/section3.scss"
import Picture1 from "../../images/BB20031_cocoa.png"
import Picture2 from "../../images/BB20031_tapioca.png"
import Picture3 from "../../images/BB20031_hydrating.png"
import Picture4 from "../../images/BB20031_20.png"

const Section3 = () => {
    return (
        <div id="section3">
            <h2>Clean Beauty That Performs</h2>
            <div class="row">
                <div class="col">
                    <img src={Picture1} />
                    <h3>Our clean promise</h3>
                    <p>We say “yes, please” to powerful, effective and clean ingredients and “no thank you” to yuck-worthy additives</p>
                </div>
                <div class="col">
                    <img src={Picture2} />
                    <h3>Supercharged performance</h3>
                    <p>Vivid color. Instant impact. Sensorial textures. Wear that won’t let up.</p>
                </div>
                <div class="col">
                    <img src={Picture3} />
                    <h3>Powered by superfoods</h3>
                    <p>Pure. Efficacious. Superfoods for your skin. We think of them as nature’s overachievers</p>
                </div>
                <div class="col">
                    <img src={Picture4} />
                    <h3>Vegan & Cruelty free</h3>
                    <p>We never, ever test on animals. Period. And, we never use animal-derived ingredients</p>
                </div>
            </div>
        </div>

    )
}
export default Section3;