import React, { useState } from "react";
import NavLink from "../NavLink";

import styles from "./NavProjects.module.scss";

function NavProjects(props) {
  let navigation;
  if (props.currentPage === "culturall") {
    navigation = (
      <NavLink href={props.nextLink} className={styles.next_project}>
        {props.nextProject}
      </NavLink>
    );
  } else if (props.currentPage === "manufacturat") {
    navigation = (
      <NavLink href={props.previousLink} className={styles.previous_project}>
        {props.previousProject}
      </NavLink>
    );
  } else {
    navigation = (
      <nav className={styles.navbox}>
        <NavLink href={props.previousLink} className={styles.forward_project}>
          {props.previousProject}
        </NavLink>
        <NavLink href={props.nextLink} className={styles.forward_project}>
          {props.nextProject}
        </NavLink>
      </nav>
    );
  }
  return <>{navigation}</>;
}

export default NavProjects;
