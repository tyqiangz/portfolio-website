import React from "react";
import data from "../data";

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid" style={{border: "1px solid black"}}>
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.name}</p>
                {/* <p>{skill.para}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
