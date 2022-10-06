import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/ShopPage/Header";
import Section1 from "./components/ShopPage/Section1";
import Shop from "./components/ShopPage/Shop";
import Section2 from "./components/ShopPage/Section2";
import HorizontalBar from "./components/HorizontalBar";
import Footer from "./components/Footer.js";


function AppShop() {
    return (
        <React.Fragment>
            <Navbar />
            <Header />
            <Section1 />
            <Shop />
            <Section2 />
            <HorizontalBar />
            <Footer />
        </React.Fragment>
    );
}
export default AppShop; 