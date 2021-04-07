import React from 'react'
import { Link } from 'react-router-dom'

export default function ThemeParks(props) {
  const { parks } = props

  return (
    <div>
      <h3>Parks</h3>
      <div>
      {parks.map((themepark) => (
        <Link
          to={`/park/${themepark.id}`}>
          <p key={themepark.id}>{themepark.name}</p>
          <img/>
        </Link>
      ))}
      </div>
    </div>
  )
}
