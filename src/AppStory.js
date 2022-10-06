import React from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/StoryPage/Section1"
import Section2 from "./components/StoryPage/Section2"
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";


function AppStory() {
    return (
        <React.Fragment>
            <Navbar />
            <Section1 />
            <Section2 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppStory; 