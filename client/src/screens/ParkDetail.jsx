import React from 'react'
import { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Switcher from '../components/Switcher'
import "./ParkDetail.css"
// import Epcot from './Epcot'
// import AnimalKingdom from './AnimalKingdom'

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
    <div>
      <div className='display'>
        <Image className='picture' src={park.img_url} alt=''/>
      </div>
        <Switcher />
    </div>  
  )
}