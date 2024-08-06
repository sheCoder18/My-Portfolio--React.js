import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="../../../assests/Anamika Profile.jpeg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hello, I'm Anamika Tiwari. I'm currently pursuing my B.Tech degree. As an upcoming working professional
              I'm proficient in MERN stack and algorithms. I have made several projects in this regard. I aspire to make
            career in the field of emerging technology. With a passion for excellence I aim to set new quality standards in my workspace.
             Outside of work, I enjoy doing workout, dancing, singing and doing social work.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;