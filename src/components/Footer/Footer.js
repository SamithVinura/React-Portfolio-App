import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" className='footer-wave'  />
      <div className="f-content">
        <span style={{fontSize:'1.5rem'}}>vinuraaberathne@gmail.com</span>
        <div className="f-icons">
          <a><Insta color="white" size={"3rem"} /></a>
          <a><Facebook color="white" size={"3rem"} /></a>
          <a ><Gitub color="white" size={"3rem"} /></a>  
        </div>
      </div>
    </div>
  )
}

export default Footer

