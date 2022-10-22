import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NavLinks = [
  {
    pathname: "/",
    label: "Home"
  },
  {
    pathname: "/desprenoi",
    label: "Despre Noi"
  },

  {
    pathname: "/servicii",
    label: "Servicii"
  },

  {
    pathname: "/portofoliu",
    label: "Portofoliu"
  },

  {
    pathname: "/testimoniale",
    label: "Testimoniale"
  },

  {
    pathname: "/contact",
    label: "Contact"
  },

  
  {
    pathname: "/blog",
    label: "Blog"
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
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
          
            {NavLinks.map((link) => (
              <li key={link.pathname} className={router.pathname == link.pathname ? "active" : ""}>
                <Link href={link.pathname}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
