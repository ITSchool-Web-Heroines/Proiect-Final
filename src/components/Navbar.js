import { useRef } from "react";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";
import { useRef } from "react";
import "../styles/navbar.scss"

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3><a class="nav-item" href="index.html">The Lippie Factory</a></h3>
            <nav ref={navRef}>
                <a class="nav-item" href="story.html">Our story</a>
                <a class="nav-item" href="shop.html">Shop</a>
                <a class="nav-item" href="csr.html">Our clean difference</a>
                <a class="nav-item" href="boutique.html">The boutique</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <div class="buttons">
                <button className="registerlogin">Register / Log in</button>
                <button className="shoppingbag" href="../cart.html">
                    <FaShoppingBag size="1.5em"/>
                </button>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>

            </div>
        </header>
    );
}

export default Navbar;