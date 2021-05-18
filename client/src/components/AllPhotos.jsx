import React from "react";
import { Image } from "react-bootstrap"
import { useEffect, useState } from "react"
import { getAllPhotos } from "../services/photos"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Link } from 'react-router-dom'
import "./AllPhotos.css"
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
    <Swiper
      slidesPerView={6}
      spaceBetween={25}
      slidesPerGroup={6}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{ "clickable": true }}
      navigation={true}
    >
      {photos.map((photo) => (
        <div className="swiper-button-next" className="swiper-button-prev">
          <SwiperSlide key={photo.id}>
              <Link to={`/photos/${photo.id}`}>
                <Image className="zoom" src={photo.img_url} />
              </Link>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  )
}
