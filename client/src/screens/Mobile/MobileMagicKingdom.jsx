import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../../assets/magic1.webp'
import img2 from '../../assets/magic3.jpg'
import img3 from '../../assets/magic4.jpg'
import img4 from '../../assets/magic2.jpg'
import img5 from '../../assets/magic5.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

SwiperCore.use([Mousewheel,Pagination]);

export default function MobileMagicKingdom() {
  
  return (
    <div id='MobileBackground'>
      <p className="swipeUp">swipe up :)</p>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={100}
        mousewheel={true}
        pagination={{ "clickable": true }}
        className="mySwiper3"
      >
        <SwiperSlide id='pagination'>
          <Image id='MobileImage' src={img1} />
          <p className="MobileText">Tomorrowland is an intergalactic city. Encompass every childs imagination of rockets, UFOs, and robots.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img2} />
          <p className="MobileText">Fantasyland is dedicated to those who believe that when you wish upon a star, your dreams come true.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img3} />
          <p className="MobileText">Adventureland represents the mystery of exploring foreign lands. It is themed to resemble a Caribbean town square.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img4} />
          <p className="MobileText">In Frontierland guests can relive the American Old West. So put on your cowboy hat, shine your boots, and saddle up.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img5} />
          <p className="MobileText">Main Street is lined with shops selling merchandise and food. The decor is early-20th century small-town America.</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
  
