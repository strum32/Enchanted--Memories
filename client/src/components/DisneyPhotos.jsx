import React from 'react'
import { Image } from 'react-bootstrap'
import'./DisneyPhotos.css'
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
          <Image id='PhotosGallery-Img' src={img4} alt='' fluid/>
        </figure>
        <figure id="PhotosGallery-Item3">
            <h1>Enchanted Memories+</h1>
        </figure>
        <figure  id="PhotosGallery-Item4">
          <Image id='PhotosGallery-Img' src={img3} alt='' fluid/>
        </figure>
        <figure id="PhotosGallery-Item5">
            <p>Add your own Memory here</p>
        </figure>
        <figure id="PhotosGallery-Item6">
            <h3>Limited-Time Offer</h3>
            <p>Get All your Enchanted Memories photos and videos captured through December 11, 2021 for one price with Memory Maker!</p>
        </figure>
      </div>
    </div>
    </div>
  )
}
