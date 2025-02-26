import { map } from "./map";
export default function Home() {
  return (
    <section className="homepage">
      <h1 className="name-title">Hi My name is Abdul Ahad</h1>
      <span className="bio-text">
        I'm a passionate MERN stack developer who specializes in building fast,
        scalable, and modern web applications. I love working with MongoDB,
        Express.js, React, and Node.js to create full-stack solutions that solve
        real-world problems.
      </span>
      <fieldset className="skill-section mt50">
        <legend className="roadmap-title">Skills</legend>
        <div className="flex-box-row sp-around align-center">
          <div className="svg-map">{map}</div>
          <div className="second-div">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React JS</li>
              <li>Next JS</li>
              <li>Node JS</li>
              <li>Express</li>
              <li>MongoDb</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
