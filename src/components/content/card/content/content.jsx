import { devTo, github, linkedin, upwork } from "../svg/paths";

export default function Content() {
  return (
    <>
      <li>
        <a
          href="https://www.linkedin.com/in/abdul-ahad-dar-0561ab34b/"
          target="_blank"
        >
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={linkedin} fill="#F1F0E9" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://github.com/Programmer-Dev125" target="_blank">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={github} fill="#F1F0E9" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://dev.to/programmerdev125" target="_blank">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={devTo} fill="#F1F0E9" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.upwork.com/" target="_blank">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={upwork} fill="#F1F0E9" />
          </svg>
        </a>
      </li>
    </>
  );
}
