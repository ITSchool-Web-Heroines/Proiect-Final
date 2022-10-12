import React from "react";
import "../../styles/HomePage/section2.scss"
import beetroot from "../../images/lipstick/beetroot.png"
import beetrootlips from "../../images/lipstick/beetrootlips.jpg"
import pastille from "../../images/lipliner/pastille.png"
import pastillelips from "../../images/lipliner/pastille lips.jpg"
import agave from "../../images/lipliner/agave.png"
import agave2 from "../../images/lipliner/agave2.jpg"
import { FaHeart } from "react-icons/fa";

const Section2 = () => {
    return (
        <div id="section2">
            <div class="row">
                <div class="col">
                    <h2> Fresh</h2>
                    <h2>Clean</h2>
                    <h2>Bold</h2>
                    <h2>Lippie Products</h2>
                </div>
                <div class="col">
                    <div class="pro" id="beetroot">
                        <img src={beetroot} />
                        <img class="hoverpicture " src={beetrootlips} />
                        <div class="description">
                            <h5>Beetroot</h5>
                            <div class="star">
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                            </div>
                            <h4>$30</h4>
                            <button><a href="lipstick.html">View more</a></button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="pro" id="pastille">
                        <img src={pastille} />
                        <img class="hoverpicture " src={pastillelips} />
                        <div class="description">
                            <h5>Pastille</h5>
                            <div class="star">
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                            </div>
                            <h4>$20</h4>
                            <button><a href="lipliner.html">View more</a></button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="pro" id="agave">
                        <img src={agave} />
                        <img class="hoverpicture " src={agave2} />
                        <div class="description">
                            <h5>Agave Cream Lip Therapy</h5>
                            <div class="star">
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                                <FaHeart />
                            </div>
                            <h4>$30</h4>
                            <button><a href="agavecream.html">View more</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section2;