import React from "react";
import Head from "next/head";

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
import ProjectHeader from "../../../components/ProjectHeader/ProjectHeader";
import NavProjects from "../../../components/NavProjects/NavProjects";
import OneTile from "../../../components/OneTile/OneTile";
import TwoTiles from "../../../components/TwoTiles/TwoTiles";
import FooterAndBackTop from "../../../components/Footer/FooterAndBackTop";

export default function ProjectDetails({ projects }) {
  console.log(projects);
  // TAB TITLE
  const { projectName } = projects;
  let tabTitle = projectName.toUpperCase();

  return (
    <LoadingWrap title={"boutique"}>
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
      <FooterAndBackTop />
    </LoadingWrap>
  );
}
