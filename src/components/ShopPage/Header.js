import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/ShopPage/header.scss"

const Header = () => {
    return (
        <div id="header">
            <h2>Make your move.</h2>
            <h2>Pick your shade.</h2>
            <button><NavLink to="/lipstick">Shop Lipstick</NavLink></button>
        </div>
    )
}
export default Header;