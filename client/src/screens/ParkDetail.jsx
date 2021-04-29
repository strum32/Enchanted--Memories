import React from 'react'
import { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Switcher from '../components/Switcher'
import "./ParkDetail.css"

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
    <div className='background'>
      <div className='display'>
          <Image className='picture' src={park.img_url} alt='' />
      </div>
        {/* <h1>Inside the Park</h1> */}
      <Switcher />
    </div>  
  )
}