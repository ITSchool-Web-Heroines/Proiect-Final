import React, { useState } from "react";
import "../../styles/ProductDetails/lipliner.scss";
import acaismith from "../../images/lipliner/acaismith.png"
import acaismithlips from "../../images/lipliner/acaismith lips.jpg"
import acaismithicon from "../../images/lipliner/acaismith icon.png"
import brandy from "../../images/lipliner/brandy.png"
import brandylips from "../../images/lipliner/brandy lips.jpg"
import brandyicon from "../../images/lipliner/brandy icon.png"
import cava from "../../images/lipliner/cava.png"
import cavalips from "../../images/lipliner/cava lips.jpg"
import cavaicon from "../../images/lipliner/cava icon.png"
import cognac from "../../images/lipliner/cognac.png"
import cognaclips from "../../images/lipliner/cognac lips.jpg"
import cognacicon from "../../images/lipliner/cognac icon.png"
import damson from "../../images/lipliner/damson.png"
import damsonlips from "../../images/lipliner/damson lips.jpg"
import damsonicon from "../../images/lipliner/damson icon.png"
import hardcider from "../../images/lipliner/hardcider.png"
import hardciderlips from "../../images/lipliner/hardcider lips.jpg"
import hardcidericon from "../../images/lipliner/hardcider icon.png"
import honeycrisp from "../../images/lipliner/honeycrisp.png"
import honeycrisplips from "../../images/lipliner/honeycrisp lips.jpg"
import honeycrispicon from "../../images/lipliner/honeycrisp icon.png"
import nonino from "../../images/lipliner/nonino.png"
import noninolips from "../../images/lipliner/nonino lips.jpg"
import noninoicon from "../../images/lipliner/nonino icon.png"
import pastille from "../../images/lipliner/pastille.png"
import pastillelips from "../../images/lipliner/pastille lips.jpg"
import pastilleicon from "../../images/lipliner/pastille icon.png"
import pavlova from "../../images/lipliner/pavlova.png"
import pavlovalips from "../../images/lipliner/pavlova lips.jpg"
import pavlovaicon from "../../images/lipliner/pavlova icon.png"
import redvelvet from "../../images/lipliner/red velvet.png"
import redvelvetlips from "../../images/lipliner/red velvet lips.jpg"
import redvelveticon from "../../images/lipliner/red velvet icon.png"
import scarlet from "../../images/lipliner/Scarlet.png"
import scarletlips from "../../images/lipliner/scarlet lips.jpg"
import scarleticon from "../../images/lipliner/scarlet icon.png"
import stinger from "../../images/lipliner/stinger.png"
import stingerlips from "../../images/lipliner/stinger lips.jpg"
import stingericon from "../../images/lipliner/stinger icon.png"
import sugarcane from "../../images/lipliner/sugarcane.png"
import sugarcanelips from "../../images/lipliner/sugarcane lips.jpg"
import sugarcaneicon from "../../images/lipliner/sugarcane icon.png"
import tatin from "../../images/lipliner/tatin.png"
import tatinlips from "../../images/lipliner/tatin lips.jpg"
import tatinicon from "../../images/lipliner/tatin icon.png"

