import React from "react";
import Head from "next/head";
import useLocalStorage from "use-local-storage";
import CustomParticles from "../../components/CustomParticles";

// STYLES
import styles from "./projects.module.scss";
// FUNCTIONS

// COMPONENTS
import NavBar from "../../components/NavBar";
import ThemeButton from "../../components/ThemeButton";
import FlipCard from "../../components/FlipCard";

// IMAGES
import boutique from "../../images/projects/boutique/boutique.png";
import culturall from "../../images/projects/culturall/culturall.png";
import industrial from "../../images/projects/industrial/industrial.png";
import landmark from "../../images/projects/landmark/landmark.png";
import manufacturat from "../../images/projects/manufacturat/manufacturat.png";
import skyscraper from "../../images/projects/skyscraper/skyscraper.png";

// STYLES

function MyPortfolioPage() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const projectsStyle = {
    insetBlockStart: "10rem",
    insetInlineStart: "1%",
  };
  return (
    <div className={styles.app} data-theme={theme}>
      <Head>
        <title>Proiecte</title>
      </Head>
      <NavBar />
      <ThemeButton
        styles={projectsStyle}
        theme={theme}
        handleClick={changeTheme}
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

export default MyPortfolioPage;
