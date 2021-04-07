import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export default function ThemeParkRide(props) {
  const { getOneRide } = props
  const { id } = useParams()
  const [ride, setRide] = useState({})

  useEffect(() => {
    const fetchRide = async () => {
      const singleRide = await getOneRide(id)
      setRide(singleRide)
    }
    fetchRide()
  }, [])

  return (
    <div>
      <p>{ride.name}</p>
    </div>
  )
}