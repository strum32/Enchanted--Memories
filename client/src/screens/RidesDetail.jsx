import React from 'react'
import { Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DisneyNavbar from '../components/DisneyNavbar'

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
      <DisneyNavbar/>
      <div>
        <h1>{ride.name}</h1>
        <Image src={ride.img_url} alt='' />
        <p>{ride.description}</p>
        <p>Height:{ride.height}</p>
        <p>Category:{ride.category}</p>
        <p>{ride.open}</p>
      </div>
    </div>
  )
}
