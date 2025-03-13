import { useEffect, useState } from "react";
import Contact from "./card/contact";
import Footer from "./card/footer";
import Home from "./card/home";
import Projects from "./card/projects";
import Sidebar from "./sidebar";
import ErrorPage from "./404/Errorpage";
import Spinner from "./card/spinner.jsx";

export default function Card() {
  const [isCurr, setIsCurr] = useState(window.location.pathname);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    function handleHistory() {
      setIsCurr(window.location.pathname);
    }
    window.addEventListener("popstate", handleHistory);
  }, [isCurr]);

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
    <>
      <div className="flex-box-row align-start isblock">
        <Sidebar onRoute={handleRoute} active={isCurr} />
        <div className="card">
          <div className="card-content w95 mauto">
            <div className="text-end mt30 mb30">
              <span>{new Date().toDateString()}</span>
            </div>
            <div className="">
              {isCurr === "/" && <Home />}
              {isCurr === "/contact" && (
                <Contact onSending={(val) => setIsSending(val)} />
              )}
              {isCurr === "/projects" && <Projects />}
              {!["/", "/contact", "/projects"].includes(isCurr) && (
                <ErrorPage
                  toSent={(val) => {
                    setIsCurr(val);
                    window.history.pushState({}, "", "/");
                  }}
                />
              )}
            </div>
            <div className="footer-box">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      {isSending && <Spinner />}
    </>
  );
}
