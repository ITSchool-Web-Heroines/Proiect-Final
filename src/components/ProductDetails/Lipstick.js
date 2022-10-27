import React, { useState, useMemo } from "react";
import { useMemo } from "react";
import "../../styles/ProductDetails/lipstick.scss";
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
    const [shade, setShade]  = useState("beetroot");
 
    return (
        <div id="lipstick">
            <article id="beetroot" className={shade == "beetroot" && "active"}>
                <div class="single-pro-image">
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
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="apero" className={shade == "apero" && "active"}>
                <div class="single-pro-image">
                    <img src={apero} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={apero} class="small-img" />
                        <img src={aperolips} class="small-img" />
                        <img src={aperoicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Apero</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="cayenne" className={shade == "cayenne" && "active"}>
                <div class="single-pro-image">
                    <img src={cayenne} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={cayenne} class="small-img" />
                        <img src={cayennelips} class="small-img" />
                        <img src={cayenneicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Cayenne</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="chai" className={shade == "chai" && "active"}>
                <div class="single-pro-image" >
                    <img src={chai} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={chai} class="small-img" />
                        <img src={chailips} class="small-img" />
                        <img src={chaiicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Chai</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="expressobrava" className={shade == "expressobrava" && "active"}>
                <div class="single-pro-image" >
                    <img src={expressobrava} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={expressobrava} class="small-img" />
                        <img src={expressobravalips} class="small-img" />
                        <img src={expressobravaicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Expresso Brava</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="extrasugarbuns" className={shade == "extrasugarbuns" && "active"}>
                <div class="single-pro-image" >
                    <img src={extrasugarbuns} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={extrasugarbuns} class="small-img" />
                        <img src={extrasugarbunslips} class="small-img" />
                        <img src={extrasugarbunsicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Extra Sugarbuns</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="fig" className={shade == "fig" && "active"}>
                <div class="single-pro-image" >
                    <img src={fig} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={fig} class="small-img" />
                        <img src={figlips} class="small-img" />
                        <img src={figicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Fig</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="gingermalt" className={shade == "gingermalt" && "active"}>
                <div class="single-pro-image" >
                    <img src={gingermalt} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={gingermalt} class="small-img" />
                        <img src={gingermaltlips} class="small-img" />
                        <img src={gingermalticon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Gingermalt</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="harissa" className={shade == "harissa" && "active"}>
                <div class="single-pro-image" >
                    <img src={harissa} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={harissa} class="small-img" />
                        <img src={harissalips} class="small-img" />
                        <img src={harissaicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Harissa</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="hottomato" className={shade == "hottomato" && "active"}>
                <div class="single-pro-image" >
                    <img src={hottomato} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={hottomato} class="small-img" />
                        <img src={hottomatolips} class="small-img" />
                        <img src={hottomatoicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Hot Tomato</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="juniper" className={shade == "juniper" && "active"}>
                <div class="single-pro-image" >
                    <img src={juniper} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={juniper} class="small-img" />
                        <img src={juniperlips} class="small-img" />
                        <img src={junipericon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Juniper</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="maple" className={shade == "maple" && "active"}>
                <div class="single-pro-image" >
                    <img src={maple} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={maple} class="small-img" />
                        <img src={maplelips} class="small-img" />
                        <img src={mapleicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Maple</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="mulberry" className={shade == "mulberry" && "active"}>
                <div class="single-pro-image" >
                    <img src={mulberry} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={mulberry} class="small-img" />
                        <img src={mulberrylips} class="small-img" />
                        <img src={mulberryicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Mulberry</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="pluot" className={shade == "pluot" && "active"}>
                <div class="single-pro-image" >
                    <img src={pluot} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={pluot} class="small-img" />
                        <img src={ploutlips} class="small-img" />
                        <img src={pluoticon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Pluot</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="pomelo" className={shade == "pomelo" && "active"}>
                <div class="single-pro-image" >
                    <img src={pomelo} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={pomelo} class="small-img" />
                        <img src={pomelolips} class="small-img" />
                        <img src={pomeloicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Pomelo</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="praline" className={shade == "praline" && "active"}>
                <div class="single-pro-image" >
                    <img src={praline} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={praline} class="small-img" />
                        <img src={pralinelips} class="small-img" />
                        <img src={pralineicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Praline</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="radicchio" className={shade == "radicchio" && "active"}>
                <div class="single-pro-image" >
                    <img src={radicchio} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={radicchio} class="small-img" />
                        <img src={radicchiolips} class="small-img" />
                        <img src={radicchioicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Radicchio</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="sesame" className={shade == "sesame" && "active"}>
                <div class="single-pro-image" >
                    <img src={sesame} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={sesame} class="small-img" />
                        <img src={sesamelips} class="small-img" />
                        <img src={sesameicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Sesame</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="sugarbuns" className={shade == "sugarbuns" && "active"}>
                <div class="single-pro-image" >
                    <img src={sugarbuns} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={sugarbuns} class="small-img" />
                        <img src={sugarbunslips} class="small-img" />
                        <img src={sugarbunsicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Sugarbuns</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="tamarind" className={shade == "tamarind" && "active"}>
                <div class="single-pro-image" >
                    <img src={tamarind} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={tamarind} class="small-img" />
                        <img src={tamarindlips} class="small-img" />
                        <img src={tamarindicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Tamarind</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
                        </div>
                        <div class="button-group">
                            <input type="number" placeholder="Qty" min="1" max="5" />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </article>
            <article id="tannin" className={shade == "tannin" && "active"}>
                <div class="single-pro-image" >
                    <img src={tannin} id="MainImg" width="100%" />
                    <div class="small-img-group">
                        <img src={tannin} class="small-img" />
                        <img src={tanninlips} class="small-img" />
                        <img src={tanninicon} class="small-img" />
                    </div>
                </div>
                <div class="single-pro-details">
                    <h6>Lipstick/Standard Lipstick</h6>
                    <h4>Tannin</h4>
                    <h2>$30</h2>
                    <h5>Product Details</h5>
                    <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                    <div class="form">
                        <h4>Choose your shade</h4>
                        <div class="shade-group">
                            <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                            <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                            <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                            <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                            <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade("expressobrava")} />
                            <img src={extrasugarbunsicon} className={shade == "extrasugarbuns" && "active"} onClick={() => setShade("extrasugarbuns")} />
                            <img src={figicon} className={shade == "fig" && "active"} onClick={() => setShade("fig")} />
                            <img src={gingermalticon} className={shade == "gingermalt" && "active"} onClick={() => setShade("gingermalt")} />
                            <img src={harissaicon} className={shade == "harissa" && "active"} onClick={() => setShade("harissa")} />
                            <img src={hottomatoicon} className={shade == "hottomato" && "active"} onClick={() => setShade("hottomato")} />
                            <img src={junipericon} className={shade == "juniper" && "active"} onClick={() => setShade("juniper")} />
                            <img src={mapleicon} className={shade == "maple" && "active"} onClick={() => setShade("maple")} />
                            <img src={mulberryicon} className={shade == "mulberry" && "active"} onClick={() => setShade("mulberry")} />
                            <img src={pluoticon} className={shade == "pluot" && "active"} onClick={() => setShade("pluot")} />
                            <img src={pomeloicon} className={shade == "pomelo" && "active"} onClick={() => setShade("pomelo")} />
                            <img src={pralineicon} className={shade == "praline" && "active"} onClick={() => setShade("praline")} />
                            <img src={radicchioicon} className={shade == "radicchio" && "active"} onClick={() => setShade("radicchio")} />
                            <img src={sesameicon} className={shade == "sesame" && "active"} onClick={() => setShade("sesame")} />
                            <img src={sugarbunsicon} className={shade == "sugarbuns" && "active"} onClick={() => setShade("sugarbuns")} />
                            <img src={tamarindicon} className={shade == "tamarind" && "active"} onClick={() => setShade("tamarind")} />
                            <img src={tanninicon} className={shade == "tannin" && "active"} onClick={() => setShade("tannin")} />
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
export default Lipstick;