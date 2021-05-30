import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import '../App.css'
import DisneyNavbar from '../components/DisneyNavbar';

export default function AllRides(props) {
  const { rides } = props

    return (
    <div>
      <DisneyNavbar />
        <div>
          {rides.map((ride) => (
          <div>
            <h3 className="alternateTitle">{ride.name}</h3>
            <div class="row g-0">
              <div class='row no-gutters' >
                <div class="col-md-4" >
                  <Image className="rides" class="card-img-top" alt src={ride.img_url} alt={ride.name} />
                </div>
                <div class="col-md-8">
                <div class="card-body2">
                  <h4 class="ride-title" key={ride.id}>{ride.name}</h4>
                  <p class="ride-text" id="card-text2">{ride.height}</p>
                  <p class="ride-text" id="card-text2">{ride.category}</p>
                <div className='text-center'>
                    <Link to={`/rides/${ride.id}`}><Button className='card-button'>Ride Information</Button></Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
        ))}
      </div>
    </div>
    )
  }
