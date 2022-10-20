import React, { useState } from "react";
import NavLink from "../NavLink";

import styles from "./NavProjects.module.scss";

function NavProjects(props) {
  let navigation;
  if (props.currentPage === "culturall") {
    navigation = (
      <nav className={styles.navnext}>
        <NavLink href={props.nextLink} className={styles.next_project}>
          {props.nextProject}
        </NavLink>
      </nav>
    );
  } else if (props.currentPage === "manufacturat") {
    navigation = (
      <nav className={styles.navback}>
        <NavLink href={props.previousLink} className={styles.previous_project}>
          {props.previousProject}
        </NavLink>
      </nav>
    );
  } else {
    navigation = (
      <nav className={styles.navbox}>
        <NavLink href={props.previousLink} className={styles.previous_project}>
          {props.previousProject}
        </NavLink>
        <NavLink href={props.nextLink} className={styles.next_project}>
          {props.nextProject}
        </NavLink>
      </nav>
    );
  }
  return <>{navigation}</>;
}

export default NavProjects;
