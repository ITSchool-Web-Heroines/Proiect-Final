import styles from "./Experience.module.scss";
import React from "react";
import timelineElements from "./data/timelist";
import Timeline from "./Timeline";

 

export default function Exp () {
    return (
    <div className={styles.expbox}>{timelineElements.map((timer) => (
        <Timeline 
            timer={timer} 
            key={timer.id}
        >
        </Timeline>
        ))}
    </div>
    )
}

