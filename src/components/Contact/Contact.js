import React, { useState } from "react";
import "./Contact.css";
import LetterData from "./LetterData";
import AnimationLetter from "../AnimationLetter";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [popup, setPopup] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eowb3gz",
        "template_0ov6txj",
        e.target,
        "user_8cuY6lrk6K80BIm7NMNaG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setPopup(true);
          setInterval(() => {
            setPopup(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact">
      {LetterData.slice(0, 7).map((value, index) => {
        return (
          <span className={value.cName} key={index}>
            <AnimationLetter letter={value.letter} />
          </span>
        );
      })}
      &nbsp;&nbsp;
      {LetterData.slice(7, 9).map((value, index) => {
        return (
          <span className={value.cName} key={index}>
            <AnimationLetter letter={value.letter} />
          </span>
        );
      })}
      <form onSubmit={sendEmail} className="contact-form">
        <div className="name-email-container">
          <div className="form-name">
            <input type="text" required name="name" autoComplete="off"></input>
            <label>Name</label>
          </div>
          <div className="form-email">
            <input type="text" required name="email" autoComplete="off"></input>
            <label>Email</label>
          </div>
        </div>
        <div className="form-subject">
          <input type="text" required name="subject" autoComplete="off"></input>
          <label>Subject</label>
        </div>
        <div className="form-message">
          <textarea name="message" required></textarea>
          <label>Message</label>
        </div>
        <button>SEND</button>
      </form>
      <div className={popup ? "form-popup active" : "form-popup"}>
        Your message has been sent.
      </div>
    </div>
  );
}
