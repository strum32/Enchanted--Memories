import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../assets/magic1.webp'
import img2 from '../assets/magic3.jpg'
import img3 from '../assets/magic4.jpg'
import img4 from '../assets/magic2.jpg'
import img5 from '../assets/magic5.jpg'

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
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            "clickable": true
          }}
          className="mySwiper"
        >
        <SwiperSlide >
          <Image className='MobileImage' src={img1} />
          <p className="MobileText">Welcome to Tomorrowland an intergalactic city. Our futurisitic theme park will encompass every childs imagination of rockets, UFOs, and robots. The Tomorrowland attractions have been designed to give you an opportunity to participate in adventures that are a living blueprint of our future. Classic attractions include Space Mountain, Astro Orbiter, and Tomorrowland Speedway</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='MobileImage' src={img2} />
          <p className="MobileText">Welcome to Fantasyland a carnival based theme park. Step into your own fantasy, be who you want, and make your dreams a reality. Fantasyland is dedicated to the young at heart and to those who believe that when you wish upon a star, your dreams come true. Attractions include It's a Small World, Peter Pan's Flight, and Mickey's PhilharMagic . </p>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='MobileImage' src={img3} />
          <p className="MobileText">Welcome to Adventureland this park represents the mystery of exploring foreign lands. It is themed to resemble the remote jungles in Africa, and resembling a Caribbean town square. It contains classic attractions such as Pirates of the Caribbean, Jungle Cruise, Walt Disney's Enchanted Tiki Room, Swiss Family Treehouse, and The Magic Carpets of Aladdin.</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='MobileImage' src={img4} />
          <p className="MobileText">In Frontierland guests can relive the American Old West. It contains classic attractions such as Big Thunder Mountain Railroad, Splash Mountain, and the Country Bear Jamboree. So put on your cowboy hat, shine your boots, and saddle up, because you are in Frontier Land</p>
        </SwiperSlide>
        <SwiperSlide>
          <Image className='MobileImage' src={img5} />
          <p className="MobileText">Main Street is lined with shops selling merchandise and food. The decor is early-20th century small-town America, inspired by Walt Disney's childhood and the film Lady and the Tramp.</p>
        </SwiperSlide>
        </Swiper>
      </>
    )
  }
