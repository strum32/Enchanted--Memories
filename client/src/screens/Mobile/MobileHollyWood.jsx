import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../../assets/holly1.jpg'
import img2 from '../../assets/holly2.jpg'
import img3 from '../../assets/holly3.jpg'
import img4 from '../../assets/holly4.jpg'
import img6 from '../../assets/holly6.jpg'
// import './MobileMagicKingdom.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

SwiperCore.use([Mousewheel,Pagination]);

export default function MobileHolly() {
  
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
          <p className="MobileText">Toy Story Land is inspired by Pixar's Toy Story series. Come join Andy and play with his toys for the day. Enjoy reliving your favorite movies and ride our new attractions.</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img2} />
          <p className="MobileText">Star Wars: Galaxy's Edge is set within the Star Wars universe, at the Black Spire Outpost village on the remote frontier planet of Batuu. Build a light saber, become a Jedi and defend your planet</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img3} />
          <p className="MobileText">Echo Lake includes three attractions based on films created by George Lucas. Star Tours – The Adventures Continue, The Jedi Training: Trials of the Temple, and Indiana Jones Epic Stunt Spectacular</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img4} />
          <p className="MobileText">Grand Avenue is themed as a gentrified historic district inspired by the real location of the same name in downtown Los Angeles. The area is anchored by Muppet Vision 3D, a 4D film attraction</p>
        </SwiperSlide>
        <SwiperSlide id="MobileSwiper">
          <Image id='MobileImage' src={img6} />
          <p className="MobileText">Sunset Boulevard was the first expansion of the park, opening in July 1994. The focal point of Sunset Boulevard is The Twilight Zone Tower of Terror.</p>
        </SwiperSlide>
        </Swiper>
      </>
    )
  }