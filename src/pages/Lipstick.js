import React from "react";
import Navbar from "../components/Navbar";
import Lipstick from "../components/ProductDetails/Lipstick.js"
import Section2 from "../components/ProductDetails/Section2"
import Section3 from "../components/ProductDetails/Section3";
import HorizontalBar from "../components/HorizontalBar";
import Footer from "../components/Footer.js";


function AppLipstick() {
    return (
        <React.Fragment>
            <Navbar />
            <Lipstick />
            <Section2 />
            <Section3 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppLipstick; 