import React from "react";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Cards = ({item}) => {
    const {id, name, price, image, hoverpicture, button } = item;

    return(
        <div class="pro">
            <img src={image}/>
            <img class="hoverpicture" src={hoverpicture} />
            <div class="description">
                <h5>{name}</h5>
                <div class="star">
                    <FaHeart />
                    <FaHeart />
                    <FaHeart />
                    <FaHeart />
                    <FaHeart />
                </div>
                <h4>{price}</h4>
                <button><NavLink to={button}>Add to cart</NavLink></button>
            </div>
        </div>
    );
}
export default Cards;