import React, { useState } from "react";
import "../../styles/ProductDetails/giftcards.scss"
import Card1 from "../../images/1uGgcA0IlHFhmula4jQT4Ir3P1qgcLuz.png";
import Card2 from "../../images/wFSwiRa9AU0N8iENTP9z2Ogc4i0FAiHq.png";
import Card3 from "../../images/MvDXdQ6dSgwzXKpwDeW8zNZILSL5AsCz.png";
import Card4 from "../../images/Ogh1y4fHVZDbaaQOfFKz0KVoMwED1QZo.png"

const GiftCards = () => {
    const [design, setDesign]=useState("card1");
    return (
        <div id="giftcards">
            <h2 class="title">Give a piece of happiness to a special person...</h2>
            <article id="card1" className={design == "card1" && "active"}>
                <div class="single-pro-image">
                    <img src={Card3} id="MainImg" width="100%" />
                </div>
                <div class="single-pro-details">
                    <form class="form">
                        <div class="col">
                        <input type="text" placeholder="Your Name*"/>
                        <input type="email" placeholder="Your Email*"/>
                        </div>
                        <div class="col">
                        <input type="text" placeholder="Recipient's Name*" />
                        <input type="email" placeholder="Recipient's Email*" />
                        </div>
                        <label>Gift Amount*</label>
                        <select>
                            <option>$30</option>
                            <option>$60</option>
                            <option>$90</option>
                            <option>$120</option>
                        </select>
                        <br />
                        <label>Choose your design*</label>
                        <div class="design-group">
                            <img src={Card1} className={design == "card2" && "active"} onClick={() => setDesign("card2")} />
                            <img src={Card2} className={design == "card3" && "active"} onClick={() => setDesign("card3")} />
                            <img src={Card3} className={design == "card1" && "active"} onClick={() => setDesign("card1")} />
                            <img src={Card4} className={design == "card4" && "active"} onClick={() => setDesign("card4")} />
                        </div>
                        <br />
                        <label>Gift Message (optional)</label>
                            <textarea rows="4"></textarea>
                        
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="1" />
                            <button type="submit">Add to Cart</button>
                        </div>
                    </form>
                </div>
            </article>
            <article id="card2" className={design == "card2" && "active"}>
                <div class="single-pro-image">
                    <img src={Card1} id="MainImg" width="100%" />
                </div>
                <div class="single-pro-details">
                    <form class="form">
                        <div class="col">
                            <input type="text" placeholder="Your Name*" />
                            <input type="email" placeholder="Your Email*" />
                        </div>
                        <div class="col">
                            <input type="text" placeholder="Recipient's Name*" />
                            <input type="email" placeholder="Recipient's Email*" />
                        </div>
                        <label>Gift Amount*</label>
                        <select>
                            <option>$30</option>
                            <option>$60</option>
                            <option>$90</option>
                            <option>$120</option>
                        </select>
                        <br />
                        <label>Choose your design*</label>
                        <div class="design-group">
                            <img src={Card1} className={design == "card2" && "active"} onClick={() => setDesign("card2")} />
                            <img src={Card2} className={design == "card3" && "active"} onClick={() => setDesign("card3")} />
                            <img src={Card3} className={design == "card1" && "active"} onClick={() => setDesign("card1")} />
                            <img src={Card4} className={design == "card4" && "active"} onClick={() => setDesign("card4")} />
                        </div>
                        <br />
                        <label>Gift Message (optional)</label>
                        <textarea rows="4"></textarea>

                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="1" />
                            <button type="submit">Add to Cart</button>
                        </div>
                    </form>
                </div>
            </article>
            <article id="card3" className={design == "card3" && "active"}>
                <div class="single-pro-image">
                    <img src={Card2} id="MainImg" width="100%" />
                </div>
                <div class="single-pro-details">
                    <form class="form">
                        <div class="col">
                            <input type="text" placeholder="Your Name*" />
                            <input type="email" placeholder="Your Email*" />
                        </div>
                        <div class="col">
                            <input type="text" placeholder="Recipient's Name*" />
                            <input type="email" placeholder="Recipient's Email*" />
                        </div>
                        <label>Gift Amount*</label>
                        <select>
                            <option>$30</option>
                            <option>$60</option>
                            <option>$90</option>
                            <option>$120</option>
                        </select>
                        <br />
                        <label>Choose your design*</label>
                        <div class="design-group">
                            <img src={Card1} className={design == "card2" && "active"} onClick={() => setDesign("card2")} />
                            <img src={Card2} className={design == "card3" && "active"} onClick={() => setDesign("card3")} />
                            <img src={Card3} className={design == "card1" && "active"} onClick={() => setDesign("card1")} />
                            <img src={Card4} className={design == "card4" && "active"} onClick={() => setDesign("card4")} />
                        </div>
                        <br />
                        <label>Gift Message (optional)</label>
                        <textarea rows="4"></textarea>

                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="1" />
                            <button type="submit">Add to Cart</button>
                        </div>
                    </form>
                </div>
            </article>
            <article id="card4" className={design == "card4" && "active"}>
                <div class="single-pro-image">
                    <img src={Card4} id="MainImg" width="100%" />
                </div>
                <div class="single-pro-details">
                    <form class="form">
                        <div class="col">
                            <input type="text" placeholder="Your Name*" />
                            <input type="email" placeholder="Your Email*" />
                        </div>
                        <div class="col">
                            <input type="text" placeholder="Recipient's Name*" />
                            <input type="email" placeholder="Recipient's Email*" />
                        </div>
                        <label>Gift Amount*</label>
                        <select>
                            <option>$30</option>
                            <option>$60</option>
                            <option>$90</option>
                            <option>$120</option>
                        </select>
                        <br />
                        <label>Choose your design*</label>
                        <div class="design-group">
                            <img src={Card1} className={design == "card2" && "active"} onClick={() => setDesign("card2")} />
                            <img src={Card2} className={design == "card3" && "active"} onClick={() => setDesign("card3")} />
                            <img src={Card3} className={design == "card1" && "active"} onClick={() => setDesign("card1")} />
                            <img src={Card4} className={design == "card4" && "active"} onClick={() => setDesign("card4")} />
                        </div>
                        <br />
                        <label>Gift Message (optional)</label>
                        <textarea rows="4"></textarea>

                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="1" />
                            <button type="submit">Add to Cart</button>
                        </div>
                    </form>
                </div>
            </article>
        </div>

    )
}
export default GiftCards;