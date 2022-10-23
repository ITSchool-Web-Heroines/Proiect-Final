import React from "react";
import Navbar from "../components/Navbar";
import Section2 from "../components/ProductDetails/Section2.js"
import Section3 from "../components/ProductDetails/Section3.js"
import HorizontalBar from "../components/HorizontalBar";
import Footer from "../components/Footer.js";
import AgaveCream from "../components/ProductDetails/AgaveCream";


function AppAgavecream() {
    return (
        <React.Fragment>
            <Navbar />
            <AgaveCream />
            <Section2 />
            <Section3 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppAgavecream; 