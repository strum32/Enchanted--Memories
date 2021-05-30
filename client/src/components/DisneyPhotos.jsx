import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import img2 from '../assets/DisneyPhoto2.jpg'
import img3 from '../assets/DisneyPhoto3.jpg'
import img4 from '../assets/DisneyPhoto4.jpg'

export default function DisneyPhotos() {
  return (
    <div>
      <div className="PhotosContainter">
      <div className='PhotosGallery'>
        <figure id="PhotosGallery-Item1">
          <Link to="/photos/new"><Image className="hover item-fade" id='PhotosGallery-Img' src={img2} alt='' fluid/></Link>
        </figure>
        <figure id="PhotosGallery-Item2">
          <Link to="/photos/new"><Image className="hover item-fade" id='PhotosGallery-Img' src={img4} alt='' fluid/></Link>
        </figure>
        <figure id="PhotosGallery-Item3">
            <h1 className="down-DisneyPhoto">Enchanted Memories+</h1>
        </figure>
        <figure  id="PhotosGallery-Item4">
          <Link to="/photos/new"><Image className="hover item-fade" id='PhotosGallery-Img' src={img3} alt='' fluid/></Link>
        </figure>
        <figure id="PhotosGallery-Item5">
        <p className="down3-DisneyPhoto">Click on any of the Enchanted photos to add your own Enchanted Memory or you can click <Link to="/photos/new">here</Link></p>
        </figure>
        <figure id="PhotosGallery-Item6">
            <h3 className="down2-DisneyPhoto">Limited-Time Offer</h3>
            <p className='outline-DisneyPhoto'>Get All your Enchanted Memories photos and videos captured through December 11, 2021 for one price with Memory Maker!</p>
        </figure>
      </div>
    </div>
  </div>
  )
}
