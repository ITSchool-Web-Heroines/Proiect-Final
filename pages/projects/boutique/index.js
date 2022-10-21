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
    .eq("projectName", "boutique")
    .single();
  return {
    props: {
      projects: data,
    },
  };
}

// STYLES
import styles from "../individual.module.scss";

// COMPONENTS
import LoadingWrap from "../../../components/LoadingWrap/LoadingWrap";
import NavBar from "../../../components/NavBar/NavBar";
import ThemeButton from "../../../components/ThemeButton/ThemeButton";
import CustomParticles from "../../../components/CustomParticles/CustomParticles";
import ProjectHeader from "../../../components/ProjectHeader/ProjectHeader";
import NavProjects from "../../../components/NavProjects/NavProjects";
import OneTile from "../../../components/OneTile/OneTile";
import TwoTiles from "../../../components/TwoTiles/TwoTiles";

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
      <main className={styles.main}>
        <OneTile
          planSource={projects.page_a.a1_img}
          oneTitle={projects.page_a.a1_text}
          twoTitle={projects.page_a.a2_text}
          threeTitle={projects.page_a.a3_text}
          fourTitle={projects.page_a.a4_text}
        />
        <OneTile
          planSource={projects.page_b.b1_img}
          oneTitle={projects.page_b.b1_text}
          twoTitle={projects.page_b.b2_text}
          threeTitle={projects.page_b.b3_text}
          fourTitle={projects.page_b.b4_text}
        />
        <TwoTiles
          oneSource={projects.page_c.c1_img}
          twoSource={projects.page_c.c2_img}
          oneTitle={projects.page_c.c1_text}
          twoTitle={projects.page_c.c2_text}
        />
        <OneTile
          planSource={projects.page_d.d1_img}
          oneTitle={projects.page_d.d1_text}
          twoTitle={projects.page_d.d2_text}
          threeTitle={projects.page_d.d3_text}
          fourTitle={projects.page_d.d4_text}
        />
      </main>
      <NavProjects
        currentPage={""}
        nextLink={"/projects/medical"}
        nextProject={"medical"}
        previousLink={"/projects/culturall"}
        previousProject={"culturall"}
      />
    </LoadingWrap>
  );
}
