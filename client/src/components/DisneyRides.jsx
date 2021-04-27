import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../assets/DisneyRide1.jpg'
import img2 from '../assets/DisneyRide2.jpg'
import img3 from '../assets/DisneyRide3.jpg'
import img4 from '../assets/DisneyRide4.jpg'
import './DisneyRides.css'


export default function DisneyRides() {
  return (
    <div className="RidesContainter" id='background'>
      <div className='RidesGallery'>
        <figure id="RidesGallery-Item1">
          <Image id='height' id='RidesGallery-Img' src={img1} alt='Family members having a blast'/>
        </figure>
        <figure id="RidesGallery-Item2">
          <Image id='RidesGallery-Img' src={img2} alt='Dumbo Ride'/>
        </figure>
        <figure id="RidesGallery-Item3">
          <Image id='RidesGallery-Img' src={img3} alt='Three children having fun on a rollercoaster'/>
        </figure>
        <figure  id="RidesGallery-Item4">
          <Image id='RidesGallery-Img' src={img4} alt='Jessie from Toy Story'/>
        </figure>
      </div>
    </div>
  
  )
}
