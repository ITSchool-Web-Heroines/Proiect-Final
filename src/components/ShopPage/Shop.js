import React from "react";
import "../../styles/ShopPage/shop.scss";
import beetroot from "../../images/lipstick/beetroot.png";
import beetrootlips from "../../images/lipstick/beetrootlips.jpg"
import cayenne from "../../images/lipstick/cayenne.png";
import cayennelips from "../../images/lipstick/cayennelips.jpg"
import chai from "../../images/lipstick/chai.png";
import chailips from "../../images/lipstick/chailips.jpg"
import expressobrava from "../../images/lipstick/expressobrava.png";
import expressobravalips from "../../images/lipstick/expressobravalips.jpg"
import extrasugarbuns from "../../images/lipstick/extrasugarbuns.png";
import extrasugarbunslips from "../../images/lipstick/extrasugarbunslips.jpg"
import fig from "../../images/lipstick/fig.png";
import figlips from "../../images/lipstick/figlips.jpg"
import gingermalt from "../../images/lipstick/gingermalt.png";
import gingermaltlips from "../../images/lipstick/gingermaltlips.jpg"
import harissa from "../../images/lipstick/harissa.png";
import harissalips from "../../images/lipstick/harissalips.jpg"
import hottomato from "../../images/lipstick/hottomato.png"
import hottomatolips from "../../images/lipstick/hottomatolips.jpg"
import juniper from "../../images/lipstick/juniper.png"
import juniperlips from "../../images/lipstick/juniperlips.jpg"
import maple from "../../images/lipstick/maple.png"
import maplelips from "../../images/lipstick/maplelips.jpg"
import mulberry from "../../images/lipstick/mulberry.png"
import mulberrylips from "../../images/lipstick/mulberrylips.jpg"
import pluot from "../../images/lipstick/pluot.png"
import ploutlips from "../../images/lipstick/ploutlips.jpg"
import pomelo from "../../images/lipstick/pomelo.png"
import pomelolips from "../../images/lipstick/pomelolips.jpg"
import praline from "../../images/lipstick/praline.png"
import pralinelips from "../../images/lipstick/pralinelips.jpg"
import radicchio from "../../images/lipstick/radicchio.png"
import radicchiolips from "../../images/lipstick/radicchiolips.jpg"
import sesame from "../../images/lipstick/sesame.png"
import sesamelips from "../../images/lipstick/sesamelips.jpg"
import sugarbuns from "../../images/lipstick/sugarbuns.png"
import sugarbunslips from "../../images/lipstick/sugarbunslips.jpg"
import tamarind from "../../images/lipstick/tamarind.png"
import tamarindlips from "../../images/lipstick/tamarindlips.jpg"
import tannin from "../../images/lipstick/tannin.png"
import tanninlips from "../../images/lipstick/tanninlips.jpg"
import apero from "../../images/lipstick/apero.png"
import aperolips from "../../images/lipstick/aperolips.png"

import agave from "../../images/lipliner/agave.png"
import agave2 from "../../images/lipliner/agave2.jpg"
import acaismith from "../../images/lipliner/acaismith.png"
import acaismithlips from "../../images/lipliner/acaismith lips.jpg"
import brandy from "../../images/lipliner/brandy.png"
import brandylips from "../../images/lipliner/brandy lips.jpg"
import cava from "../../images/lipliner/cava.png"
import cavalips from "../../images/lipliner/cava lips.jpg"
import cognac from "../../images/lipliner/cognac.png"
import cognaclips from "../../images/lipliner/cognac lips.jpg"
import damson from "../../images/lipliner/damson.png"
import damsonlips from "../../images/lipliner/damson lips.jpg"
import hardcider from "../../images/lipliner/hardcider.png"
import hardciderlips from "../../images/lipliner/hardcider lips.jpg"
import honeycrisp from "../../images/lipliner/honeycrisp.png"
import honeycrisplips from "../../images/lipliner/honeycrisp lips.jpg"
import nonino from "../../images/lipliner/nonino.png"
import noninolips from "../../images/lipliner/nonino lips.jpg"
import pastille from "../../images/lipliner/pastille.png"
import pastillelips from "../../images/lipliner/pastille lips.jpg"
import pavlova from "../../images/lipliner/pavlova.png"
import pavlovalips from "../../images/lipliner/pavlova lips.jpg"
import redvelvet from "../../images/lipliner/red velvet.png"
import redvelvetlips from "../../images/lipliner/red velvet lips.jpg"
import scarlet from "../../images/lipliner/scarlet.png"
import scarletlips from "../../images/lipliner/scarlet lips.jpg"
import stinger from "../../images/lipliner/stinger.png"
import stingerlips from "../../images/lipliner/stinger lips.jpg"
import sugarcane from "../../images/lipliner/sugarcane.png"
import sugarcanelips from "../../images/lipliner/sugarcane lips.jpg"
import tatin from "../../images/lipliner/tatin.png"
import tatinlips from "../../images/lipliner/tatin lips.jpg"

import {FaHeart} from "react-icons/fa"
import list from "./Data";
import Cards from "./Cards";


