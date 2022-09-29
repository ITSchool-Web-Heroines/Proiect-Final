import BurgerMenu from "./Burger";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="logo">
        Logo
      </a>
      <BurgerMenu />

      <ul className="menu-btn">
        <li>
          <a href="#" className="nav-item">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
