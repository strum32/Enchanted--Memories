import React from 'react'
import { Link } from 'react-router-dom'

export default function ThemeParkRides(props) {
  const { rides } = props

  return (
    <div>
      <h3>Rides</h3>
      <div>
      {rides.map((themeparkride) => (
        <Link
          to={`/park/${themeparkride.id}`}>
          <p key={themeparkride.id}>{themeparkride.name}</p>
          <img src={themeparkride.img_url} />
        </Link>
      ))}
      </div>
    </div>
  )
}