import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import img1 from '../../assets/DisneyRide1.jpg'
import img2 from '../../assets/DisneyRide2.jpg'
import img3 from '../../assets/DisneyRide3.jpg'
import img4 from '../../assets/DisneyRide4.jpg'
import "./MobileRides.css";

import SwiperCore, {
  Pagination
} from 'swiper/core';


SwiperCore.use([Pagination]);


export default function MobileRides() {
  return (
    <>
      <h1>Enchanted Rides</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{ "clickable": true }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img style={{ height: 250, width: 250 }} src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: 350, width: 350 }}  src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: 350, width: 350 }}  src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: 350, width: 350 }}  src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='' />
        </SwiperSlide>
    </Swiper>
  </>
  )
}
