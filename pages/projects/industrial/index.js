import React from "react";
import Head from "next/head";

// SUPABASE
import supabase from "../../../utils/supabaseClient";
export async function getServerSideProps() {
  let { data } = await supabase
    .from("projects")
    .select()
    .eq("projectName", "industrial")
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
import OneTile from "../../../components/OneTile/OneTile";
import TwoTiles from "../../../components/TwoTiles/TwoTiles";
import ThreeTiles from "../../../components/ThreeTiles/ThreeTiles";
import FooterAndBackTop from "../../../components/Footer/FooterAndBackTop";

export default function ProjectDetails({ projects }) {
  // TAB TITLE
  const { projectName } = projects;
  let tabTitle = projectName.toUpperCase();

  return (
    <LoadingWrap title={"industrial"}>
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
        <OneTile
          planSource={projects.page_c.c1_img}
          oneTitle={projects.page_c.c1_text}
          twoTitle={projects.page_c.c2_text}
          threeTitle={projects.page_c.c3_text}
          fourTitle={projects.page_c.c4_text}
        />
        <TwoTiles
          oneSource={projects.page_d.d1_img}
          twoSource={projects.page_d.d2_img}
          oneTitle={projects.page_d.d1_text}
          twoTitle={projects.page_d.d2_text}
        />
      </main>
      <NavProjects
        currentPage={""}
        nextLink={"/projects/skyscraper"}
        nextProject={"skyscraper"}
        previousLink={"/projects/medical"}
        previousProject={"medical"}
      />
      <FooterAndBackTop />
    </LoadingWrap>
  );
}
