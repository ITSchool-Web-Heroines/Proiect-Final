import React from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/Homepage/Section1"
import Section12 from "./components/Homepage/Section12"
import Section2 from "./components/Homepage/Section2"
import Section3 from "./components/Homepage/Section3"
import Section4 from "./components/Homepage/Section4"
import Section5 from "./components/Homepage/Section5"
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";


function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Section1 />
            <Section12 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default App; 