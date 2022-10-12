import React from "react";
import Head from "next/head";
import useLocalStorage from "use-local-storage";
// STYLES
import styles from "./projects.module.scss";
// FUNCTIONS

// COMPONENTS
import NavBar from "../../components/NavBar";
import ThemeButton from "../../components/ThemeButton";

function MyPortfolioPage() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const projectsStyle = {
    insetBlockStart: "10rem",
    insetInlineStart: "1%",
  };
  return (
    <div className={styles.app} data-theme={theme}>
      <Head>
        <title>Proiecte</title>
      </Head>
      <NavBar />
      <h1 className={styles.title}>Proiecte</h1>
      <ThemeButton
        styles={projectsStyle}
        theme={theme}
        handleClick={changeTheme}
      />
    </div>
  );
}

export default MyPortfolioPage;