const Shop = () => {

    return (
       <div id="shop">
        <h2 class="title">Our beloved standard lippie goodies</h2>
        <div class="pro-container">
                {
                    list.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))
                };
            {/*<div class="pro" id="beetroot">
                <img src={beetroot}/>
                    <img class="hoverpicture " src={beetrootlips}/>
                <div class="description">
                    <h5>Beetroot</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                    <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={cayenne}/>
                <img class="hoverpicture " src={cayennelips}/>
                <div class="description">
                    <h5>Cayenne</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={chai}/>
                <img class="hoverpicture " src={chailips}/>
                <div class="description">
                    <h5>Chai</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={expressobrava}/>
                <img class="hoverpicture " src={expressobravalips}/>
                <div class="description">
                    <h5>Expresso Brava</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={extrasugarbuns}/>
                <img class="hoverpicture " src={extrasugarbunslips}/>
                <div class="description">
                    <h5>Extra Sugarbuns</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={fig}/>
                <img class="hoverpicture " src={figlips}/>
                <div class="description">
                    <h5>Fig</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={gingermalt}/>
                <img class="hoverpicture " src={gingermaltlips}/>
                <div class="description">
                    <h5>Gingermalt</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={harissa}/>
                <img class="hoverpicture " src={harissalips}/>
                <div class="description">
                    <h5>Harissa</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={hottomato}/>
                <img class="hoverpicture " src={hottomatolips}/>
                <div class="description">
                    <h5>Hot Tomato</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={juniper}/>
                <img class="hoverpicture " src={juniperlips}/>
                <div class="description">
                    <h5>Juniper</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={maple}/>
                <img class="hoverpicture " src={maplelips}/>
                <div class="description">
                    <h5>Maple</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={mulberry}/>
                <img class="hoverpicture " src={mulberrylips}/>
                <div class="description">
                    <h5>Mulberry</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={pluot}/>
                <img class="hoverpicture " src={ploutlips}/>
                <div class="description">
                    <h5>Pluot</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={pomelo}/>
                <img class="hoverpicture " src={pomelolips}/>
                <div class="description">
                    <h5>Pomelo</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={praline}/>
                <img class="hoverpicture " src={pralinelips}/>
                <div class="description">
                    <h5>Praline</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={sesame}/>
                <img class="hoverpicture " src={sesamelips}/>
                <div class="description">
                    <h5>Sesame</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={sugarbuns}/>
                <img class="hoverpicture " src={sugarbunslips}/>
                <div class="description">
                    <h5>Sugarbuns</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={tamarind}/>
                <img class="hoverpicture " src={tamarindlips}/>
                <div class="description">
                    <h5>Tamarind</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={tannin}/>
                <img class="hoverpicture " src={tanninlips}/>
                <div class="description">
                    <h5>Tannin</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={apero}/>
                <img class="hoverpicture " src={aperolips}/>
                <div class="description">
                    <h5>Apero</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../lipstick.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={agave}/>
                <img class="hoverpicture " src={agave2}/>
                <div class="description">
                        <h5>Agave+ Lip Therapy</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$30</h4>
                        <button><a href="../Agavecream.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={acaismith}/>
                <img class="hoverpicture " src={acaismithlips}/>
                <div class="description">
                    <h5>Acaismith</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={brandy}/>
                <img class="hoverpicture " src={brandylips}/>
                <div class="description">
                    <h5>Brandy</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={cava}/>
                <img class="hoverpicture " src={cavalips}/>
                <div class="description">
                    <h5>Cava</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={cognac}/>
                <img class="hoverpicture " src={cognaclips}/>
                <div class="description">
                    <h5>Cognac</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={damson}/>
                <img class="hoverpicture " src={damsonlips}/>
                <div class="description">
                    <h5>Damson</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={hardcider}/>
                <img class="hoverpicture " src={hardciderlips}/>
                <div class="description">
                    <h5>Hard Cider</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={honeycrisp}/>
                <img class="hoverpicture " src={honeycrisplips}/>
                <div class="description">
                    <h5>Honeycrisp</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={nonino}/>
                <img class="hoverpicture " src={noninolips}/>
                <div class="description">
                    <h5>Nonino</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={pastille}/>
                <img class="hoverpicture " src={pastillelips}/>
                <div class="description">
                    <h5>Pastille</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={pavlova}/>
                <img class="hoverpicture " src={pavlovalips}/>
                <div class="description">
                    <h5>Pavlova</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={redvelvet}/>
                <img class="hoverpicture " src={redvelvetlips}/>
                <div class="description">
                    <h5>Red Velvet</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={scarlet}/>
                <img class="hoverpicture " src={scarletlips}/>
                <div class="description">
                    <h5>Scarlet</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={stinger}/>
                <img class="hoverpicture " src={stingerlips}/>
                <div class="description">
                    <h5>Stinger</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={sugarcane}/>
                <img class="hoverpicture " src={sugarcanelips}/>
                <div class="description">
                    <h5>Sugarcane</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
            </div>
            <div class="pro">
                <img src={tatin}/>
                <img class="hoverpicture " src={tatinlips}/>
                <div class="description">
                    <h5>Tatin</h5>
                    <div class="star">
                            <FaHeart/>
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                            <FaHeart />
                    </div>
                    <h4>$20</h4>
                        <button><a href="../Lipliner.html">Add to cart</a></button> 
                </div>
    </div>*/}
        </div>
       </div>
    )
}
export default Shop;