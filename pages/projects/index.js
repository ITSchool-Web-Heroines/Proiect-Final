import React from "react";
import Head from "next/head";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

// SUPABASE
import supabase from "../../utils/supabaseClient";

// STYLES
import styles from "./projects.module.scss";

// FUNCTIONS

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";
import ProjectTile from "../../components/ProjectTile/ProjectTile";

// IMAGES
import culturall from "../../images/projects/culturall.png";
import boutique from "../../images/projects/boutique.png";
import medical from "../../images/projects/medical.png";
import industrial from "../../images/projects/industrial.png";
import skyscraper from "../../images/projects/skyscraper.png";
import landmark from "../../images/projects/landmark.png";
import impreuna from "../../images/projects/impreuna.png";
import manufacturat from "../../images/projects/manufacturat.png";

function MyProjectsPage() {
  console.log(supabase);

  // STYLES
  const project = {
    insetBlockStart: "3.5rem",
    insetInlineStart: "1rem",
  };
  const projects = [
    {
      source: culturall,
      projectName: "culturall",
      subtitle: "CENTRU CULTURAL PENTRU TOTI",
      text: "VI - 2021",
      title_one: "cul",
      title_two: "tur",
      title_three: "all",
      color: "#9e5a4c",
      page: "/",
    },
    {
      source: boutique,
      projectName: "boutique",
      subtitle: "BOUTIQUE HOTEL",
      text: "VI - 2021",
      title_one: "bou",
      title_two: "tiq",
      title_three: "ue",
      color: "#748867",
      page: "/about",
    },
    {
      source: medical,
      projectName: "medical",
      subtitle: "CABINET MEDICAL",
      text: "VI - 2021",
      title_one: "me",
      title_two: "di",
      title_three: "cal",
      color: "#b79950",
      page: "/about",
    },
    {
      source: industrial,
      projectName: "industrial",
      subtitle: "REVITALIZARE UZINA ELECTRICA",
      text: "IV - 2019",
      title_one: "ind",
      title_two: "ust",
      title_three: "rial",
      color: "#ac6c53",
      page: "/about",
    },
    {
      source: skyscraper,
      projectName: "skyscraper",
      subtitle: "CLADIRE DE BIROURI",
      text: "IV - 2020",
      title_one: "SKY",
      title_two: "SCR",
      title_three: "APER",
      color: "#486478",
      page: "/about",
    },
    {
      source: landmark,
      projectName: "landmark",
      subtitle: "HOTEL URBAN ****",
      text: "IV - 2020",
      title_one: "LAN",
      title_two: "DMA",
      title_three: "rk",
      color: "#566c57",
      page: "/",
    },
    {
      source: impreuna,
      projectName: "impreuna",
      subtitle: "LOCUINTE COLECTIVE",
      text: "IV - 2020",
      title_one: "im",
      title_two: "pre",
      title_three: "una",
      color: "#cba751",
      page: "/",
    },
    {
      source: manufacturat,
      projectName: "manufacturat",
      subtitle: "ATELIER DE CREATIE - EXPOZITIE",
      text: "V - 2019",
      title_one: "man",
      title_two: "ufa",
      title_three: "ctu",
      title_four: "rat",
      color: "#ba9569",
      page: "/about",
    },
  ];
  const theme = useContext(ThemeContext);
  return (
    <LoadingWrap>
      <Head>
        <title>Proiecte</title>
      </Head>
      <NavBar />
      <ThemeButton
        styles={project}
        theme={theme.isDark}
        handleClick={theme.setTheme}
      />
      <main className={styles.projects_box}>
        {projects.map(project => (
          <ProjectTile
            key={project.projectName}
            source={project.source}
            projectName={project.projectName}
            subtitle={project.subtitle}
            text={project.text}
            title_one={project.title_one}
            title_two={project.title_two}
            title_three={project.title_three}
            title_four={project.title_four}
            color={project.color}
            page={project.page}
          />
        ))}
      </main>
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}

export default MyProjectsPage;
