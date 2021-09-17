import React from "react";
import Fade from "react-reveal/Fade";
import data from "../data";

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <form onSubmit={populateAnswer}>
            <input
              className="qa-input"
              autocomplete="off"
              type="text"
              onSubmit={populateAnswer}
              placeholder="What is his current job?"
            />
          </form>
          <p className="qa-output"></p>
          <Fade bottom>
            <a
              href={
                data.contactLink
                  ? data.contactLink
                  : "https://www.linkedin.com/in/yong-qiang-tay/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

const populateAnswer = () => {
  var question = document.getElementsByClassName("qa-input")[0].value;
  var answer = document.getElementsByClassName("qa-output")[0].value;
  answer = question;
  return false;
};

export default Header;
