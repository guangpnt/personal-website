import "./Home.css";
import AnimationLetter from "../AnimationLetter";
import LetterData from "./LetterData";

export default function Home() {
  return (
    <div className="home">
      <div className="home-text-container">
        {LetterData.slice(0, 6).map((value, index) => {
          return (
            <span className={value.cName} key={index}>
              <AnimationLetter letter={value.letter} />
            </span>
          );
        })}
        <br />
        {LetterData.slice(6, 9).map((value, index) => {
          return (
            <span className={value.cName} key={index}>
              <AnimationLetter letter={value.letter} />
            </span>
          );
        })}
        &nbsp;&nbsp;
        {LetterData.slice(9, 15).map((value, index) => {
          return (
            <span className={value.cName} key={index}>
              <AnimationLetter letter={value.letter} />
            </span>
          );
        })}
        <br />
        {LetterData.slice(15, 18).map((value, index) => {
          return (
            <span className={value.cName} key={index}>
              <AnimationLetter letter={value.letter} />
            </span>
          );
        })}
        &nbsp;&nbsp;
        {LetterData.slice(18, 28).map((value, index) => {
          return (
            <span className={value.cName} key={index}>
              <AnimationLetter letter={value.letter} />
            </span>
          );
        })}
        <h2>Front End Developer / Back End Developer</h2>
        <a href="/contact" className="contact-btn">
          Contact
        </a>
      </div>
    </div>
  );
}
