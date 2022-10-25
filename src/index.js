import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Footer, Header, About, Contact,
  Home, Offers, Portfolio
} from "./pages";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Offers" element={<Offers />} />
      <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
    <Footer />
  </Router>
)