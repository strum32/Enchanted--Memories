import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export default function ThemePark(props) {
  const { getOnePark } = props
  const { id } = useParams()
  const [park, setPark] = useState({})

  useEffect(() => {
    const fetchPark = async () => {
      const singlePark = await getOnePark(id)
      setPark(singlePark)
    }
    fetchPark()
  }, [])

  return (
    <div>
      <p>{park.name}</p>
    </div>
  )
}
