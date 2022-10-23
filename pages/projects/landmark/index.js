import React from "react";
import Head from "next/head";

// SUPABASE
import supabase from "../../../utils/supabaseClient";
export async function getServerSideProps() {
  let { data } = await supabase
    .from("projects")
    .select()
    .eq("projectName", "landmark")
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
import ProjectHeader from "../../../components/ProjectHeader/ProjectHeader";
import NavProjects from "../../../components/NavProjects/NavProjects";
import ThreeTiles from "../../../components/ThreeTiles/ThreeTiles";
import TwoTiles from "../../../components/TwoTiles/TwoTiles";
import OneTile from "../../../components/OneTile/OneTile";

export default function ProjectDetails({ projects }) {
  // TAB TITLE
  const { projectName } = projects;
  let tabTitle = projectName.toUpperCase();

  return (
    <LoadingWrap title={"landmark"}>
      <Head>
        <title>{tabTitle}</title>
      </Head>
      <NavBar />
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
        <OneTile
          planSource={projects.page_d.d1_img}
          oneTitle={projects.page_d.d1_text}
          twoTitle={projects.page_d.d2_text}
          threeTitle={projects.page_d.d3_text}
        />
        <OneTile
          planSource={projects.page_e.e1_img}
          oneTitle={projects.page_e.e1_text}
          twoTitle={projects.page_e.e2_text}
          threeTitle={projects.page_e.e3_text}
          fourTitle={projects.page_e.e4_text}
        />
      </main>
      <NavProjects
        currentPage={""}
        nextLink={"/projects/impreuna"}
        nextProject={"impreuna"}
        previousLink={"/projects/skyscraper"}
        previousProject={"skyscraper"}
      />
    </LoadingWrap>
  );
}
