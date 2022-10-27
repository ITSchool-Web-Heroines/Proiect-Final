import React from "react";
import Navbar from "../components/Navbar";
import GiftCards from "../components/ProductDetails/GiftCards";
import HorizontalBar from "../components/HorizontalBar";
import Footer from "../components/Footer.js";



function AppGiftCards() {
    return (
        <React.Fragment>
            <Navbar />
            <GiftCards />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppGiftCards; 