import React from "react";
import "../styles/cart.scss"
import { FaTimes } from "react-icons/fa"
import Header from "../images/20211104-lip-lab-currently-cravings-launch-slider-desktop.png"
import Beetroot from "../images/lipstick/beetroot.png"
import Praline from "../images/lipstick/praline.png"
import HotTomato from "../images/lipstick/hottomato.png"

const Cart = () => {
    return (
        <div id="cart">
            <img src={Header}/>
            <section id="shoppingcart" class="section-p1">
                <br />
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><FaTimes/><a href="#"></a></td>
                            <td><img src={Beetroot}/></td>
                            <td>Beetroot #1D1C</td>
                            <td>$30</td>
                            <td><input type="number" min="1" max="5" value="1"></input></td>
                            <td>$30</td>
                        </tr>
                        <tr>
                            <td><FaTimes /><a href="#"></a></td>
                            <td><img src={Praline} /></td>
                            <td>Praline #5D3C</td>
                            <td>$30</td>
                            <td><input type="number" min="1" max="5" value="1"></input></td>
                            <td>$60</td>
                        </tr>
                        <tr>
                            <td><FaTimes /><a href="#"></a></td>
                            <td><img src={HotTomato} /></td>
                            <td>Hot Tomato #2D7C</td>
                            <td>$30</td>
                            <td><input type="number" min="1" max="5" value="1"></input></td>
                            <td>$120</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <br />
            <section id="cart-add" class="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter your coupon"></input>
                        <button class="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$120</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$120</strong></td>
                        </tr>
                    </table>
                    <button class="normal">Proceed to checkout</button>

                </div>

            </section>
        </div>
    )
}
export default Cart;