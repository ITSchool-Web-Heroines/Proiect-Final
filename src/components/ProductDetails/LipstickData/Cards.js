import React, { useEffect } from "react";
import { useState } from "react";
import list from "./Data";
import beetrooticon from "../../../images/lipstick/beetroot icon.png"
import cayenneicon from "../../../images/lipstick/cayenne icon.png"
import chaiicon from "../../../images/lipstick/chai icon.png"
import expressobravaicon from "../../../images/lipstick/expressobrava icon.png"
import extrasugarbunsicon from "../../../images/lipstick/expressobrava icon.png"
import figicon from "../../../images/lipstick/fig icon.png"
import gingermalticon from "../../../images/lipstick/gingermalt icon.png"
import harissaicon from "../../../images/lipstick/harissa icon.png"
import hottomatoicon from "../../../images/lipstick/hottomato icon.png"
import junipericon from "../../../images/lipstick/juniper icon.png"
import mapleicon from "../../../images/lipstick/maple icon.png"
import mulberryicon from "../../../images/lipstick/mulberry icon.png"
import pluoticon from "../../../images/lipstick/plout icon.png"
import pomeloicon from "../../../images/lipstick/pomelo icon.png"
import pralineicon from "../../../images/lipstick/praline icon.png"
import radicchioicon from "../../../images/lipstick/radicchio icon.png"
import sesameicon from "../../../images/lipstick/sesame icon.png"
import sugarbunsicon from "../../../images/lipstick/sugarbuns icon.png"
import tamarindicon from "../../../images/lipstick/tamarind icon.png"
import tanninicon from "../../../images/lipstick/tannin icon.png"
import aperoicon from "../../../images/lipstick/cayenne icon.png"
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

const Cards = ({ item, handleClick }) => {
    const { id, name, price, image, image2, image3 } = item;
    const [shade, setShade] = useState("beetroot");


    return (
        <article id={id} className={shade =="beetroot" && "active"}>
            <div class="single-pro-image">
                <img src={image} id="MainImg" width="100%" />
                <div class="small-img-group">
                    <img src={image} class="small-img" />
                    <img src={image2} class="small-img" />
                    <img src={image3} class="small-img" />
                </div>
            </div>
            <div class="single-pro-details">
                <h6>Lipstick/Standard Lipstick</h6>
                <h4 id="name">{name}</h4>
                <h2 id="price">{price}</h2>
                <h5>Product Details</h5>
                <p>A clean, vegan, hydrating soft lipstick powered by cocoa butter, for lasting lightweight color</p>
                <div class="form">
                    <h4>Choose your shade</h4>
                    <div class="shade-group">
                        <img src={aperoicon} className={shade == "apero" && "active"} onClick={() => setShade("apero")} />
                        <img src={beetrooticon} className={shade == "beetroot" && "active"} onClick={() => setShade("beetroot")} />
                        <img src={cayenneicon} className={shade == "cayenne" && "active"} onClick={() => setShade("cayenne")} />
                        <img src={chaiicon} className={shade == "chai" && "active"} onClick={() => setShade("chai")} />
                        <img src={expressobravaicon} className={shade == "expressobrava" && "active"} onClick={() => setShade({id})} />
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
                        <input type="number" placeholder="Qty" min="1" max="5" id="quantity" />
                        <button onClick={()=>handleClick(item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </article>
    );
}
export default Cards;