import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../../assets/magic1.webp'
import img2 from '../../assets/magic3.jpg'
import img3 from '../../assets/magic4.jpg'
import img4 from '../../assets/magic2.jpg'
import img5 from '../../assets/magic5.jpg'
import './MobileMagicKingdom.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

SwiperCore.use([Mousewheel,Pagination]);

export default function MobileMagicKingdom() {
  
  return (
      <>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={100}
          mousewheel={true}
          pagination={{
            "clickable": true
          }}
          className="mySwiper"
        >
        <SwiperSlide id="MobileSwiper">
          <Image className='MobileImage' src={img1} />
          <p className="MobileText">Welcome to Tomorrowland an intergalactic city. Encompass every childs imagination of rockets, UFOs, and robots.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image className='MobileImage' src={img2} />
          <p className="MobileText">Welcome to Fantasyland a carnival based theme park. Fantasyland is dedicated to the young at heart and to those who believe that when you wish upon a star, your dreams come true.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image className='MobileImage' src={img3} />
          <p className="MobileText">Welcome to Adventureland this park represents the mystery of exploring foreign lands.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image className='MobileImage' src={img4} />
          <p className="MobileText">In Frontierland guests can relive the American Old West.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image className='MobileImage' src={img5} />
          <p className="MobileText">Main Street is lined with shops selling merchandise and food. The decor is early-20th century small-town America.</p>
        </SwiperSlide>
        </Swiper>
      </>
    )
  }
  
