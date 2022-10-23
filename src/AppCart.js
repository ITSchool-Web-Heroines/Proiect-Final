import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";


function AppCart() {
    return (
        <React.Fragment>
            <Navbar />
            <Cart />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppCart; 