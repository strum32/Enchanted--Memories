import React from 'react'
import { Image } from 'react-bootstrap'
import'./DisneyPhotos.css'
import img1 from '../assets/DisneyPhoto1.jpg'
import img2 from '../assets/DisneyPhoto2.jpg'
import img3 from '../assets/DisneyPhoto3.jpg'
import img4 from '../assets/DisneyPhoto4.jpg'

export default function DisneyPhotos() {
  return (
    <div>
      <div className="PhotosContainter" id='background'>
      <div className='PhotosGallery'>
        <figure id="PhotosGallery-Item1">
          <Image id='PhotosGallery-Img' src={img2} alt='' fluid/>
        </figure>
        <figure id="PhotosGallery-Item2">
          <p></p>
          <Image id='PhotosGallery-Img' src={img4} alt='' fluid/>
        </figure>
        <figure id="PhotosGallery-Item3">
          <p></p>
          <Image id="height" id='PhotosGallery-Img' src={img1} alt='' fluid/>
        </figure>
        <figure  id="PhotosGallery-Item4">
          <p></p>
          <Image id='PhotosGallery-Img' src={img3} alt='' fluid/>
        </figure>
        <figure  id="PhotosGallery-Item5">
          <p></p>
        </figure>
      </div>
    </div>
    </div>
  )
}
