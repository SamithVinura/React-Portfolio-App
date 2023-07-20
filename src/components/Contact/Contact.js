import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Contact() {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done,setDone] = useState(false)

 

  const send = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dzr57cj', 'template_z86dhb8', form.current, 'e4b6q_nxkb1rfGLul')
      .then((result) => {
          console.log(result.text);
          toast("Thank you for contacting me!");
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <div className="contact-form" id="contact">
    
    <div className="w-left">
      <div className="awesome">
       
        <span  style={{color: darkMode?'white': ''}}  >Get in Touch</span>
        <span>Contact me</span>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
    </div>
   
    <div className="c-right">
      <form ref={form} onSubmit={send} >
        <input type="text" name="user_name" className="user"  placeholder="Name"/>
        <input type="email" name="user_email" className="user" placeholder="Email"/>
        <textarea name="message" className="user" placeholder="Message"/>
        <input type="submit" value="Send" className="button"/>
        <ToastContainer />
        <div
          className="blur c-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </form>
    </div>
  </div>
  )
}

export default Contact