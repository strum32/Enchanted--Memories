import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import "./MobileRides.css"
import img1 from '../../assets/DisneyPhoto2.jpg'


export default function MobilePhoto() {

  return (
    <div>
        <h4 class="ride-mobile-title">Enchanted Photos</h4>
        <Link to='/photos/new'>
          <Image className="rides-mobile-image" src={img1} />
        </Link>
        </div>
    )
  }