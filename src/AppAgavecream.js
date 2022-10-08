import React from "react";
import Navbar from "./components/Navbar";
import Section2 from "./components/ProductDetails/Section2.js"
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";
import AgaveCream from "./components/ProductDetails/AgaveCream";


function AppAgavecream() {
    return (
        <React.Fragment>
            <Navbar />
            <AgaveCream />
            <Section2 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppAgavecream; 