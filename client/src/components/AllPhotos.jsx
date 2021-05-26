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

SwiperCore.use([Pagination, Navigation]);

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
      slidesPerView={1}
      spaceBetween={50}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{ "clickable": true }}
      navigation={true}

      breakpoints={{
        880: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spacebetween: 25
      },
      1150: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spacebetween: 25
        },
      1350: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spacebetween: 25
        },
      1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spacebetween: 25
        },
        1620: {
          slidesPerView: 6,
          slidesPerGroup: 6,
          spacebetween: 25
        }
      }
    }
    >
      {photos.map((photo) => (
        <div className="swiper-button-next" className="swiper-button-prev">
          <SwiperSlide  key={photo.id}>
              <Link to={`/photos/${photo.id}`}>
                <Image className="zoom" src={photo.img_url} />
              </Link>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  )
}
