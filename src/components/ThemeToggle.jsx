import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button className="theme-toggle" onClick={() => setDark((value) => !value)} aria-label="Toggle dark mode">
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
