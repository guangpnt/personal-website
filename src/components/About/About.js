import React from "react";
import "./About.css";
import AnimationLetter from "../AnimationLetter";
import LetterData from "./LetterData";

export default function About() {
  return (
    <div className="about">
      {LetterData.slice(0, 5).map((value, index) => {
        return (
          <span className={value.cName} key={index}>
            <AnimationLetter letter={value.letter} />
          </span>
        );
      })}
      &nbsp;&nbsp;
      {LetterData.slice(5, 7).map((value, index) => {
        return (
          <span className={value.cName} key={index}>
            <AnimationLetter letter={value.letter} />
          </span>
        );
      })}
      <div className="about-profile">
        <div className="profile-first">Name : Panntorn Boonjam</div>
        <div className="profile-second">Nickname : Guang</div>
        <div className="profile-third">Age : 20 years old</div>
        <div className="profile-fourth">Phone : 091 815 7089</div>
        <div className="profile-fifth">Email : Pannatorn.Boonjam@gmail.com</div>
        <div className="profile-sixth">
          I'm interested in frontend backend and fullstack.
        </div>
      </div>
      <div className="about-education">
        <div className="edu-first">Education</div>
        <br />
        <div className="edu-second">
          Bachelor of engineering, King Monkut's Institute of Technology
          Ladkrabang
        </div>
        <div className="edu-third">2018 - Present</div>
        <div className="edu-fourth">information engineering(3rd years)</div>
        <div className="edu-fifth">GPA : 2.80 (In progress)</div>
        <br />
        <br />
        <div className="edu-sixth">High School, Sri Ayudhya</div>
        <div className="edu-seventh">2015 - 2017</div>
        <div className="edu-eighth">Sciences and Mathematics Program</div>
        <div className="edu-ninth">GPA : 3.30</div>
      </div>
    </div>
  );
}
