import { useState } from "react";
import {
  web,
  html,
  js,
  css,
  react,
  node,
  next,
  expressOne,
  expressTwo,
} from "./svg/paths";

export default function Map({ onHover }) {
  const [text, setText] = useState("");

  function handleHover(e) {
    e.stopPropagation();
    if (e.target.tagName === "svg" || e.target.tagName === "path") {
      const isText = e.target.dataset.text;
      setText(isText);
      onHover(isText);
      return;
    }
  }

  function handleHoverClose(e) {
    e.stopPropagation();
    setText("");
    onHover("");
  }

  return (
    <>
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={web} fill="#41644A" />
        </svg>
      </div>
      <div
        onMouseOut={handleHoverClose}
        onMouseOver={handleHover}
        className="flex-box-col sp-gap align-center"
      >
        <div className={`icon-relative ${text === "html" ? "active" : ""}`}>
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="29"
              height="37"
              data-text="html"
              viewBox="0 0 29 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={html} data-text="html" fill="#41644A" />
            </svg>
          </a>
          <span className="isAbsolute-icon">HTML</span>
        </div>
        <div
          className={`icon-relative ${text === "javascript" ? "active" : ""}`}
        >
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="30"
              height="30"
              data-text="javascript"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={js} data-text="javascript" fill="#41644A" />
            </svg>
          </a>
          <span className="isAbsolute-icon">Javascript</span>
        </div>
        <div className={`icon-relative ${text === "css" ? "active" : ""}`}>
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="30"
              height="34"
              viewBox="0 0 30 34"
              data-text="css"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={css} data-text="css" fill="#41644A" />
            </svg>
          </a>
          <span className="isAbsolute-icon">CSS</span>
        </div>
      </div>
      <div
        onMouseOver={handleHover}
        onMouseOut={handleHoverClose}
        className="flex-box-col sp-gap align-center"
      >
        <div className={`icon-relative ${text === "react" ? "active" : ""}`}>
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="38"
              height="34"
              viewBox="0 0 38 34"
              data-text="react"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={react}
                data-text="react"
                fill="#41644A"
              />
            </svg>
          </a>
          <span className="isAbsolute-icon">React</span>
        </div>
        <div className={`icon-relative ${text === "node" ? "active" : ""}`}>
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              data-text="node"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={node} data-text="node" fill="#41644A" />
            </svg>
          </a>
          <span className="isAbsolute-icon">NodeJs</span>
        </div>
      </div>
      <div
        onMouseOver={handleHover}
        onMouseOut={handleHoverClose}
        className="flex-box-col sp-gap align-center"
      >
        <div className={`icon-relative ${text === "next" ? "active" : ""}`}>
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="40"
              height="40"
              data-text="next"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={next} data-text="next" fill="#41644A" />
            </svg>
          </a>
          <span className="isAbsolute-icon">NextJs</span>
        </div>
        <div className={`icon-relative ${text === "express" ? "active" : ""}`}>
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              data-text="express"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={expressOne} data-text="express" fill="#41644A" />
              <path d={expressTwo} data-text="express" fill="white" />
            </svg>
          </a>
          <span className="isAbsolute-icon">Express</span>
        </div>
      </div>
      <div
        onMouseOver={handleHover}
        onMouseOut={handleHoverClose}
        className="flex-box-col sp-gap align-center"
      >
        <div className={`icon-relative ${text === "mongo" ? "active" : ""}`}>
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="40"
              data-text="mongo"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_65_102)">
                <path
                  data-text="mongo"
                  d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z"
                  fill="#41644A"
                />
                <path
                  data-text="mongo"
                  d="M26.7458 16.8111C25.0994 9.54844 21.6681 7.615 20.7928 6.24828C20.4316 5.64629 20.1119 5.02042 19.8358 4.375C19.7895 5.02031 19.7045 5.42656 19.1561 5.91594C18.055 6.89766 13.3784 10.7086 12.9848 18.9606C12.6181 26.6547 18.6411 31.3989 19.4367 31.8894C20.0486 32.1905 20.7937 31.8958 21.1573 31.6194C24.0606 29.6269 28.0275 24.3147 26.7489 16.8111"
                  fill="#10AA50"
                />
                <path
                  data-text="mongo"
                  d="M20.0856 27.7924C19.934 29.6967 19.8254 30.8033 19.4404 31.8916C19.4404 31.8916 19.6931 33.7045 19.8706 35.625H20.4986C20.6485 34.2726 20.8773 32.9301 21.1836 31.6044C20.3706 31.2044 20.1168 29.4635 20.0856 27.7924Z"
                  fill="#B8C4C2"
                />
                <path
                  data-text="mongo"
                  d="M21.1823 31.6055C20.3608 31.226 20.1231 29.4483 20.0866 27.7924C20.2896 25.0606 20.3489 22.3201 20.2641 19.5822C20.2209 18.1456 20.2844 6.27626 19.9102 4.53845C20.166 5.12711 20.461 5.69797 20.7931 6.2472C21.6684 7.61501 25.1008 9.54845 26.7461 16.8111C28.0278 24.3019 24.0825 29.6 21.1823 31.6055Z"
                  fill="#12924F"
                />
              </g>
              <defs data-text="mongo">
                <clipPath id="clip0_65_102">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <span className="isAbsolute-icon">MongoDb</span>
        </div>
        <div className={`icon-relative ${text === "postgres" ? "active" : ""}`}>
          <a href="https://github.com/Programmer-Dev125" target="_blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              data-text="postgres"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_65_108)">
                <path
                  data-text="postgres"
                  d="M30.625 -0.00012207H9.375C4.19733 -0.00012207 0 4.19721 0 9.37488V30.6249C0 35.8025 4.19733 39.9999 9.375 39.9999H30.625C35.8027 39.9999 40 35.8025 40 30.6249V9.37488C40 4.19721 35.8027 -0.00012207 30.625 -0.00012207Z"
                  fill="#41644A"
                />
                <path
                  data-text="postgres"
                  d="M31.794 23.2324C28.619 23.8871 28.3884 22.8116 28.3884 22.8116C31.7424 17.8348 33.1454 11.5176 31.9346 9.9718C28.6345 5.75305 22.9204 7.7493 22.8248 7.80101L22.794 7.80648C22.0961 7.66642 21.3866 7.59245 20.6748 7.58555C19.2377 7.56367 18.1479 7.96242 17.3196 8.58976C17.3196 8.58976 7.1265 4.39086 7.60103 13.871C7.70212 15.888 10.4906 29.142 13.8193 25.132C15.0454 23.6576 16.2209 22.4193 16.2209 22.4193C16.8032 22.8071 17.5031 23.0049 18.2359 22.9335L18.2929 22.8852C18.2761 23.0751 18.2839 23.2664 18.316 23.4543C17.4592 24.4123 17.7118 24.5804 15.9979 24.933C14.2643 25.2901 15.2838 25.9262 15.9474 26.0932C16.7538 26.2954 18.6193 26.581 19.8806 24.8166L19.8299 25.0176C20.1662 25.2868 20.4012 26.7677 20.3617 28.1102C20.3221 29.4529 20.2957 30.3735 20.5595 31.0941C20.8232 31.8148 21.0868 33.4343 23.339 32.9618C25.221 32.5587 26.1954 31.5116 26.3327 29.7693C26.4295 28.5299 26.647 28.7123 26.6624 27.6049L26.8382 27.0798C27.0392 25.3988 26.871 24.8573 28.0301 25.1099L28.3124 25.1352C29.1662 25.1737 30.2835 24.9979 30.9382 24.6935C32.3499 24.0388 33.1871 22.9445 31.7951 23.2324H31.794Z"
                  fill="#12924F"
                />
                <path
                  data-text="postgres"
                  d="M22.8239 7.59305C22.4723 7.7029 28.4973 5.3904 31.9228 9.76618C33.1314 11.312 31.7306 17.6291 28.3764 22.6059M20.0158 24.0287C19.9279 27.1554 20.0378 30.304 20.3433 31.0599C20.6486 31.8157 21.3045 33.3121 23.5578 32.8309C25.4398 32.4277 26.1253 31.6465 26.422 29.9227L27.1173 24.411L20.0158 24.0287ZM17.3154 8.35446C17.3154 8.35446 7.1156 4.18415 7.59029 13.664C7.69138 15.681 10.4797 28.9349 13.8086 24.9249C15.0236 23.4604 16.1223 22.3146 16.1223 22.3146L17.3154 8.35446Z"
                  stroke="white"
                  strokeWidth="0.314625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  data-text="postgres"
                  d="M28.3769 22.6037C28.3769 22.6037 28.5968 23.6804 31.7827 23.0234C33.1748 22.7356 32.3365 23.8298 30.9258 24.4846C29.7679 25.0229 27.1707 25.1602 27.1279 24.4187C27.018 22.5015 28.4946 23.0838 28.388 22.6037C28.2913 22.1709 27.6299 21.7468 27.1949 20.6877C26.8137 19.7648 21.9654 12.6787 28.5396 13.7299C28.7813 13.6806 26.8257 7.4679 20.6733 7.37774C14.521 7.28759 14.7155 14.9418 14.7155 14.9418"
                  stroke="white"
                  strokeWidth="0.314625"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
                <path
                  data-text="postgres"
                  d="M18.2938 23.2607C17.4369 24.2187 17.6896 24.3868 15.9759 24.7395C14.2421 25.0965 15.2618 25.7326 15.9252 25.8996C16.7316 26.1018 18.5971 26.3874 19.8584 24.6218C20.2429 24.0835 19.8562 23.2267 19.3288 23.0092C19.074 22.9037 18.7334 22.7718 18.2962 23.2618L18.2938 23.2607Z"
                  stroke="white"
                  strokeWidth="0.314625"
                  strokeLinejoin="round"
                />
                <path
                  data-text="postgres"
                  d="M18.2376 23.2441C18.1496 22.6805 18.4221 22.0114 18.7132 21.227C19.1506 20.0516 20.1592 18.876 19.3527 15.1439C18.7518 12.3642 14.7165 14.5649 14.7165 14.9417C14.7165 15.3186 14.8988 16.8535 14.6506 18.6386C14.3243 20.97 16.1337 22.941 18.2167 22.7399"
                  stroke="white"
                  strokeWidth="0.314625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  data-text="postgres"
                  d="M17.2773 14.8858C17.2586 15.0142 17.5134 15.3581 17.8442 15.4042C18.1748 15.4505 18.4572 15.1824 18.4759 15.0527C18.4945 14.923 18.2397 14.7824 17.9091 14.7363C17.5784 14.6902 17.2937 14.7583 17.2773 14.8858Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.105"
                />
                <path
                  data-text="postgres"
                  d="M27.3458 14.6233C27.3633 14.7518 27.1096 15.0955 26.779 15.1418C26.4482 15.1879 26.1637 14.9199 26.1473 14.7902C26.1307 14.6605 26.3835 14.5199 26.7141 14.4738C27.0448 14.4277 27.3293 14.4958 27.3458 14.6233Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.0523125"
                />
                <path
                  data-text="postgres"
                  d="M28.5279 13.7322C28.5827 14.743 28.3102 15.4295 28.275 16.5051C28.2246 18.0673 29.02 19.8559 27.8213 21.6467"
                  stroke="white"
                  strokeWidth="0.314625"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_65_108">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <span className="isAbsolute-icon">PostgreSql</span>
        </div>
      </div>
    </>
  );
}
