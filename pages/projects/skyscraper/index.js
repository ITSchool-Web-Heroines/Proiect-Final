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
    .eq("projectName", "skyscraper")
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
import ThreeTiles from "../../../components/ThreeTiles/ThreeTiles";
import TwoTiles from "../../../components/TwoTiles/TwoTiles";
import OneTile from "../../../components/OneTile/OneTile";

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
        <ThreeTiles
          oneSource={projects.page_a.a1_img}
          twoSource={projects.page_a.a2_img}
          threeSource={projects.page_a.a3_img}
          oneTitle={projects.page_a.a1_text}
          twoTitle={projects.page_a.a2_text}
          threeTitle={projects.page_a.a3_text}
        />
        <TwoTiles
          oneSource={projects.page_b.b1_img}
          twoSource={projects.page_b.b2_img}
          oneTitle={projects.page_b.b1_text}
          twoTitle={projects.page_b.b2_text}
        />
        <TwoTiles
          oneSource={projects.page_c.c1_img}
          twoSource={projects.page_c.c2_img}
          oneTitle={projects.page_c.c1_text}
          twoTitle={projects.page_c.c2_text}
        />
        <TwoTiles
          oneSource={projects.page_d.d1_img}
          twoSource={projects.page_d.d2_img}
          oneTitle={projects.page_d.d1_text}
          twoTitle={projects.page_d.d2_text}
        />
        <OneTile
          planSource={projects.page_e.e1_img}
          oneTitle={projects.page_e.e1_text}
          twoTitle={projects.page_e.e2_text}
          threeTitle={projects.page_e.e3_text}
        />
      </main>
      <NavProjects
        currentPage={""}
        nextLink={"/projects/landmark"}
        nextProject={"landmark"}
        previousLink={"/projects/industrial"}
        previousProject={"industrial"}
      />
    </LoadingWrap>
  );
}
