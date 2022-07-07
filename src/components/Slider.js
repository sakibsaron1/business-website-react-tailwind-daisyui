import React from "react";
import "./Slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { Autoplay, Navigation } from "swiper";

import image1 from "../images/bg-image-12.jpg";
import image2 from "../images/bg-image-13.jpg";
import image3 from "../images/bg-image-15.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        effect={"fade"}
        spaceBetween={10}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="slider-img">
            <img src={image1} alt="" className="h-[600px] w-full" />
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-img">
            <img src={image2} alt="" className="h-[600px] w-full" />
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-img">
            <img src={image3} alt="" className="h-[600px] w-full" />
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
