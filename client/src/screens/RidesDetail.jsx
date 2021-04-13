import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneRide } from '../services/rides'

export default function RidesDetail() {
  const [rideItem, setRideItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRideItem = async () => {
      const rideData = await getOneRide(id);
      setRideItem(rideData);
    };
    fetchRideItem();
  }, [id]);
  
  return (
    <div>
      <h4>{rideItem.name}</h4>
      <img src={rideItem.img_url} />
      <p>{rideItem.height}</p>
      <p>{rideItem.category}</p>
      {/* <p>{rideItem.description}</p> */}
    </div>
  )
}
