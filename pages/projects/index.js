import React from "react";
import Head from "next/head";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

// STYLES
import styles from "./projects.module.scss";
// FUNCTIONS

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import CustomParticles from "../../components/CustomParticles/CustomParticles";

// IMAGES
import boutique from "../../images/projects/boutique/boutique.png";
import culturall from "../../images/projects/culturall/culturall.png";
import industrial from "../../images/projects/industrial/industrial.png";
import landmark from "../../images/projects/landmark/landmark.png";
import manufacturat from "../../images/projects/manufacturat/manufacturat.png";
import skyscraper from "../../images/projects/skyscraper/skyscraper.png";
import RightProject from "../../components/RightProject/RightProject";
import LeftProject from "../../components/LeftProject/LeftProject";
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";

// STYLES
const projects = {
  insetBlockStart: "3.5rem",
  insetInlineStart: "1rem",
};

function MyProjectsPage() {
  const theme = useContext(ThemeContext);
  return (
    <LoadingWrap>
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
        <RightProject
          source={culturall}
          subtitle={"CENTRU CULTURAL PENTRU TOTI"}
          text={"VI - 2021"}
          title_one={"cul"}
          title_two={"tur"}
          title_three={"all"}
        />
        <LeftProject
          source={boutique}
          subtitle={"BOUTIQUE HOTEL"}
          text={"VI - 2021"}
          title_one={"bou"}
          title_two={"tiq"}
          title_three={"ue"}
        />
        <RightProject
          source={manufacturat}
          subtitle={"ATELIER DE CREATIE - EXPOZITIE"}
          text={"V - 2019"}
          title_one={"man"}
          title_two={"ufa"}
          title_three={"ctu"}
          title_four={"rat"}
        />
        <LeftProject
          source={skyscraper}
          subtitle={"CLADIRE DE BIROURI"}
          text={"IV - 2020"}
          title_one={"SKY"}
          title_two={"SCR"}
          title_three={"APER"}
        />
        <RightProject
          source={industrial}
          subtitle={"REVITALIZARE UZINA ELECTRICA"}
          text={"IV - 2019"}
          title_one={"ind"}
          title_two={"ust"}
          title_three={"rial"}
        />
        <LeftProject
          source={landmark}
          subtitle={"HOTEL URBAN ****"}
          text={"IV - 2020"}
          title_one={"LAN"}
          title_two={"DMA"}
          title_three={"rk"}
        />
      </main>
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}

export default MyProjectsPage;
