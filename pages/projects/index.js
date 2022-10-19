import React, { useEffect, useState } from "react";
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

export async function getServerSideProps(context) {
  let { data, error, status } = await supabase
    .from("projects")
    .select(
      "projectName, source, subtitle, text,title_one, title_two, title_three, title_four, color, page"
    )
    .order("id");
  return {
    props: {
      projects: data,
    },
  };
}
function MyProjectsPage({ projects }) {
  // STYLES
  const project = {
    insetBlockStart: "3.5rem",
    insetInlineStart: "1rem",
  };
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
      {projects && (
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
      )}
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}

export default MyProjectsPage;
