import { useState } from "react";
import Content from "./content/content.jsx";
export default function SidebarContent({ active, onRoute }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleMenu(e) {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.querySelector(".sidebar ul:nth-child(1)").style.width = "100%";
      document.querySelector(".sidebar ul:nth-child(2)").style.display = "none";
      document.querySelector(".sidebar ul:nth-child(3)").style.display = "none";
    } else {
      document.querySelector(".sidebar ul:nth-child(1)").style.width =
        "fit-content";
      document.querySelector(".sidebar ul:nth-child(2)").style.display =
        "block";
      document.querySelector(".sidebar ul:nth-child(3)").style.display =
        "block";
    }
  }

  return (
    <div>
      <ul>
        <li>
          <svg
            width="20"
            height="18"
            onClick={handleMenu}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="20" y2="1" stroke="#F1F0E9" strokeWidth="2" />
            <line y1="9" x2="20" y2="9" stroke="#F1F0E9" strokeWidth="2" />
            <line y1="17" x2="20" y2="17" stroke="#F1F0E9" strokeWidth="2" />
          </svg>
        </li>
      </ul>
      <ul onClick={onRoute}>
        <li data-route="/" style={{ color: active === "/" && "#f1f0e9" }}>
          Home
        </li>
        <li
          data-route="/contact"
          style={{ color: active === "/contact" && "#f1f0e9" }}
        >
          Contact
        </li>
        <li
          data-route="/projects"
          style={{ color: active === "/projects" && "#f1f0e9" }}
        >
          Projects
        </li>
      </ul>
      <ul>
        <Content />
      </ul>
    </div>
  );
}
