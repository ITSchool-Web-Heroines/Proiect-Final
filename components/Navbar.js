
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from 'next/link'

const NavLinks = [
  {
    pathname: "/",
    label: "Home",
  },
  {
    pathname: "/desprenoi",
    label: "Despre Noi",
  },

  {
    pathname: "/servicii",
    label: "Servicii",
  },

  {
    pathname: "/portofoliu",
    label: "Portofoliu",
  },

  {
    pathname: "/testimoniale",
    label: "Testimoniale",
  },

  {
    pathname: "/contact",
    label: "Contact",
  },

  {
    pathname: "/blog",
    label: "Blog",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav>
        <div className="main-navbar">
          <div className="brand-title">Motion Agency</div>

          <div className={`navbar-links`}>
            <ul>
              {NavLinks.map((link) => (
                <li
                  key={link.pathname}
                  className={router.pathname == link.pathname ? "active" : ""}
                >
                  <Link href={link.pathname}>
                    <a>{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={() => setToggle(!toggle)} className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <div className={`sm-navbar ${toggle ? "active" : ""}`}>
          <ul>
            {NavLinks.map((link) => (
              <li
                key={link.pathname}
                className={router.pathname === link.pathname ? "active" : ""}
              >
                <Link href={link.pathname}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
