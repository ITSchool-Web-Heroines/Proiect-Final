import React from "react";
import Head from "next/head";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

// SUPABASE
import supabase from "../../utils/supabaseClient";
export async function getServerSideProps({ params: { projectName } }) {
  let { data } = await supabase
    .from("projects")
    .select()
    .eq("projectName", projectName)
    .single();
  return {
    props: {
      projects: data,
    },
  };
}

// STYLES
import styles from "./projectIndividual.module.scss";

// COMPONENTS
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";
import NavBar from "../../components/NavBar/NavBar";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function ProjectDetails({ projects }) {
  const theme = useContext(ThemeContext);
  console.log(projects);
  // BUTTON
  const project = {
    margin: "0 auto",
    position: "static",
    backgroundColor: "var(--background)",
  };
  // TAB TITLE
  const { projectName } = projects;
  let tabTitle = projectName.toUpperCase();
  return (
    <LoadingWrap>
      <Head>
        <title>{tabTitle}</title>
      </Head>
      <NavBar />
      <ThemeButton
        styles={project}
        theme={theme.isDark}
        handleClick={theme.setTheme}
      />
      <main className={styles.projects_box}>
        <ProjectCard
          projectName={projectName}
          source={projects.source}
          title={projects.description.title}
          subtitle={projects.description.subtitle}
          description={projects.description.text}
        />
      </main>
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}
