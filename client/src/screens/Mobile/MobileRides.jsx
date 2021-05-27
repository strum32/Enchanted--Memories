import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import "./MobileRides.css"
import img1 from '../../assets/DisneyRide3.jpg'


export default function MobileRides() {

  return (
    <div>
        <h4 class="ride-mobile-title">Enchanted Attractions</h4>
        <Link to='/rides'>
          <Image className="rides-mobile-image" src={img1} />
        </Link>
        </div>
    )
  }
