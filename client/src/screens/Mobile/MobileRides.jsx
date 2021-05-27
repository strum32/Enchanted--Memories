import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import "./MobileRides.css"
import img1 from '../../assets/DisneyRide3.jpg'


export default function MobileRides() {

  return (
    <div>
        <h4 className="ride-mobile-title">Enchanted Attractions</h4>
        <Link to='/rides'>
          <Image className="rides-mobile-image" id="hover item-fade" src={img1} />
        </Link>
        </div>
    )
  }
