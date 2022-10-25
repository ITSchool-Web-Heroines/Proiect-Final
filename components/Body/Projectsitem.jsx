import React from "react";
import classes from '../../styles/projects-item.module.css'
import Image from 'next/image'



const Projectsitem = (props) => {
    
    const {subtitle,image,keyword} = props.item;
   
    return (
        <div className={`${classes.project_subitem}`}>
            <div>
                <h6>{subtitle}</h6>
                {keyword.map((item, index) => (
                    <span className={`${classes.project_word}`} key={index}> 
                    {item} 
                    </span>
                ))}
            </div>
            <div className={`${classes.project_image}`}>
                <Image src={image} width='330' height='300' />
            </div>
            <div>
               <hr></hr>
            </div>
        </div>

    )
    
}

export default Projectsitem