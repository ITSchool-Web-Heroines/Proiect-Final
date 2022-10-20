import React from 'react'
import classes from '../../styles/section.module.css'
function Section (props) {
    
    return (
        
        <h4 className={`${classes.section_title}`}>{props.title}</h4>
    )
}

export default Section