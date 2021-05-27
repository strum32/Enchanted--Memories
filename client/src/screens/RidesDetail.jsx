import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DisneyNavbar from '../components/DisneyNavbar'
import './RidesDetail.css'

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
      <div className="Display1">
        <Image className='RidesDetailGallery-Img' src={ride.img_url} alt=''/>
        <div>
          <h1 className="titleCenter">{ride.name}</h1>
          <p className='subpark'> This attraction is located in {ride.subpark}</p>
          <p className="description">{ride.description}</p>
          <p className="sameP" id='height'>Height: {ride.height}</p>
          <p className="sameP" id='category'>Category: {ride.category}</p>
          <p className="sameP" id='open'>Open: {ride.open}</p>
          <p className="DiffP">Thank you for getting familiar with our rides and attractions. Please feel free to go back to our attractions page by clicking <Link to="/rides">here</Link>. Enjoy your Enchanted day!</p>
        </div>
      </div>
    </div>
  )
}
