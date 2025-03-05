import { useState } from "react";
import Map from "./map";
export default function Home() {
  const [textActive, setTextActive] = useState("");

  return (
    <section className="homepage">
      <div>
        <p className="page-title">Hi My name is Abdul Ahad</p>
        <p className="page-text mt30">
          I'm a passionate MERN stack developer who specializes in building
          fast, scalable, and modern web applications. I love working with
          MongoDB, Express.js, React, and Node.js to create full-stack solutions
          that solve real-world problems.
        </p>
      </div>
      <div className="skill-section">
        <p className="skill-title">Skills</p>
        <div className="flex-box-row sp-between align-center">
          <div className="flex-box-row w80 sp-around align-center">
            <Map onHover={(text) => setTextActive(text)} />
          </div>
          <div className="skill-section-list w18 pl25">
            <ul>
              <li className={`${textActive === "html" ? "isActiveText" : ""}`}>
                HTML
              </li>
              <li
                className={`${
                  textActive === "javascript" ? "isActiveText" : ""
                }`}
              >
                Javascript
              </li>
              <li className={`${textActive === "css" ? "isActiveText" : ""}`}>
                CSS
              </li>
              <li className={`${textActive === "react" ? "isActiveText" : ""}`}>
                React Js
              </li>
              <li className={`${textActive === "node" ? "isActiveText" : ""}`}>
                Node Js
              </li>
              <li className={`${textActive === "next" ? "isActiveText" : ""}`}>
                Next Js
              </li>
              <li
                className={`${textActive === "express" ? "isActiveText" : ""}`}
              >
                Express
              </li>
              <li className={`${textActive === "mongo" ? "isActiveText" : ""}`}>
                MongoDb
              </li>
              <li
                className={`${textActive === "postgres" ? "isActiveText" : ""}`}
              >
                PostgreSQL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
