import Image from "next/future/image";
import Head from "next/head";

import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

import React, { useEffect, useState } from "react";

import signature from "../../images/home/gif.gif";

import style from "./LoadingWrap.module.scss";

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
    <div className={style.loading}>
      {loading ? (
        <div>
          <Head>
            <title>Portofoliu</title>
          </Head>
          <Image className={style.cube} src={signature} alt="CubeAnimation" />
        </div>
      ) : (
        <div className={theme.isDark ? "app dark" : "app"}>
          {props.children}
        </div>
      )}
    </div>
  );
}
