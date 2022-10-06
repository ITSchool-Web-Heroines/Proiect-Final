import React from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/CSRPage/Section1"
import Section2 from "./components/CSRPage/Section2"
import Section3 from "./components/CSRPage/Section3"
import Section4 from "./components/CSRPage/Section4"
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";


function AppCSR() {
    return (
        <React.Fragment>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppCSR; 