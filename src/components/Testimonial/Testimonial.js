import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";

function Testimonial() {
    const clients = [
      {
        img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/88118691e2072da93828160f187eb6ea-1603141815048/53b5e9af-8c3a-4062-ab88-76e97c405a1a.png",
        name:'nuclius',
        country:'United States',
        review:
          "vinuradesigns is FAST! Be specific and concise in instructions (a hard thing sometimes for a manager to know what they want). They really inspired the heck out of me with their design skills.",
      },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/23494400/original/1453163644219_facebook20160119-20607-1404uqw.jpg",
          name:'senzomthembu',
          country:'South Africa',
          review:
            "senzomthembu",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/cb8d9c7d5d9be41adf83b6b67751fea8-1678781612590/c6ce9a28-b173-4855-b2b6-0de4d95e5bb6.jpeg",
          name:'ameliahooper',
          country:'New Zealand',
          review:
            "Great work",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/b231ca23e3d16604d2fefa5454272efd-1677101747190/ecb093a7-f583-48a2-916c-4b3e683c7492.jpg",
          name:'udr_official',
          country:'Austria',
          review:
            "Very fast and very helpful",
        },
        {
          img: profilePic4,
          name:'babbletrax',
          country:'Australia',
          review:
            "fast delivery, excellent service",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d02468c524c105d39bc9df5a77e4afee-1640942534963/f5816168-d588-499d-bc83-3a0ed05afca0.jpg",
          name:'scrubcup',
          country:'Romania',
          review:
            "Nice job! Looking foward to work with you again.",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/fe1cab92808707a1a266162285c13053-1649906874825/94273df1-106e-4521-895e-2e4f28fade6e.jpg",
          name:'zrsmith',
          country:'United States',
          review:
            "Always excellent work, creative, and fast!",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5dd8e0d8db98b67528424ab34f13981e-1646138371827/5b0c6979-a7b3-4b9e-b83e-0133f2b9792c.jpg",
          name:'annsophiemaria',
          country:'Singapore',
          review:
            "It was super convenient and efficient! She was very fast in replying and was fast in feedback changes.",
        },
        {
          img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/fe1cab92808707a1a266162285c13053-1649906874825/94273df1-106e-4521-895e-2e4f28fade6e.jpg",
          name:'zrsmith',
          country:'United States',
          review:
            "Great designer and a pleasure to work with, and many say they will use again. I just ordered 3 more packages and intend to use this designer often. Fast, great communicator, and excellent work!",
        },
      ];
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading" >
        <span>Client always get </span>
        <span>Exceptional Work </span>
        <span>from me... </span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{fontSize:'0.9rem'}}>Name : {client.name}</span>
                <span style={{fontSize:'0.9rem'}}>Country : {client.country}</span>
                <span>Review : {client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonial;
