import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react"
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png"
import one from "../../img/1.jpg";
import two from "../../img/2.jpg";
import three from "../../img/3.jpg";
import four from "../../img/4.jpg";
import five from "../../img/5.jpg";
import six from "../../img/6.jpg";
import seven from "../../img/7.jpg";
import eight from "../../img/8.jpg";
import nine from "../../img/9.jpg";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";
function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
        <span style={{color: darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
        spaceBetween={1}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={one} alt=""  className='port-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" className='port-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" className='port-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} alt="" className='port-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} alt="" className='port-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} alt="" className='port-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} alt="" className='port-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={eight} alt="" className='port-img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nine} alt="" className='port-img'/>
        </SwiperSlide>
      
      </Swiper>
    </div>
  )
}

export default Portfolio