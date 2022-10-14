import React from "react";
import Head from "next/head";
import useLocalStorage from "use-local-storage";
import { useInView } from "react-intersection-observer";

// STYLES
import styles from "./about.module.scss";

// DATA
import informations from "../../data/about/informations";
import contact from "../../data/about/contact";
import schools from "../../data/about/schools";
import jobs from "../../data/about/jobs";
import languages from "../../data/about/languages";
import orgs from "../../data/about/orgs";
import coms from "../../data/about/coms";
import profs from "../../data/about/profs";

// COMPONENTS
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import NavBar from "../../components/NavBar/NavBar";
import InfoBox from "../../components/InfoBox/InfoBox";
import SkillsBar from "../../components/SkillsBar";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import AbilityList from "../../components/AbilityList/AbilityList";

function MyAboutPage() {
  const { ref: informationRef, inView: informationIsVisible } = useInView();
  const { ref: contactRef, inView: contactIsVisible } = useInView();
  const { ref: schoolRef, inView: schoolIsVisible } = useInView();
  const { ref: jobsRef, inView: jobsIsVisible } = useInView();
  const { ref: digitalsRef, inView: digitalsIsVisible } = useInView();
  const { ref: languagesRef, inView: languagesIsVisible } = useInView();
  const { ref: orgsRef, inView: orgsIsVisible } = useInView();
  const { ref: comsRef, inView: comsIsVisible } = useInView();
  const { ref: profsRef, inView: profsIsVisible } = useInView();

  // CHANGE THEME BUTTON
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const aboutStyle = {
    insetBlockStart: "2.5rem",
    insetInlineStart: "1%",
  };
  return (
    <div className={styles.app} data-theme={theme}>
      <Head>
        <title>Detalii</title>
      </Head>
      <NavBar />
      <ThemeButton
        styles={aboutStyle}
        theme={theme}
        handleClick={changeTheme}
      />
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.photo}></div>
          <div className={styles.text}>
            <p className={styles.title}>maria mădălina astancăi</p>
            <p className={styles.sub_title}>arhitect</p>
          </div>
        </header>
        <section
          className={`${styles.inview_section} ${styles.information} ${
            informationIsVisible ? styles.appear : ""
          }`}
          ref={informationRef}
        >
          <p className={styles.section_title}>date personale</p>
          {informations.map(item => (
            <InfoBox
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </section>
        <section
          className={`${styles.inview_section} ${styles.contact} ${
            contactIsVisible ? styles.appear : ""
          }`}
          ref={contactRef}
        >
          <p className={styles.section_title}>contact</p>
          {contact.map(item => (
            <InfoBox
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </section>
        <section
          className={`${styles.inview_section} ${styles.school} ${
            schoolIsVisible ? styles.appear : ""
          }`}
          ref={schoolRef}
        >
          <p className={styles.section_title}>
            educație și formare profesională
          </p>
          {schools.map(item => (
            <InfoBox
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </section>
        <section
          className={`${styles.inview_section} ${styles.jobs} ${
            jobsIsVisible ? styles.appear : ""
          }`}
          ref={jobsRef}
        >
          <p className={styles.section_title}>experiență profesională</p>
          {jobs.map(item => (
            <InfoBox
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </section>
        <section
          className={`${styles.inview_section} ${styles.digitals} ${
            digitalsIsVisible ? styles.appear : ""
          }`}
          ref={digitalsRef}
        >
          <p className={styles.section_title}>competențe digitale</p>
          <p className={`${styles.title} ${styles.autodesk}`}> autodesk</p>
          <ul className={styles.second_list}>
            <li className={styles.list_item}>Revit</li>
            <SkillsBar level={4} />
            <li className={styles.list_item}>autocad</li>
            <SkillsBar level={5} />
          </ul>
          <p className={`${styles.title} ${styles.microsoft}`}>microsoft</p>
          <ul className={styles.second_list}>
            <li className={styles.list_item}>word</li>
            <SkillsBar level={6} />
            <li className={styles.list_item}>excel</li>
            <SkillsBar level={5} />
          </ul>
          <p className={`${styles.title} ${styles.adobe}`}>Adobe</p>
          <ul className={styles.second_list}>
            <li className={styles.list_item}>photoshop</li>
            <SkillsBar level={4} />
            <li className={styles.list_item}>illustrator</li>
            <SkillsBar level={4} />
            <li className={styles.list_item}>indesign</li>
            <SkillsBar level={4} />
          </ul>
          <p className={`${styles.title} ${styles.sketchup}`}>
            sketchup <SkillsBar level={3} />
          </p>
          <p className={`${styles.title} ${styles.lumion}`}>
            lumion
            <SkillsBar level={5} />
          </p>
        </section>
        <section
          className={`${styles.inview_section} ${styles.languages} ${
            languagesIsVisible ? styles.appear : ""
          }`}
          ref={languagesRef}
        >
          <p className={styles.section_title}>competențe lingvistice </p>
          <AbilityList abilities={languages} />
        </section>
        <section
          className={`${styles.inview_section} ${styles.orgs} ${
            orgsIsVisible ? styles.appear : ""
          }`}
          ref={orgsRef}
        >
          <p className={styles.section_title}>competențe organizatorice </p>
          <AbilityList abilities={orgs} />
        </section>
        <section
          className={`${styles.inview_section} ${styles.coms} ${
            comsIsVisible ? styles.appear : ""
          }`}
          ref={comsRef}
        >
          <p className={styles.section_title}>
            competențe de comunicare. interpersonale
          </p>
          <AbilityList abilities={coms} />
        </section>
        <section
          className={`${styles.inview_section} ${styles.profs} ${
            profsIsVisible ? styles.appear : ""
          }`}
          ref={profsRef}
        >
          <p className={styles.section_title}>dobândite la locul de muncă </p>
          <AbilityList abilities={profs} />
        </section>
      </main>
      <CustomParticles color={theme === "light" ? "#000" : "#fff"} />
    </div>
  );
}

export default MyAboutPage;
