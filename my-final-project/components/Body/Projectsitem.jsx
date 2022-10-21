import React from "react";
import classes from '../../styles/projects-item.module.css'
import Image from 'next/image'


const Projectsitem = (props) => {
    

    const {subtitle,img, keyword} = props.item

    return (
        <div className={`${classes.project_item}`}>
            <div>
                <h6>{subtitle}</h6>
                {
                    keyword.map((item, index) => (
                        <span className={`${classes.project_keyword}`} key ={index}>{item}</span>
                    ))
                }
            </div>
            <div className={`${classes.project_image}`}>
                <Image alt="project_image" src={img} width='380' height='250'/>
            </div>
        </div>
    )
}

export default Projectsitem