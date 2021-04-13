import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DisneyNavbar from '../components/DisneyNavbar';
import { getOnePark } from '../services/parks'

export default function ParkDetail(props) {
  const [parkItem, setParkItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchParkItem = async () => {
      const parkData = await getOnePark(id);
      setParkItem(parkData);
    };
    fetchParkItem();
  }, [id]);
  
  return (
    <div>
      <DisneyNavbar/>
      <div>
      <h4>{parkItem.name}</h4>
      <img src={parkItem.img_url} />
      </div>
    </div>
  )
}