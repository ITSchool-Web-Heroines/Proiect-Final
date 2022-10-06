import React from "react";
import "../../styles/CSRPage/section2.scss"
import Picture from "../../images/SUPERFOOD_MODULE_720X518_SMEARS.jpg"
import Picture2 from "../../images/SUPERFOOD_MODULE_720X518_INGREDIENTS.jpg"
import Picture3 from "../../images/SUPERFOOD_MODULE_720X518_BEAUTY.jpg"

const Section2 = () => {
    return (
        <div id="section2">
            <div class="col">
            <img class="picture1" src={Picture} />
            <div class="text1">
            <h2 class="title1">Supercharged Performance</h2>
            <p class="p1">Vivid color. Instant impact. Sensorial textures. Wear that won’t let up. We never stop innovating to
                create clean beauty
                that holds up to the demands of whatever your day throws at you.</p>
            </div>
            </div>
            <div class="col">
            <img class="picture2" src={Picture2} />
            <div class="text2">
            <h2 class="title2">Powered by Foods</h2>
            <p class="p2">Pure. Efficacious. Superfoods for your skin. We think of them as nature’s overachievers—ingredients that
                are rich in the
                stuff your skin craves—antioxidants, vitamins, minerals, fatty acids, and more.</p>
            </div>
            </div>
            <div class="col">
            <img class="picture3" src={Picture3} />
            <div class="text3">
            <h2 class="title3">Made for super you</h2>
            <p class="p3">Speed. Ease. Looking good while getting things done. We’re all about making a statement—with our makeup,
                voice and
                style—and want you to feel confident in your skin.</p>
            </div>
            </div>
        </div>
        

    )
}
export default Section2;
