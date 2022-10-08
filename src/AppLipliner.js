import React from "react";
import Navbar from "./components/Navbar";
import Section2 from "./components/ProductDetails/Section2.js"
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";
import Lipliner from "./components/ProductDetails/Lipliner";


function AppLipliner() {
    return (
        <React.Fragment>
            <Navbar />
            <Lipliner />
            <Section2 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppLipliner; 