import React, { useState } from "react";
import Head from "next/head";

import styles from "./about.module.scss";

import NavBar from "../../components/NavBar";
import InfoBox from "../../components/InfoBox";
import ExpBox from "../../components/ExpBox";
import AbilityList from "../../components/AbilityList";

function MyAboutPage() {
  const [informations, setInformations] = useState([
    {
      id: 1,
      title: "date personale",
      subtitle_one: "adresă:",
      text_one: "Aleea Adrian Cârstea, Sector 3, București, România",
      subtitle_two: "cetățenie:",
      text_two: "română",
      subtitle_three: "data nașterii:",
      text_three: "14.11.1996",
    },
    {
      id: 2,
      title: "contact",
      subtitle_one: "nr. telefon:",
      text_one: "0746425276",
      subtitle_two: "email:",
      text_two: "arch.m.madalina@gmail.com",
    },
  ]);
  const [schools, setSchools] = useState([
    {
      period: "2013_2015",
      location: "Neamț, România",
      institution: "COLEGIUL NAȚIONAL “PETRU RAREȘ”",
      details: "secția ȘTIINȚE SOCIALE",
    },
    {
      period: "2016_2017",
      location: "Napoli, Italia",
      institution: "UNIVERSITA DEGLI STUDI DI NAPOLI “FREDERICO II”",
      details: "ERASMUS",
    },
    {
      period: "2015_2021",
      location: "București, România",
      institution: "UNIVERSITATEA DE ARHITECTURĂ SI URBANISM “ION MINCU”",
      details: "specializarea ARHITECTURĂ",
    },
  ]);
  const [jobs, setjobs] = useState([
    {
      period: "2019",
      location: "București, România",
      institution: "Bogdan Radu - birou individual de arhitectură - intern",
    },
    {
      period: "2021",
      location: "București, România",
      institution: "mânadelucru - intern",
    },
    {
      period: "în curs",
      location: "Neamț | București, România",
      institution: "proiecte individuale",
    },
  ]);
  const [languages, setLanguages] = useState([
    "ROMÂNĂ - limba maternă",
    "ENGLEZĂ - nivel utilizator independent",
    "ITALIANĂ - nivel utilizator de bază",
  ]);
  const [orgs, setOrg] = useState([
    "bune competențe organizatorice dobândite prin parcurgerea pașilor din procesul de management al unui proiect de arhitectură",
    "atenție și coerență în întocmirea documentațiilor pentru fazele proiectului",
  ]);
  const [coms, setComs] = useState([
    "atitutide proactivă, pozitivă",
    "lucrez bine în echipă, fiind implicată în funcționarea armonioasă a grupului",
    "bune competențe de comunicare cu persoanele din corpul administrativ care răspund de avizarea documentațiilor proiectului, respectiv specialiștii în domeniu",
  ]);
  const [profs, setProfs] = useState([
    "întocmire documentații proiecte complexe faza SF, CU, DTAC, PT, DE + ofertare, avize, liste cantitati, parte desenata + scrisă arhitectură",
    "intervenții pe clădiri existente, respectiv faza de RELEVEU",
    "atenție și coerență în întocmirea documentațiilor pentru fazele proiectului",
    "sensibilitate pentru intervenții arhitecturale calitative",
    "deschiderea spre a înțelege fenomenul arhitectural în complexitatea sa",
  ]);
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
        <section className={styles.abilities}>
          <p className={styles.section_title}>competențe</p>
          <div>
            <p className={styles.section_title}>_ lingvistice</p>
            <AbilityList abilities={languages} />
          </div>
          <div className={styles.digitals}>
            <p className={styles.section_title}>_ digitale</p>
            <ul className={styles.abilities_list}>
              <li className={styles.list_item}>
                autodesk
                <ul>
                  <li className={styles.list_item}>Revit</li>
                  <li className={styles.list_item}>autocad</li>
                </ul>
              </li>
              <li className={styles.list_item}>
                microsoft
                <ul>
                  <li className={styles.list_item}>word</li>
                  <li className={styles.list_item}>excel</li>
                </ul>
              </li>
              <li className={styles.list_item}>
                Adobe
                <ul>
                  <li className={styles.list_item}>photoshop</li>
                  <li className={styles.list_item}>illustrator</li>
                  <li className={styles.list_item}>indesign</li>
                </ul>
              </li>
              <li className={styles.list_item}>sketchup</li>
              <li className={styles.list_item}>lumion</li>
            </ul>
          </div>
          <div>
            <p className={styles.section_title}>_ organizatorice</p>
            <AbilityList abilities={orgs} />
          </div>
          <div>
            <p className={styles.section_title}>
              _ de comunicare. interpersonale
            </p>
            <AbilityList abilities={coms} />
          </div>
          <div>
            <p className={styles.section_title}>
              _ dobândite la locul de muncă
            </p>
            <AbilityList abilities={profs} />
          </div>
        </section>
      </main>
    </>
  );
}

export default MyAboutPage;
