import React from 'react'
import { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Switcher from '../components/Switcher'

export default function ParkDetail(props) {
  const { getOnePark } = props
  const { id } = useParams();
  const [park, setPark] = useState({});
  
  useEffect(() => {
    const fetchPark = async () => {
      const singlePark = await getOnePark(id);
      setPark(singlePark);
    };
    fetchPark();
  }, [id]);
  
  return (
    <div className='background-ParkDetail'>
      <div className='display-ParkDetail'>
        <Image className='picture-ParkDetail' src={park.img_url} alt='' />
      </div>
        <h1 className="center-ParkDetail">Inside the Park</h1>
        <Switcher />
    </div>
  )
}