import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { ThemeContext } from "../../../context/theme";
import { useContext } from "react";

// SUPABASE
import supabase from "../../../utils/supabaseClient";
export async function getServerSideProps() {
  let { data } = await supabase
    .from("projects")
    .select()
    .eq("projectName", "manufacturat")
    .single();
  return {
    props: {
      projects: data,
    },
  };
}

// STYLES

// COMPONENTS
import LoadingWrap from "../../../components/LoadingWrap/LoadingWrap";
import NavBar from "../../../components/NavBar/NavBar";
import ThemeButton from "../../../components/ThemeButton/ThemeButton";
import CustomParticles from "../../../components/CustomParticles/CustomParticles";
import ProjectHeader from "../../../components/ProjectHeader/ProjectHeader";
import NavProjects from "../../../components/NavProjects/NavProjects";

export default function ProjectDetails({ projects }) {
  const theme = useContext(ThemeContext);
  console.log(projects);
  // TAB TITLE
  const { projectName } = projects;
  let tabTitle = projectName.toUpperCase();

  return (
    <LoadingWrap>
      <Head>
        <title>{tabTitle}</title>
      </Head>
      <NavBar />
      <ThemeButton theme={theme.isDark} handleClick={theme.setTheme} />
      <ProjectHeader
        projectName={projectName}
        coverSource={projects.cover}
        logoSource={projects.source}
        title={projects.description.title}
        subtitle={projects.description.subtitle}
        text={projects.description.text}
      />
      <NavProjects
        currentPage={"manufacturat"}
        previousLink={"/projects/impreuna"}
        previousProject={"impreuna"}
      />
    </LoadingWrap>
  );
}
