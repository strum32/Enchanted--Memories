import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DisneyNavbar from '../components/DisneyNavbar'

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
      <DisneyNavbar />
      <div>
        <h4>{park.name}</h4>
        <img src={park.img_url} alt=''/>
      </div>
    </div>  
  )
}