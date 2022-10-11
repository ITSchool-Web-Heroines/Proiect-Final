import React from "react";
import Navbar from "./components/Navbar.js"
import Carousel from "./components/BoutiquePage/Carousel";
import Section1 from "./components/BoutiquePage/Section1";
import Section2 from "./components/BoutiquePage/Section2"
import Section3 from "./components/BoutiquePage/Section3"
import Section4 from "./components/BoutiquePage/Section4.js";
import HorizontalBar from "./components/HorizontalBar.js";
import Footer from "./components/Footer.js";


function AppBoutique() {
    return (
        <React.Fragment>
            <Navbar />
            <Carousel />
            <Section4 />
            <Section1 />
            <Section2 />
            <Section3 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppBoutique; 