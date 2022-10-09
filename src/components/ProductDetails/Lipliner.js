import React from "react";
import "../../styles/ProductDetails/lipliner.scss"
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
import scarlet from "../../images/lipliner/scarlet.png"
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
    return (
        <div id="lipliner">
            <div class="shopdetails">
                <div class="single-pro-image" id="beetroot">
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
                            <img id="acaismith" src={acaismithicon} />
                            <img id="brandyicon" src={brandyicon} />
                            <img id="cavaicon" src={cavaicon} />
                            <img id="cognacicon" src={cognacicon} />
                            <img id="damsonicon" src={damsonicon} />
                            <img id="hardcidericon" src={hardcidericon} />
                            <img id="honeycrispicon" src={honeycrispicon} />
                            <img id="noninoicon" src={noninoicon} />
                            <img id="pstilleicon" src={pastilleicon} />
                            <img id="pavlovaicon" src={pavlovaicon} />
                            <img id="redvelveticon" src={redvelveticon} />
                            <img id="scarleticon" src={scarleticon} />
                            <img id="stingericon" src={stingericon} />
                            <img id="sugarcaneicon" src={sugarcaneicon} />
                            <img id="tatinicon" src={tatinicon} />
                        </div>
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
export default Lipliner;