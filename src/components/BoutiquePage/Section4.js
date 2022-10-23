import React, { useState } from "react";
import "../../styles/BoutiquePage/section4.scss"
import Validation from "../../images/404-tick.png"
import Image from "../../images/BB20031_banner_4.jpg"
import Appointment from "../../images/image2.png"
import Party from "../../images/image3.png"
import Validation from "../../images/404-tick.png"

const Section4 = () => {
    const [btn, setBtn]=useState("appointment");
    const popup = document.getElementById("popup");
    const popup2 = document.getElementById("popup2");

    const onSubmit = event => {
        event.preventDefault();
        popup.style.display = `inline-flex`;
        popup2.style.display = `inline-flex`
    }
    /*const onSubmit = event => {
        event.preventDefault();
       
    }*/
    const close = event => {
        popup.style.display = `none`;
        popup2.style.display = `none`
    }


   

    return (
        <div id="section4">
            <div id="container">
                <nav class="buttons">
                    <a className={btn=="appointment" && "active"} onClick={()=>setBtn("appointment")}>Book an appointment</a>
                    <a className={btn == "party" && "active"} onClick={() => setBtn("party")}>Host a party</a>
                </nav>
                <main class="tabs">
                    <article id="appointment" className={btn=="appointment"&&"active"}>
                        <div class="col">
                            <img src={Appointment} />
                            <form onSubmit={onSubmit} >
                                <label>Firstname and Surname</label>
                                <input type="text" class="input" placeholder="..." required />
                                <br />
                                <label>Email</label>
                                <input type="email" class="email" placeholder="..." required />
                                <br />
                                <label>Phone Number</label>
                                <input type="tel" class="telephone" placeholder="..." required />
                                <br />
                                <label>Date</label>
                                <input type="date" class="date" placeholder="..." min="2022-10-28" max="2023-01-31" required />
                                <br />
                                <label>Time</label>
                                <input type="time" class="time" placeholder="..." min="08:00" max="17:30" required />
                                <br />
                                <br />
                                <div class="checkbox-group">
                                    <input type="checkbox" required />
                                    <p>I accept the Terms and Conditions</p>
                                </div>
                                <br />
                                <div class="btn-group">
                                    <button type="reset">Reset form</button>
                                    <button type="submit" class="submitbutton" id="submitbutton1">Submit</button>
                                </div>
                            </form>
                            <div id="popup">
                                <img src={Validation} />
                                <br />
                                <br />
                                <h7>Thank you!</h7>
                                <p> Your request has been successfully submitted</p>
                                <button type="button" id="closepopup1" onClick={close}>Ok</button>
                            </div>
                        </div>
                    </article>
                    <article id="party" className={btn == "party" && "active"}>
                        <div class="col">
                            <img src={Party} />
                            <form onSubmit={onSubmit}>
                                <label>Firstname and Surname</label>
                                <input type="text" class="input" placeholder="..." required />
                                <br />
                                <label>Email</label>
                                <input type="email" class="email" placeholder="..." required />
                                <br />
                                <label>Phone Number</label>
                                <input type="tel" class="telephone" placeholder="..." required />
                                <br />
                                <label>Number of people</label>
                                <input type="number" class="number" required />
                                <br />
                                <label>Date</label>
                                <input type="date" class="date" placeholder="..." min="2022-10-28"
                                    max="2023-01-31" required />
                                <br />
                                <label>Time</label>
                                <input type="time" class="time" placeholder="..." min="08:30" max="16:30" required />
                                <br />
                                <br />
                                <div class="checkbox-group">
                                    <input type="checkbox" required />
                                    <p>I accept the Terms and Conditions</p>
                                </div>
                                <br />
                                <div class="btn-group">
                                    <button type="reset">Reset form</button>
                                    <button type="submit" class="submitbutton" id="submitbutton1">Submit</button>
                                </div>
                            </form>
                            <div class="popup2" id="popup2">
                                <img src={Validation} />
                                <br />
                                <br />
                                <h7>Thank you!</h7>
                                <p> Your request has been successfully submitted</p>
                                <button type="button" id="closepopup2" onClick={close}>Ok</button>
                            </div>
                        </div>
                    </article>
                </main>
            </div>
            <img src={Image} />
        </div>
        
    )
}  
export default Section4;