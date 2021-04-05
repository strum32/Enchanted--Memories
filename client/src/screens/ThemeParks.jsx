import React from 'react'
import { Link } from 'react-router-dom'

export default function ThemeParks() {
  const { parks } = props

  return (
    <div>
      {parks.map((themepark) => (
        <Link to={`/park/${themepark.id}`}><p key={themepark.id}>{themepark.name}</p></Link>
      ))}
    </div>
  )
}
