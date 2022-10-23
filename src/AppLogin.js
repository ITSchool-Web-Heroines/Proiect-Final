import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";
import { AuthProvider } from "./context/AuthProvider";


function AppLogin() {
    return (
        <React.Fragment>
            <Navbar />
            <AuthProvider/>
            <Login />
            <HorizontalBar />
            <AuthProvider />
            <Footer />
        </React.Fragment>
    );
}
export default AppLogin;