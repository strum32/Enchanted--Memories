import React from "react";
import { useEffect, useState } from "react"
import { getAllPhotos } from "../services/photos"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Link } from 'react-router-dom'
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

export default function AllPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photoList = await getAllPhotos();
      setPhotos(photoList);
    }
    fetchPhotos();
  }, [])

  return (
    <div>
      {photos.map((photo) => (
        <div>
          <Link to={`/photos/edit/${photo.id}`}>
            <img src={photo.img_url} />
          </Link>
          <p>{photo.title}</p>
        {/* <Swiper
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
        </Swiper> */}
        </div>
      ))}
    </div>
  )
}
