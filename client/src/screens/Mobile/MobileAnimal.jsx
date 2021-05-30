import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../../assets/Animal1.jpg'
import img2 from '../../assets/Animal3.jpg'
import img3 from '../../assets/Animal4.jpg'
import img4 from '../../assets/Animal2.jpg'
import img5 from '../../assets/Animal5.webp'
// import './MobileMagicKingdom.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

SwiperCore.use([Mousewheel,Pagination]);

export default function MobileAnimal() {
  
  return (
    <>
      <p className="swipeUp">swipe up :)</p>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={100}
          mousewheel={true}
          pagination={{
            "clickable": true
          }}
          className="mySwiper3"
        >
        <SwiperSlide >
          <Image id='MobileImage' src={img1} />
          <p className="MobileText">The Oasis is the park's logistic equivalent to Main Street U.S.A. and provides the transition from the park's entrance to the world of animals.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img2} />
          <p className="MobileText">Discovery Island is located at the center of the park, and is an island within the park's Discovery River waterway. It serves as the "central hub" connecting the other sections of the park by bridges.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img3} />
          <p className="MobileText">Guests board the 3 ft narrow gauge Wildlife Express Train for the short trip to and from the area, which consists of three sub-areas.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img4} />
          <p className="MobileText">Pandora – The World of Avatar is themed to the fictional alien exoplanetary moon, Pandora.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img5} />
          <p className="MobileText">Dino Land U.S.A. is themed around dinosaurs and other extinct prehistoric life. The area is anchored by the Dino Institute.</p>
        </SwiperSlide>
        </Swiper>
      </>
    )
  }