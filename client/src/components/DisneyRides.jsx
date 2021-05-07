import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import img1 from '../assets/DisneyRide1.jpg'
import img2 from '../assets/DisneyRide2.jpg'
import img3 from '../assets/DisneyRide3.jpg'
import img4 from '../assets/DisneyRide4.jpg'
import './DisneyRides.css'


export default function DisneyRides() {
  return (
    <div className="RidesContainter" id='background'>
      <div className='RidesGallery'>
        <figure className="geeks" id="RidesGallery-Item1">
          <Image  id='RidesGallery-Img' src={img1} alt='Family members having a blast'/>
        </figure>
        <figure className="geeks"  id="RidesGallery-Item2">
          <Image id='RidesGallery-Img' src={img2} alt='Dumbo Ride'/>
        </figure>
        <figure className="geeks"  id="RidesGallery-Item3">
          <Image id='RidesGallery-Img' src={img3} alt='Three children having fun on a rollercoaster' />
        </figure>
        <figure  className="geeks"  id="RidesGallery-Item4">
          <Image id='RidesGallery-Img' src={img4} alt='Siblings riding there favorite Buzz light year ride.'/>
        </figure>
      </div>
    </div>
  
  )
}
