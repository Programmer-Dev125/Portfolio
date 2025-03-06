import { useState } from "react";
import Content from "./content/content.jsx";
import { menuIcon } from "./svg/paths.jsx";
export default function SidebarContent({
  menuOpen,
  active,
  onRoute,
  onMenuOpen,
}) {
  function handleMenu(e) {
    e.stopPropagation();
    if (menuOpen) {
      onMenuOpen(false);
      document.body.classList.remove("no-scroll");
    } else {
      onMenuOpen(true);
      document.body.classList.add("no-scroll");
    }
  }

  return (
    <div>
      <ul>
        <li>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className={`menu-icon ${menuOpen ? "active" : ""}`}
            onClick={handleMenu}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={menuIcon}
              fill="#F1F0E9"
            />
          </svg>
        </li>
      </ul>
      <ul onClick={onRoute}>
        <li
          data-route="/"
          style={{ color: active === "/" ? "#f1f0e9" : "#000000" }}
        >
          Home
        </li>
        <li
          data-route="/contact"
          style={{ color: active === "/contact" ? "#f1f0e9" : "#000000" }}
        >
          Contact
        </li>
        <li
          data-route="/projects"
          style={{ color: active === "/projects" ? "#f1f0e9" : "#000000" }}
        >
          Projects
        </li>
      </ul>
      <ul className="below-icon">
        <Content />
      </ul>
    </div>
  );
}
