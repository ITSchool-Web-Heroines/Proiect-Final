import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "../components/StoryPage/Section1"
import Section2 from "../components/StoryPage/Section2"
import Section3 from "../components/BoutiquePage/Section1";
import Section4 from "../components/StoryPage/Section4";
import Section5 from "../components/Homepage/Section5";
import HorizontalBar from "../components/HorizontalBar";
import Footer from "../components/Footer.js";


function AppStory() {
    return (
        <React.Fragment>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppStory; 