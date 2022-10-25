import React, { useEffect } from "react";
import Head from "next/head";
import { useState } from "react";

// CONTEXT
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

// STYLES
import styles from "./contact.module.scss";

// COMPONENTS
import NavBar from "../../components/NavBar/NavBar";
import CustomParticles from "../../components/CustomParticles/CustomParticles";
import LoadingWrap from "../../components/LoadingWrap/LoadingWrap";
import FooterAndBackTop from "../../components/Footer/FooterAndBackTop";
import Signature from "../../components/Signature/Signature";

function MyContactPage() {
  const theme = useContext(ThemeContext);

  return (
    <LoadingWrap title={"Contact"}>
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar />
      <main></main>
      <FooterAndBackTop />
      <CustomParticles color={theme.isDark ? "#fff" : "#000"} />
    </LoadingWrap>
  );
}
export default MyContactPage;
