import React from "react";
import Fade from "react-reveal/Fade";
import data from "../data";

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              <div style={{ margin: "30px 0" }}></div>
            </p>
            <a
              href={
                data.resumeLink
                  ? data.resumeLink
                  : "https://www.overleaf.com/project/5faf5e6fe956f46d635f8eb4"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn resume-btn"
            >
              MY RESUME
            </a>
          </div>
          <div className="image-wrapper">
            <img src={data.profilePicture} alt="about"></img>
            {/* <img
              src="https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="about"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
