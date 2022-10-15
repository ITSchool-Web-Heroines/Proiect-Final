import React from "react";
import Head from "next/head";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

// STYLES
import styles from "./projects.module.scss";
// FUNCTIONS

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import FlipCard from "../../components/FlipCard/FlipCard";
import ThemeButton from "../../components/ThemeButton/ThemeButton";

// IMAGES
import boutique from "../../images/projects/boutique/boutique.png";
import culturall from "../../images/projects/culturall/culturall.png";
import industrial from "../../images/projects/industrial/industrial.png";
import landmark from "../../images/projects/landmark/landmark.png";
import manufacturat from "../../images/projects/manufacturat/manufacturat.png";
import skyscraper from "../../images/projects/skyscraper/skyscraper.png";

// STYLES
const projects = {
  insetBlockStart: "3.5rem",
  insetInlineStart: "1rem",
};

function MyProjectsPage() {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDark ? "app dark" : "app"}>
      <Head>
        <title>Proiecte</title>
      </Head>
      <NavBar />
      <ThemeButton
        styles={projects}
        theme={theme.isDark}
        handleClick={theme.setTheme}
      />
      <main className={styles.projects_box}>
        <FlipCard
          name={"culturall"}
          source={culturall}
          styles={{ backgroundColor: "#9e5a4c" }}
          page={"about"}
        />
        <FlipCard
          name={"boutique"}
          source={boutique}
          styles={{ backgroundColor: "#748867" }}
          page={"about"}
        />
        <FlipCard
          name={"manufacturat"}
          source={manufacturat}
          styles={{ backgroundColor: "#ba9569" }}
          page={"about"}
        />
        <FlipCard
          name={"landmark"}
          source={landmark}
          styles={{ backgroundColor: "#566c57" }}
          page={"about"}
        />
        <FlipCard
          name={"skyscraper"}
          source={skyscraper}
          styles={{ backgroundColor: "#486478" }}
          page={"about"}
        />
        <FlipCard
          name={"industrial"}
          source={industrial}
          styles={{ backgroundColor: "#ac6c53" }}
          page={"about"}
        />
      </main>
    </div>
  );
}

export default MyProjectsPage;
