import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
function Services() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          I am providing best and quality services for you.
          <br />
          <ul>
            <li>
              UX Services
              <ul>
                <li>UX Research</li>
                <li>Wireframes and low-fidelity prototypes</li>
                <li>High-fidelity designs and prototypes</li>
              </ul>
            </li>
            <li>
              Front-end Services
              <ul>
                <li>Responsive Web Front-end design with React</li>
                <li>Responsive Web Front-end design with Angular</li>
              </ul>
            </li>
          </ul>
        </span>
        <a href="https://drive.google.com/file/d/1RriLFryUmcrDCOZxFuAYN0BgSw9c8fwd/view?usp=drive_link" download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "13rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Illustrator, Adobe xd"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, CSS/SCSS, JavaScript, Typescript, ReactJS, NodeJS, Angular"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "14rem", left: "5rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "User Research, Usability, Wireframing, Prototyping, User Interface (UI)"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
