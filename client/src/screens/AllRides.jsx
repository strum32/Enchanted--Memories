import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './AllRides.css'
import DisneyNavbar from '../components/DisneyNavbar';

export default function AllRides(props) {
  const { rides } = props

  return (
  <div>
      <DisneyNavbar/>
    <div>
      {rides.map((ride) => (
        <div class="card mb-3" id="margin">
          <div class="row g-0">
            <div class="col-md-4">
              <img className="rides" key={ride.id} src={ride.img_url} alt={ride.name} />
            </div>
            <div class="col-md-8">
              <div class="card-body" id="padding">
                <h5 class="card-title">{ride.name}</h5>
                <p class="card-text">{ride.height}</p>
                <p class="card-text">{ride.category}</p>
                <Link to={`/rides/${ride.id}`}>
                  <Button variant="primary">Ride Information</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    ))}
    </div>
  </div>
  )
}
