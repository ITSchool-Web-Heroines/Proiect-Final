import React from 'react'
import css from "../styles/Contact.module.css";

const Contact = () => {
    return (
        <div className={css.containter}>
            <div className={css.contact}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone Number'/>
                <input type="text" placeholder='Subject'/>
                <input type="text" placeholder='Details'/>
                <button type>Submit</button>
            </div>
        </div>
    )
}

export default Contact
