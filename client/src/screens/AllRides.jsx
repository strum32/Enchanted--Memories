import React from 'react'
import { getAllRides } from '../services/rides'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './AllRides.css'
import DisneyNavbar from '../components/DisneyNavbar';

export default function AllRides() {
  const [rides, setRides] = useState([]);
 
  useEffect(() => {
    const fetchRides = async () => {
      const rideList = await getAllRides();
      setRides(rideList);
    }
    fetchRides();
  }, [])

  return (
    <div>
      <DisneyNavbar/>
  <div>
      {rides.map((ride) => (
      <Link to={`/rides/${ride.id}`}>
        <div class="card mb-3" id="width" >
          <div class="row g-0">
            <div class="col-md-4">
              <img className="rides" src={ride.img_url} alt={ride.name} />
            </div>
            <div class="col-md-8">
              <div class="card-body" id="CardBody">
                <h5 class="card-title">{ride.name}</h5>
                <p class="card-text">{ride.height}</p>
                <p class="card-text">{ride.category}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
  </div>
  )
}
