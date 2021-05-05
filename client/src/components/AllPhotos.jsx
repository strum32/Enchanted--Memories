import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Link } from 'react-router-dom'
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

export default function AllPhotos(props) {
  const { photos } = props

  return (
    <div>
      {/* {photos.map((photo) => (
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{"clickable": true}}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide key={photo.id}>{photo.img_url}</SwiperSlide>
            <Link to={`/photos/${photo.id}`}>
              <img src={photo.image_url} />
            </Link>
        </Swiper>
      ))} */}
    </div>
  )
}
