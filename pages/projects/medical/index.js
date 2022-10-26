import React from "react";
import Head from "next/head";

// SUPABASE
import supabase from "../../../utils/supabaseClient";
export async function getServerSideProps() {
  let { data } = await supabase
    .from("projects")
    .select()
    .eq("projectName", "medical")
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
import FooterAndBackTop from "../../../components/Footer/FooterAndBackTop";

export default function ProjectDetails({ projects }) {
  // TAB TITLE
  const { projectName } = projects;
  let tabTitle = projectName.toUpperCase();

  return (
    <LoadingWrap title={"medical"}>
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
        />
        <OneTile
          planSource={projects.page_b.b1_img}
          oneTitle={projects.page_b.b1_text}
          twoTitle={projects.page_b.b2_text}
          threeTitle={projects.page_b.b3_text}
        />
        <OneTile
          planSource={projects.page_c.c1_img}
          oneTitle={projects.page_c.c1_text}
          twoTitle={projects.page_c.c2_text}
          threeTitle={projects.page_c.c3_text}
        />
      </main>
      <NavProjects
        currentPage={""}
        nextLink={"/projects/industrial"}
        nextProject={"industrial"}
        previousLink={"/projects/boutique"}
        previousProject={"boutique"}
      />
      <FooterAndBackTop />
    </LoadingWrap>
  );
}
