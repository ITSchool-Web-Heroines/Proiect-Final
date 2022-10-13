import React from "react";
import Navbar from "./components/Navbar";
import Section2 from "./components/ProductDetails/Section2.js"
import Section3 from "./components/ProductDetails/Section3.js"
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";
import Lipliner from "./components/ProductDetails/Lipliner";


function AppLipliner() {
    return (
        <React.Fragment>
            <Navbar />
            <Lipliner />
            <Section2 />
            <Section3 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppLipliner; 