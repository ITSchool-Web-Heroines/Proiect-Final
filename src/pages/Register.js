import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import HorizontalBar from "../components/HorizontalBar";
import Footer from "../components/Footer.js";


function AppRegister() {
    return (
        <React.Fragment>
            <Navbar />
            <Register />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppRegister;