import React from "react";
import "../../styles/StoryPage/section2.scss";
import Picture from "../../images/collection-of-various-smears-lipstick-on-white-background_38364-13.png"


const Section2 = () => {
    return (
        <div id="section2">
            <div class="col">
                <h2>Our story began...</h2>
                <p>Back in 2015 when our founder was studying Business at the university and had to prepare a business plan for a fictional business, but in reality it wasn't just a fictional business plan, it was a dream to be pursued. So what started as an university project finally came to life in 2021 when we first open our boutique store in the Old Town of Bucharest.</p>
                <p>Our mission is to make women of all ages feel empowered to overcome whatever challenge they might face and also achieve all their dreams and we are doing that by enabling women to have an experience made just for them upon which they will create their own lipstick that would be there with them when they conquer the world.</p>
                <p>When they come into our store women can choose their own shade, the finish, the scent s well as the packaging of the lipstick, this meaning that they will get a product as unique as them.</p>
                <p>Also, what sets our company apart from the other is that even though we are a small company we are keen on corporate social responsibility and also the fact that 95% of our products are made of natural ingredients.</p>
            </div>
            <div class="col">
                <img src={Picture} />
            </div>
        </div>

    )
}
export default Section2;