import React, { useState } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { RiHome2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FiSettings, FiMail } from "react-icons/fi";
import logo from "../../image/logo.svg";

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(false);
  const [homeItem, setHomeItem] = useState(<RiHome2Line />);
  const [aboutItem, setAboutItem] = useState(<FaRegUser />);
  const [skillsItem, setSkillsItem] = useState(<FiSettings />);
  const [contactItem, setContactItem] = useState(<FiMail />);
  const x = "sidenav active";

  const sidenavToggle = () => {
    setNavStatus(!navStatus);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} />
        </div>
        <div className="navbar-items">
          <a
            href="/"
            className={homeItem == "HOME" ? "text-item" : "icon-item"}
            onMouseOver={() => {
              setHomeItem("HOME");
            }}
            onMouseOut={() => {
              setHomeItem(<RiHome2Line />);
            }}
          >
            {homeItem}
          </a>
          <a
            href="/about"
            className={aboutItem == "ABOUT" ? "text-item" : "icon-item"}
            onMouseOver={() => {
              setAboutItem("ABOUT");
            }}
            onMouseOut={() => {
              setAboutItem(<FaRegUser />);
            }}
          >
            {aboutItem}
          </a>
          <a
            href="/skills"
            className={skillsItem == "SKILLS" ? "text-item" : "icon-item"}
            onMouseOver={() => {
              setSkillsItem("SKILLS");
            }}
            onMouseOut={() => {
              setSkillsItem(<FiSettings />);
            }}
          >
            {skillsItem}
          </a>
          <a
            href="contact"
            className={contactItem == "CONTACT" ? "text-item" : "icon-item"}
            onMouseOver={() => {
              setContactItem("CONTACT");
            }}
            onMouseOut={() => {
              setContactItem(<FiMail />);
            }}
          >
            {contactItem}
          </a>
        </div>
        <div className="navbar-open">
          <HiMenu onClick={sidenavToggle} />
        </div>
      </div>
      <div className={navStatus ? "sidenav show move" : "sidenav"}>
        <a
          href="/"
          className={homeItem == "HOME" ? "text-item" : "icon-item"}
          onMouseOver={() => {
            setHomeItem("HOME");
          }}
          onMouseOut={() => {
            setHomeItem(<RiHome2Line />);
          }}
        >
          {homeItem}
        </a>
        <a
          href="/about"
          className={aboutItem == "ABOUT" ? "text-item" : "icon-item"}
          onMouseOver={() => {
            setAboutItem("ABOUT");
          }}
          onMouseOut={() => {
            setAboutItem(<FaRegUser />);
          }}
        >
          {aboutItem}
        </a>
        <a
          href="/skills"
          className={skillsItem == "SKILLS" ? "text-item" : "icon-item"}
          onMouseOver={() => {
            setSkillsItem("SKILLS");
          }}
          onMouseOut={() => {
            setSkillsItem(<FiSettings />);
          }}
        >
          {skillsItem}
        </a>
        <a
          href="contact"
          className={contactItem == "CONTACT" ? "text-item" : "icon-item"}
          onMouseOver={() => {
            setContactItem("CONTACT");
          }}
          onMouseOut={() => {
            setContactItem(<FiMail />);
          }}
        >
          {contactItem}
        </a>
      </div>
    </>
  );
}
