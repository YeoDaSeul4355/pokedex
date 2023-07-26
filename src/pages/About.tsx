import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/MyPic.png";
import { FaLink, FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Yeo Da Seul</h1>
      <h2 className="profile-text">Front-End Developer</h2>
      <h4 className="profile-text">
        Please visit our Github, Portfolio, and Blog via the links below!
      </h4>
      <div className="profile-links">
        <a href="https://github.com/YeoDaSeul4355">
          <FaGithub />
        </a>
        <a href="https://portfolio-jjul.web.app/">
          <FaLink />
        </a>
        <a href="https://duektmf34.tistory.com/">
          <SiTistory />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
