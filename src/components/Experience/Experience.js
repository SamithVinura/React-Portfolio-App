import React from "react";
import './Experience.css'
import { themeContext } from "../../Context";
import { useContext } from "react";
function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
        <span style={{color: darkMode?'white':''}}>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>15+</div>
        <span style={{color: darkMode?'white':''}}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span style={{color: darkMode?'white':''}}>Worked</span>
        <span>Companies</span>
      </div>
    </div>
  );
}

export default Experience;
