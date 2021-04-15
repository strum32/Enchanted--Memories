import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DisneyNavbar from '../components/DisneyNavbar';
import { getOnePark } from '../services/parks'

export default function ParkDetail(props) {
  const [park, setPark] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPark = async () => {
      const parkData = await getOnePark(id);
      setPark(parkData);
    };
    fetchPark();
  }, [id]);
  
  return (
    <div>
      <DisneyNavbar/>
      <div >
      {/* <h4>{park.name}</h4>
      <img src={park.img_url} /> */}
      </div>
    </div>
  )
}