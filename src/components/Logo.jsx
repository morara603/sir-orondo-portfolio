import { NavLink } from "react-router-dom";

function Logo({ footer = false }) {
  return (
    <NavLink to="/" className={`brand-logo ${footer ? "brand-logo-footer" : ""}`} aria-label="Abednego Morara home">
      <span className="brand-logo-glow">
        <img src="/images/abednego-logo.png" alt="Abednego Morara Engineering Works" />
      </span>
      <span className="brand-name">Abednego Morara</span>
    </NavLink>
  );
}
export default Logo;
