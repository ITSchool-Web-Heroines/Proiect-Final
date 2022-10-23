import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/HomePage/section5.scss"

const Section5 = () => {
    return (
        <div id="section5home">
            <div class="row">
                <div class="col">
                    <div class="c1">
                        <button><NavLink to="/lipliner">Lipliners</NavLink></button>
                    </div>
                </div>
                <div class="col">
                    <div class="c2">
                        <button><NavLink to="/giftcards">Gift Cards</NavLink></button>
                    </div>
                </div>
                <div class="col">
                    <div class="c3">
                        <button><NavLink to="/lipstick">Lipsticks</NavLink></button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Section5;