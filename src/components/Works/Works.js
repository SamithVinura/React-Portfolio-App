import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works"  id="works">
      <div className="awesome">
        <span style={{color: darkMode?'white':''}}>Works for all these </span>
        <span>Brands & Clients</span>
        <span>
          I have 5+ years working experience with fiverr
        </span>
        
          <button className="button s-button">Hire me</button>
        

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle">
          <div className="w-secCircle">
          <img alt="" />
          </div>
          <div className="w-secCircle">
          <img alt="" />
          </div>
          <div className="w-secCircle">
          <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
          <img  alt="" />
          </div>
          <div className="w-secCircle">
          <img alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
