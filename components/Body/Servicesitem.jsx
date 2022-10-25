import React from "react";
import classes from '../../styles/services-item.module.css'

const ServicesItem = ({subtitle, icon}) => {
    return (
        <div className={`${classes.service_item}`}>
            <span><i className={icon}></i></span>
            <h5>{subtitle}</h5>
        </div>
        
    )
}

export default ServicesItem