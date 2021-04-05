import React from 'react'
import { useEffect, UseState } from 'react'
import { useParams } from "react-router-dom"

export default function ThemeParks() {
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
