import { useEffect, useState } from "react";
import Contact from "./card/contact";
import Footer from "./card/footer";
import Home from "./card/home";
import Projects from "./card/projects";
import Sidebar from "./sidebar";

export default function Card() {
  const [isCurr, setIsCurr] = useState(window.location.pathname);

  useEffect(() => {
    function handleHistory() {
      setIsCurr(window.location.pathname);
    }
    window.addEventListener("popstate", handleHistory);
    return () => window.removeEventListener("popstate", handleHistory);
  }, []);

  function handleRoute(e) {
    e.stopPropagation();
    if (e.target.tagName !== "LI") return;
    const route = e.target.dataset.route;
    const active = document.querySelector(".link-ul li.active");
    if (active) {
      active.classList.remove("active");
    }
    e.target.classList.add("active");
    setIsCurr(route);
    window.history.pushState({}, "", route);
  }

  return (
    <div className="flex-box-row align-start">
      <Sidebar onRoute={handleRoute} active={isCurr} />
      <div className="card">
        <div className="card-content">
          <div className="text-end mt30 mb30">
            <span>{new Date().toDateString()}</span>
          </div>
          <div className="screen-860 mt55 mb60">
            {isCurr === "/" && <Home />}
            {isCurr === "/contact" && <Contact />}
            {isCurr === "/projects" && <Projects />}
            {!["/", "/contact", "/projects"].includes(isCurr) && (
              <div>
                <h2>404 Page</h2>
              </div>
            )}
          </div>
          <div className="footer-box">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

function Link({ to }) {
  switch (true) {
    case to === "/":
      return <Home />;
    case to === "/contact":
      return <Contact />;
    case to === "/projects":
      return <Projects />;
    default:
      return (
        <div>
          <h2>404 Page</h2>
        </div>
      );
  }
}
