import React from 'react'
import DisneyNavbar from '../components/DisneyNavbar'
import { Link } from 'react-router-dom'

export default function AllRides(props) {
  const { rides } = props

  return (
    <div>
      <DisneyNavbar />
      <h1>All Rides</h1>
      {/* <div>
      {rides.map((themeparkride) => (
        <Link
          to={`/park/${themeparkride.id}`}>
          <p key={themeparkride.id}>{themeparkride.name}</p>
          <img src={themeparkride.img_url} />
        </Link>
      ))}
      </div> */}
    </div>
  )
}