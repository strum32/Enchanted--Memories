import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DisneyNavbar from '../components/DisneyNavbar'
import { getOnePark } from '../services/parks'

export default function ParkDetail(props) {
  const [onePark, setOnePark] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchOnePark = async () => {
      const parkData = await getOnePark(id);
      setOnePark(parkData);
    };
    fetchOnePark();
  }, [id]);
  
  return (
    <div>
    {onePark.map((thePark) => (
    <div key={thePark.id}>
      {/* <h4>{thePark.name}</h4>
      <img src={thePark.img_url} /> */}
    </div>
      ))}  
    </div>
    
  )
}