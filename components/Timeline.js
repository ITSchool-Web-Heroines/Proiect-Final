import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./Experience.module.scss";

export default function Timeline ({timer}) {
  
    return (
      <div>
        <VerticalTimeline >
          <VerticalTimelineElement
              className={styles.timeline}
              contentStyle={{ background: "white", opacity:"0.8" }}
              contentArrowStyle={{ borderRight: '0.5rem solid'}}
              date={timer.date}
              position={ "right"}
              iconStyle={{ background: "rgb(232,214,161)", color: "#fff" }}
              icon={timer.icon}
            >
              
              <h3 >{timer.title}</h3>
              <h6 >
                {timer.location}
              </h6>
              <p>
                {timer.description}
              </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
  )
}

