import React from "react";
import "../../styles/HomePage/section4.scss";
import Picture from "../../images/BITE_HompageAssetRefresh_Clean_CircleModule_CleanPromise.png"
import Picture2 from "../../images/BITE_HompageAssetRefresh_Clean_CircleModule_Supercharged.png"
import Picture3 from "../../images/BITE_HompageAssetRefresh_Clean_CircleModule_Superfood.png"
import Picture4 from "../../images/BITE_HompageAssetRefresh_Clean_CircleModule_Vegan.png"
import Icon from "../../images/BITE_HompageAssetRefresh_Clean_CircleModule_Icon_CleanPromise.png"
import Icon2 from "../../images/BITE_HompageAssetRefresh_Clean_CircleModule_Icon_Supercharged.png"
import Icon3 from "../../images/BITE_HompageAssetRefresh_Clean_CircleModule_Icon_Superfood.png"
import Icon4 from "../../images/BITE_HompageAssetRefresh_Clean_CircleModule_Icon_Vegan.png"
import { NavLink } from "react-router-dom";
const Section4 = () => {
    return (
        <div id="section4home">
            <h2>Clean Beauty That Performs</h2>
            <div class="row">
                <div class="col">
                    <img src={Picture} />
                    <img class="iconhome" src={Icon} />
                    <h3>Our clean promise</h3>
                    <p>We say “yes, please” to powerful, effective and clean ingredients and “no thank you” to yuck-worthy additives</p>
                </div>
                <div class="col">
                    <img src={Picture2} />
                    <img class="iconhome" src={Icon2} />
                    <h3>Supercharged performance</h3>
                    <p>Vivid color. Instant impact. Sensorial textures. Wear that won’t let up.</p>
                </div>
                <div class="col">
                    <img src={Picture3} />
                    <img class="iconhome" src={Icon3} />
                    <h3>Powered by superfoods</h3>
                    <p>Pure. Efficacious. Superfoods for your skin. We think of them as nature’s overachievers</p>
                </div>
                <div class="col">
                    <img src={Picture4} />
                    <img class="iconhome" src={Icon4} />
                    <h3>Vegan & Cruelty free</h3>
                    <p>We never, ever test on animals. Period. And, we never use animal-derived ingredients</p>
                </div>
            </div>
            <button><NavLink to ="/csr#section1csr">Learn more</NavLink></button>
        </div>

    )
}
export default Section4;