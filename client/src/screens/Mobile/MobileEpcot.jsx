import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../../assets/Epcot1.jpg'
import img2 from '../../assets/Epcot2.webp'
import img3 from '../../assets/Epcot3.jpg'
import img4 from '../../assets/Epcot4.jpg'
import img5 from '../../assets/Epcot5.jpg'
import img6 from '../../assets/Epcot6.jpg'
import img7 from '../../assets/Epcot7.jpg'
import img8 from '../../assets/Epcot8.jpg'
import img9 from '../../assets/Epcot9.jpg'
import img10 from '../../assets/Epcot10.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

SwiperCore.use([Mousewheel,Pagination]);

export default function MobileEpcot() {
  
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
          <p className="MobileText">Enjoy a slice of Canada Ehh. The Canada Pavilion is designed to remind guests of Canada's outdoors.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img2} />
          <p className="MobileText">Guests of the pavilion gain insight on the lifestyle of the Moroccan people through the Gallery of Arts and History.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img3} />
          <p className="MobileText">The Japan Pavilion is made up of buildings surrounding a courtyard. A torii gate decorates the water in front of the pavilion.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img4} />
          <p className="MobileText">The Mexico Pavilion resembles a Mesoamerican pyramid. Visitors enter through a gallery display of Mexican artwork.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img5} />
          <p className="MobileText">The France Pavilion is themed to look like a Parisienne neighborhood with a view of the Eiffel Tower in the distance.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img6} />
          <p className="MobileText">The Germany Pavilion is designed to look like a German town, but with architecture from different eras and regions.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img7} />
          <p className="MobileText">Norway Pavilion is designed to look like a Norwegian village. The village includes a detailed reproduction of Stave church.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img8} />
          <p className="MobileText">The United Kingdom Pavilion, designed to look like a stereotypical British village.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img9} />
          <p className="MobileText">Visitors enter the China Pavilion through a Chinese gate. The courtyard is dominated by a replica of the Temple of Heaven.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img10} />
          <p className="MobileText">The Italy Pavilion features a plaza surrounded by a collection of buildings of different Italian architecture.</p>
        </SwiperSlide>
        </Swiper>
      </>
    )
  }