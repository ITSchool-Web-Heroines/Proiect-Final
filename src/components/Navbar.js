import { useRef } from "react";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";
import { useRef } from "react";
import "../styles/navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3><NavLink class="nav-item" to="/">The Lippie Factory</NavLink></h3>
            <nav ref={navRef}>
                <NavLink class="nav-item" to="/story">Our story</NavLink>
                <NavLink class="nav-item" to="/shop">Shop</NavLink>
                <NavLink class="nav-item" to="/csr">Our clean difference</NavLink>
                <NavLink class="nav-item" to="/boutique">The boutique</NavLink>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <div class="buttons">
                <button className="registerlogin"><NavLink to="/register">Register / Log in</NavLink></button>
                <button className="shoppingbag"><NavLink to="/cart"><FaShoppingBag size="1.5em"/></NavLink></button>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>

            </div>
        </header>
    );
}

export default Navbar;