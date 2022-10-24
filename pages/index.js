import Head from "next/head";
import Image from "next/future/image";

// CONTEXT
import { ThemeContext } from "../context/theme";
import { useContext } from "react";

// COMPONENTS
import NavLink from "../components/NavLink";
import ThemeButton from "../components/ThemeButton/ThemeButton";
import LoadingWrap from "../components/LoadingWrap/LoadingWrap";

// STYLES
import styles from "./index.module.scss";

// IMGS
import WLogo from "../images/home/sa.png";
import BLogo from "../images/home/sn.png";

export default function Home() {
  // THEME BUTTON

  const theme = useContext(ThemeContext);
  return (
    <LoadingWrap title={"arhitectura.arta"}>
      <Head>
        <title>Portofoliu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.banner_box}>
        <div className={styles.banner_content}>
          <nav>
            <NavLink href="/about" className={styles.about}>
              detalii
            </NavLink>
            <NavLink href="/projects" className={styles.projects}>
              proiecte
            </NavLink>
          </nav>
          <span className={styles.line}>reper de artă</span>
          <span className={styles.concept}>concept</span>
          <div className={styles.details_background}>
            <ThemeButton
              home={true}
              theme={theme.isDark}
              handleClick={theme.setTheme}
            />
          </div>
          <Image
            src={theme.isDark ? WLogo : BLogo}
            className={styles.details_logo}
            alt="Logo"
          />
          <div className={styles.details_text}>
            <p className={styles.title}>maria mădălina</p>
            <p className={styles.sub_title}>arhitect</p>
          </div>
        </div>
      </header>
    </LoadingWrap>
  );
}
