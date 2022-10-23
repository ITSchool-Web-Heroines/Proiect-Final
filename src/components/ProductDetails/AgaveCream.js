import React from "react";
import "../../styles/ProductDetails/agavecream.scss";
import agave from "../../images/lipliner/agave.png"
import agave2 from "../../images/lipliner/agave2.jpg"
import agave3 from "../../images/lipliner/agave3.jpg"

const AgaveCream = () => {
    return (
        <div id="agavecream">
            <div class="shopdetails">
                <div class="single-pro-image" id="beetroot">
                    <img src={agave} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={agave2} class="small-img" />
                        <img src={agave} class="small-img" />
                        <img src={agave3} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipcare/Standard Lipcare</h6>
                    <h4>Agave Lip Therapy</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A deeply hydrating overnight lip mask made with pomegranate extract and superfood oils in a game-changing balm-to-oil formula for more nourished and supple lips. Fill weight: 0.5 oz </p>
                    <div class="form">
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AgaveCream;