import React from "react";
import Navbar from "./components/Navbar";
import JobApplication from "./components/JobApplication";
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";



function AppJobApplication() {
    return (
        <React.Fragment>
            <Navbar />
            <JobApplication />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppJobApplication; 