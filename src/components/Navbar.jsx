import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["About", "/about"], ["Skills", "/skills"], ["Projects", "/projects"],
  ["Services", "/services"], ["Contact", "/contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={`navbar ${menuOpen ? "menu-active" : ""}`}>
      <Logo />
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([label, path]) => (
          <NavLink key={path} to={path} className={({isActive}) => `nav-link-enclosure ${isActive ? "active" : ""}`}>{label}</NavLink>
        ))}
      </nav>
      <div className="nav-actions"><ThemeToggle />
      <NavLink to="/booking" className="nav-button" onClick={closeMenu}>Start a Project <FaArrowRight /></NavLink></div>
      <button className="menu-toggle" onClick={() => setMenuOpen(v=>!v)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <FaTimes /> : <FaBars />}</button>
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {links.map(([label,path])=><NavLink key={path} to={path} className={({isActive})=>`nav-link-enclosure ${isActive?"active":""}`} onClick={closeMenu}>{label}</NavLink>)}
        <NavLink to="/booking" className="mobile-booking" onClick={closeMenu}>Start a Project <FaArrowRight /></NavLink>
      </div>
    </header>
  );
}
export default Navbar;
