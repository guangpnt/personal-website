import React from "react";
import "./Skills.css";
import LetterData from "./LetterData";
import AnimationLetter from "../AnimationLetter";

export default function Skills() {
  return (
    <div className="skills">
      {LetterData.slice(0, 6).map((value, index) => {
        return (
          <span className={value.cName} key={index}>
            <AnimationLetter letter={value.letter} />
          </span>
        );
      })}
      &nbsp;&nbsp;
      {LetterData.slice(6, 7).map((value, index) => {
        return (
          <span className={value.cName} key={index}>
            <AnimationLetter letter={value.letter} />
          </span>
        );
      })}
      &nbsp;&nbsp;
      <br className="br" />
      {LetterData.slice(7, 17).map((value, index) => {
        return (
          <span className={value.cName} key={index}>
            <AnimationLetter letter={value.letter} />
          </span>
        );
      })}
      <div className="skills-content">
        <div className="skills-item">
          <div className="skills-item-first">HTML</div>
          <div className="skills-item-third">JavaScript</div>
          <div className="skills-item-fifth">Node</div>
        </div>
        <div className="skills-item">
          <div className="skills-item-second">CSS</div>
          <div className="skills-item-fourth">React</div>
          <div className="skills-item-sixth">BootStrap</div>
        </div>
      </div>
      <div className="experience-content">
        <div className="static-web">
          <div className="web-title">Static web</div>
          <div className="web-item">
            <div>Create static web using HTML/CSS/JS</div>
            <span>- Github :</span>
            <a href="https://github.com/guangpnt" className="emphasis">
              {" "}
              https://github.com/guangpnt/G-introduce{" "}
            </a>
          </div>
          <div className="web-item">
            <div>Create static web with React</div>
            <span>- Github :</span>
            <a
              href="https://github.com/guangpnt/g-react-start"
              className="emphasis"
            >
              {" "}
              https://github.com/guangpnt/g-react-start
            </a>
          </div>
        </div>
        <div className="web-app">
          <div className="web-title">Web app</div>
          <div className="web-item">
            <div>Create basic web board with Node</div>
            <div>- Authenticate with JWT and Google-OAuth</div>
            <div>- Store data in MongoDB</div>
            <div>- Add, Comment, Delete post</div>
            <span>- Github :</span>
            <a
              href="https://github.com/guangpnt/G-web-board"
              className="emphasis"
            >
              {" "}
              https://github.com/guangpnt/G-web-board{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
