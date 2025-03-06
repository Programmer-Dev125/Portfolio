import { useState } from "react";
import SidebarContent from "./card/sidebar-content";

export default function Sidebar({ active, onRoute }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClose(e) {
    e.stopPropagation();
    if (
      e.target.classList.contains("pos-fixed-sidebar") ||
      e.target.classList.contains("menu-icon")
    ) {
      setIsMenuOpen(false);
      document.body.classList.remove("no-scroll");
    }
  }
  return (
    <div
      onClick={handleMenuClose}
      className={`pos-fixed-sidebar w15  ${isMenuOpen ? "mob" : ""}`}
    >
      <div className={`sidebar mt30 mb30 ${isMenuOpen ? "mob" : ""}`}>
        <div className="content">
          <SidebarContent
            menuOpen={isMenuOpen}
            active={active}
            onRoute={onRoute}
            onMenuOpen={(val) => setIsMenuOpen(val)}
          />
        </div>
      </div>
    </div>
  );
}
