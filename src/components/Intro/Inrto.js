import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Inrto() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I am</span>
          <span>Samith Vinura</span>
          <span style={{ fontSize:'1.2rem'}}>
            I am Google Certified UI/UX dsidgner and front end developer with high level of experience in web designing and
            development, producting the quality work
          </span>
        </div>
        <div>
        <Link to="contact"><button className="button i-button">Hire me</button></Link>
        <button className="x-button" ><a className="link-class" href="https://www.coursera.org/account/accomplishments/professional-cert/KNYWWM3CTXNK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof" >View Certification</a></button>
        </div>
        
        <div className="i-icons">
          <a href="https://github.com/SamithVinura">
          <img src={Github} alt="Github" lin/>
          </a>
          <a href="https://www.linkedin.com/in/samith-vinura-40a773195/">
          <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a >
          <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img 
        initial={{ left: "-36%" }}
        whileInView={{ left: "-24%" }}
        transition={transition}
        src={glassesimoji} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div">
          <FloatingDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div">
          <FloatingDiv img={thumbup} text1="Google Certified" text2="UX Designer" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "30rem",
            height: "20rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Inrto;
