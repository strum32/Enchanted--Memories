import React from 'react'
import { Link } from 'react-router-dom'


export default function AllPhotos(props) {
  const { photos } = props
  

  return (
    <div>
      {photos.map((photo) => (
        <div
          id="carouselExampleIndicators"
          class="carousel sz-slider"
          data-type="carousel"
          data-height='300px'
          data-width='100%'
          data-animation='dragX'
          data-move='1'
          data-items="5"
          >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={photo.img_url} class="d-block w-100" alt="..." />
            </div>
          </div>
          <a class="carousel-control-prev carousel-control-btn" href="#carouselExampleIndicators" role="button">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next carousel-control-btn" href="#carouselExampleIndicators" role="button">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          </div>
      ))}
      </div>
  )
}