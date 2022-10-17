import React from "react";
import { useInView } from "react-intersection-observer";
import FlipCard from "../FlipCard/FlipCard";

// STYLES
import styles from "./RightProject.module.scss";

// COMPONENTS

function RightProject(props) {
  const { ref: myRef, inView: refIsVisible } = useInView();

  return (
    <section
      className={`${styles.right_project} ${refIsVisible ? styles.appear : ""}`}
      ref={myRef}
    >
      <div className={styles.project}>
        <FlipCard
          name={props.image}
          source={props.source}
          styles={{ backgroundColor: `${props.color}` }}
          page={props.page}
        />
        <div className={styles.subtitle}>
          <p>{props.subtitle}</p>
          <p>{props.text}</p>
        </div>
      </div>
      <div className={styles.title}>
        <p>{props.title_one}</p>
        <p>{props.title_two}</p>
        <p>{props.title_three}</p>
        {props.title_four && <p>{props.title_four}</p>}
      </div>
    </section>
  );
}

export default RightProject;
