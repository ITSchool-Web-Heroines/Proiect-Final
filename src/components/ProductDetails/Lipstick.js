import React from "react";
import "../../styles/ProductDetails/lipstick.scss"
import beetroot from "../../images/lipstick/beetroot.png";
import beetrootlips from "../../images/lipstick/beetrootlips.jpg"
import beetrooticon from "../../images/lipstick/beetroot icon.png"
import cayenne from "../../images/lipstick/cayenne.png";
import cayennelips from "../../images/lipstick/cayennelips.jpg"
import cayenneicon from "../../images/lipstick/cayenne icon.png"
import chai from "../../images/lipstick/chai.png";
import chailips from "../../images/lipstick/chailips.jpg"
import chaiicon from "../../images/lipstick/chai icon.png"
import expressobrava from "../../images/lipstick/expressobrava.png";
import expressobravalips from "../../images/lipstick/expressobravalips.jpg"
import expressobravaicon from "../../images/lipstick/expressobrava icon.png"
import extrasugarbuns from "../../images/lipstick/extrasugarbuns.png";
import extrasugarbunslips from "../../images/lipstick/extrasugarbunslips.jpg"
import extrasugarbunsicon from "../../images/lipstick/expressobrava icon.png"
import fig from "../../images/lipstick/fig.png";
import figlips from "../../images/lipstick/figlips.jpg"
import figicon from "../../images/lipstick/fig icon.png"
import gingermalt from "../../images/lipstick/gingermalt.png";
import gingermaltlips from "../../images/lipstick/gingermaltlips.jpg"
import gingermalticon from "../../images/lipstick/gingermalt icon.png"
import harissa from "../../images/lipstick/harissa.png";
import harissalips from "../../images/lipstick/harissalips.jpg"
import harissaicon from "../../images/lipstick/harissa icon.png"
import hottomato from "../../images/lipstick/hottomato.png"
import hottomatolips from "../../images/lipstick/hottomatolips.jpg"
import hottomatoicon from "../../images/lipstick/hottomato icon.png"
import juniper from "../../images/lipstick/juniper.png"
import juniperlips from "../../images/lipstick/juniperlips.jpg"
import junipericon from "../../images/lipstick/juniper icon.png"
import maple from "../../images/lipstick/maple.png"
import maplelips from "../../images/lipstick/maplelips.jpg"
import mapleicon from "../../images/lipstick/maple icon.png"
import mulberry from "../../images/lipstick/mulberry.png"
import mulberrylips from "../../images/lipstick/mulberrylips.jpg"
import mulberryicon from "../../images/lipstick/mulberry icon.png"
import pluot from "../../images/lipstick/pluot.png"
import ploutlips from "../../images/lipstick/ploutlips.jpg"
import pluoticon from "../../images/lipstick/plout icon.png"
import pomelo from "../../images/lipstick/pomelo.png"
import pomelolips from "../../images/lipstick/pomelolips.jpg"
import pomeloicon from "../../images/lipstick/pomelo icon.png"
import praline from "../../images/lipstick/praline.png"
import pralinelips from "../../images/lipstick/pralinelips.jpg"
import pralineicon from "../../images/lipstick/praline icon.png"
import radicchio from "../../images/lipstick/radicchio.png"
import radicchiolips from "../../images/lipstick/radicchiolips.jpg"
import radicchioicon from "../../images/lipstick/radicchio icon.png"
import sesame from "../../images/lipstick/sesame.png"
import sesamelips from "../../images/lipstick/sesamelips.jpg"
import sesameicon from "../../images/lipstick/sesame icon.png"
import sugarbuns from "../../images/lipstick/sugarbuns.png"
import sugarbunslips from "../../images/lipstick/sugarbunslips.jpg"
import sugarbunsicon from "../../images/lipstick/sugarbuns icon.png"
import tamarind from "../../images/lipstick/tamarind.png"
import tamarindlips from "../../images/lipstick/tamarindlips.jpg"
import tamarindicon from "../../images/lipstick/tamarind icon.png"
import tannin from "../../images/lipstick/tannin.png"
import tanninlips from "../../images/lipstick/tanninlips.jpg"
import tanninicon from "../../images/lipstick/tannin icon.png"
import apero from "../../images/lipstick/apero.png"
import aperolips from "../../images/lipstick/aperolips.png"
import aperoicon from "../../images/lipstick/cayenne icon.png"

const Lipstick = () => {
    return (
        <div id="lipstick">
            <div class="shopdetails">
                <div class="single-pro-image" id="beetroot">
                    <img src={beetroot} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={beetroot} class="small-img" />
                        <img src={beetrootlips} class="small-img" />
                        <img src={beetrooticon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Beetroot</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img id="aperoicon" src={aperoicon} />
                            <img id="beetrooticon" src={beetrooticon} />
                            <img id="cayenneicon" src={cayenneicon} />
                            <img id="chaiicon" src={chaiicon} />
                            <img id="expressobrava" src={expressobravaicon} />
                            <img id="extrasugarbunsicon" src={extrasugarbunsicon} />
                            <img id="figicon" src={figicon} />
                            <img id="gingermalticon" src={gingermalticon} />
                            <img id="harissaicon" src={harissaicon} />
                            <img id="hoticon" src={hottomatoicon} />
                            <img id="junipericon" src={junipericon} />
                            <img id="mapleicon" src={mapleicon} />
                            <img id="mulberryicon" src={mulberryicon} />
                            <img id="pluoticon" src={pluoticon} />
                            <img id="pomeloicon" src={pomeloicon} />
                            <img id="pralineicon" src={pralineicon} />
                            <img id="radicchioicon" src={radicchioicon} />
                            <img id="sesameicon" src={sesameicon} />
                            <img id="sugarbunsicon" src={sugarbunsicon} />
                            <img id="tamrindicon" src={tamarindicon} />
                            <img id="tanninicon" src={tanninicon} />
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
export default Lipstick;