const Lipliner = () => {
    const [shade, setShade] = useState("acaismith");

    return (
        <div id="lipliner">
            <article id="acaismith" className={shade == "acaismith" && "active"}>
                <div class="single-pro-image" >
                    <img src={acaismith} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={acaismith} class="small-img" />
                        <img src={acaismithlips} class="small-img" />
                        <img src={acaismithicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Acaismith</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="brandy" className={shade == "brandy" && "active"}>
                <div class="single-pro-image" >
                    <img src={brandy} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={brandy} class="small-img" />
                        <img src={brandylips} class="small-img" />
                        <img src={brandyicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Brandy</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="cava" className={shade == "cava" && "active"}>
                <div class="single-pro-image" >
                    <img src={cava} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={cava} class="small-img" />
                        <img src={cavalips} class="small-img" />
                        <img src={cavaicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Cava</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="cognac" className={shade == "cognac" && "active"}>
                <div class="single-pro-image" >
                    <img src={cognac} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={cognac} class="small-img" />
                        <img src={cognaclips} class="small-img" />
                        <img src={cognacicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Cognac</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="damson" className={shade == "damson" && "active"}>
                <div class="single-pro-image" >
                    <img src={damson} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={damson} class="small-img" />
                        <img src={damsonlips} class="small-img" />
                        <img src={damsonicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Damson</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="hardcider" className={shade == "hardcider" && "active"}>
                <div class="single-pro-image" >
                    <img src={hardcider} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={hardcider} class="small-img" />
                        <img src={hardciderlips} class="small-img" />
                        <img src={hardcidericon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Hard Cider</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="honeycrisp" className={shade == "honeycrisp" && "active"}>
                <div class="single-pro-image" >
                    <img src={honeycrisp} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={honeycrisp} class="small-img" />
                        <img src={honeycrisplips} class="small-img" />
                        <img src={honeycrispicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Honeycrisp</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="nonino" className={shade == "nonino" && "active"}>
                <div class="single-pro-image" >
                    <img src={nonino} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={nonino} class="small-img" />
                        <img src={noninolips} class="small-img" />
                        <img src={noninoicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Nonino</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="pastille" className={shade == "pastille" && "active"}>
                <div class="single-pro-image" >
                    <img src={pastille} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={pastille} class="small-img" />
                        <img src={pastillelips} class="small-img" />
                        <img src={pastilleicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Pastille</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="pavlova" className={shade == "pavlova" && "active"}>
                <div class="single-pro-image" >
                    <img src={pavlova} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={pavlova} class="small-img" />
                        <img src={pavlovalips} class="small-img" />
                        <img src={pavlovaicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Pavlova</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="redvelvet" className={shade == "redvelvet" && "active"}>
                <div class="single-pro-image" >
                    <img src={redvelvet} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={redvelvet} class="small-img" />
                        <img src={redvelvetlips} class="small-img" />
                        <img src={redvelveticon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Red Velvet</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="scarlet" className={shade == "scarlet" && "active"}>
                <div class="single-pro-image" >
                    <img src={scarlet} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={scarlet} class="small-img" />
                        <img src={scarletlips} class="small-img" />
                        <img src={scarleticon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Scarlet</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="stinger" className={shade == "stinger" && "active"}>
                <div class="single-pro-image" >
                    <img src={stinger} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={stinger} class="small-img" />
                        <img src={stingerlips} class="small-img" />
                        <img src={stingericon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Stinger</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="sugarcane" className={shade == "sugarcane" && "active"}>
                <div class="single-pro-image" >
                    <img src={sugarcane} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={sugarcane} class="small-img" />
                        <img src={sugarcanelips} class="small-img" />
                        <img src={sugarcane} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Sugarcane</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="tatin" className={shade == "tatin" && "active"}>
                <div class="single-pro-image" >
                    <img src={tatin} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={tatin} class="small-img" />
                        <img src={tatinlips} class="small-img" />
                        <img src={tatinicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipliner/Standard Lipliner</h6>
                    <h4>Tatin</h4>
                    <h2>$20</h2>
                    <h5>Product Details</h5>
                    <p>A clean, high-performance lipliner in a creamy bold-color that can keep up with you. Fill weight: 0.05 oz</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={acaismithicon} className={shade == "acaismith" && "active"} onClick={() => setShade("acaismith")} />
                            <img src={brandyicon} className={shade == "brandy" && "active"} onClick={() => setShade("brandy")} />
                            <img src={cavaicon} className={shade == "cava" && "active"} onClick={() => setShade("cava")} />
                            <img src={cognacicon} className={shade == "cognac" && "active"} onClick={() => setShade("cognac")} />
                            <img src={damsonicon} className={shade == "damson" && "active"} onClick={() => setShade("damson")} />
                            <img src={hardcidericon} className={shade == "hardcider" && "active"} onClick={() => setShade("hardcider")} />
                            <img src={honeycrispicon} className={shade == "honeycrisp" && "active"} onClick={() => setShade("honeycrisp")} />
                            <img src={noninoicon} className={shade == "nonino" && "active"} onClick={() => setShade("nonino")} />
                            <img src={pastilleicon} className={shade == "pastille" && "active"} onClick={() => setShade("pastille")} />
                            <img src={pavlovaicon} className={shade == "pavlova" && "active"} onClick={() => setShade("pavlova")} />
                            <img src={redvelveticon} className={shade == "redvelvet" && "active"} onClick={() => setShade("redvelvet")} />
                            <img src={scarleticon} className={shade == "scarlet" && "active"} onClick={() => setShade("scarlet")} />
                            <img src={stingericon} className={shade == "stinger" && "active"} onClick={() => setShade("stinger")} />
                            <img src={sugarcaneicon} className={shade == "sugarcane" && "active"} onClick={() => setShade("sugarcane")} />
                            <img src={tatinicon} className={shade == "tatin" && "active"} onClick={() => setShade("tatin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
export default Lipliner;