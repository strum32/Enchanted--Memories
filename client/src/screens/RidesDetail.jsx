import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function RidesDetail(props) {
  const [ride, setRide] = useState({});
  const { getOneRide } = props
  const { id } = useParams();

  useEffect(() => {
    const fetchRide = async () => {
      const singleRide = await getOneRide(id);
      setRide(singleRide);
    };
    fetchRide();
  }, [id]);
  
  return (
    <div>
      <img src={ride.img_url} alt=''/>
      <h4>{ride.name}</h4>
      <p>Height:{ride.height}</p>
      <p>Category:{ride.category}</p>
      {/* <p>{ride.description}</p> */}
      {/* <p>{ride.open}</p> */}
    </div>
  )
}
