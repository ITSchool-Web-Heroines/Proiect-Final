import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu-item logo">
        <img alt="logo TWG"
             src="images/twg.png"
             width="100px"
             height="75px"/>
       </NavLink>

      <NavLink to="/" className="menu-item">
        <span className="material-symbols-outlined"> home
        </span>Acasă
       </NavLink>

      <NavLink to="about" className="menu-item">
        <span className="material-symbols-outlined">hive
        </span>Despre noi
       </NavLink>

      <NavLink to="offers" className="menu-item">
        <span className="material-symbols-outlined">list_alt
        </span>Servicii
       </NavLink>

      <NavLink to="portfolio" className="menu-item">
        <span className="material-symbols-outlined">palette
        </span>Portofoliu
       </NavLink>

      <NavLink to="contact" className="menu-item">
        <span className="material-symbols-outlined">dialpad
        </span>Contact
       </NavLink>
    </nav>
  );
}

export default Header;
