import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="brand-title">Motion Agency</div>
        <a
          onClick={() => setToggle(!toggle)}
          href="#"
          className="toggle-button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={`navbar-links ${toggle ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/desprenoi">
                <a>Despre Noi</a>
              </Link>
            </li>
            <li>
              <Link href="/servicii">
                <a>Servicii</a>
              </Link>
            </li>
            <li>
              <Link href="/portofoliu">
                <a>Portofoliu</a>
              </Link>
            </li>
            <li>
              <Link href="/testimoniale">
                <a>Testimoniale</a>
              </Link>
            </li>
            <li>
              <Link href="contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
