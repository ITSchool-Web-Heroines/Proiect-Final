import React, { useState } from "react";
import Head from "next/head";

// STYLES
import styles from "./about.module.scss";

// DATA
import informations from "../../data/about/information";
import schools from "../../data/about/schools";
import jobs from "../../data/about/jobs";
import languages from "../../data/about/languages";
import orgs from "../../data/about/orgs";
import coms from "../../data/about/coms";
import profs from "../../data/about/profs";

// COMPONENTS
import NavBar from "../../components/NavBar";
import InfoBox from "../../components/InfoBox";
import ExpBox from "../../components/ExpBox";
import AbilityList from "../../components/AbilityList";
import SkillsBar from "../../components/SkillsBar";

function MyAboutPage() {
  return (
    <>
      <Head>
        <title>Detalii</title>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.photo}></div>
          <div className={styles.text}>
            <p className={styles.title}>maria mădălina astancăi</p>
            <p className={styles.sub_title}>arhitect</p>
          </div>
        </header>
        <section className={styles.information}>
          {informations.map(information => (
            <InfoBox
              key={information.id}
              title={information.title}
              subtitle_one={information.subtitle_one}
              text_one={information.text_one}
              subtitle_two={information.subtitle_two}
              text_two={information.text_two}
              subtitle_three={information.subtitle_three}
              text_three={information.text_three}
            />
          ))}
        </section>
        <section className={styles.school}>
          <p className={styles.section_title}>
            educație și formare profesională
          </p>
          {schools.map(school => (
            <ExpBox
              key={school.period}
              period={school.period}
              location={school.location}
              institution={school.institution}
              details={school.details}
            />
          ))}
        </section>
        <section className={styles.jobs}>
          <p className={styles.section_title}>experiență profesională</p>
          {jobs.map(jobs => (
            <ExpBox
              key={jobs.period}
              period={jobs.period}
              location={jobs.location}
              institution={jobs.institution}
              details={jobs.details}
            />
          ))}
        </section>
        <section className={styles.languages}>
          <p className={styles.section_title}>competențe lingvistice</p>
          <AbilityList abilities={languages} />
        </section>
        <section className={styles.digitals}>
          <p className={styles.section_title}>competențe digitale</p>
          <ul className={styles.abilities_list}>
            <li className={`${styles.list_item} ${styles.autodesk}`}>
              autodesk
              <ul>
                <li className={styles.list_item}>Revit</li>
                <SkillsBar level={4} />
                <li className={styles.list_item}>autocad</li>
                <SkillsBar level={5} />
              </ul>
            </li>
            <li className={`${styles.list_item} ${styles.microsoft}`}>
              microsoft
              <ul>
                <li className={styles.list_item}>word</li>
                <SkillsBar level={6} />
                <li className={styles.list_item}>excel</li>
                <SkillsBar level={5} />
              </ul>
            </li>
            <li className={`${styles.list_item} ${styles.adobe}`}>
              Adobe
              <ul>
                <li className={styles.list_item}>photoshop</li>
                <SkillsBar level={4} />
                <li className={styles.list_item}>illustrator</li>
                <SkillsBar level={4} />
                <li className={styles.list_item}>indesign</li>
                <SkillsBar level={4} />
              </ul>
            </li>
            <li className={`${styles.list_item} ${styles.sketchup}`}>
              sketchup
            </li>
            <SkillsBar level={3} />
            <li className={`${styles.list_item} ${styles.lumion}`}>lumion</li>
            <SkillsBar level={5} />
          </ul>
        </section>
        <section className={styles.orgs}>
          <p className={styles.section_title}>competențe organizatorice</p>
          <AbilityList abilities={orgs} />
        </section>
        <section className={styles.coms}>
          <p className={styles.section_title}>
            competențe de comunicare. interpersonale
          </p>
          <AbilityList abilities={coms} />
        </section>
        <section className={styles.profs}>
          <p className={styles.section_title}>
            competențe dobândite la locul de muncă
          </p>
          <AbilityList abilities={profs} />
        </section>
      </main>
    </>
  );
}

export default MyAboutPage;
