import Head from "next/head";

import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

import React, { useEffect, useState } from "react";

import styles from "./LoadingWrap.module.scss";

export default function LoadingWrap(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const theme = useContext(ThemeContext);

  return (
    <div className={`${styles.loading}  ${theme.isDark ? styles.dark : ""}`}>
      {loading ? (
        <div className={theme.isDark ? "app dark" : "app"}>
          <Head>
            <title>Portofoliu</title>
          </Head>
          <svg className={styles.svg} viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              {props.title}
            </text>
          </svg>
        </div>
      ) : (
        <div className={theme.isDark ? "app dark" : "app"}>
          {props.children}
        </div>
      )}
    </div>
  );
}
