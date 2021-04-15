import React from 'react'
import { getAllPhotos } from "../services/photos"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AllPhotos() {
  const [photos, setPhotos] = useState([])
  
  useEffect(() => {
    const fetchPhotos = async () => {
      const photoList = await getAllPhotos();
      setPhotos(photoList);
    }
    fetchPhotos();
  }, [])

  return (
    <div>
      {photos.map((photo) => (
        <div> 
          <Link to={`/photos/edit/${photo.id}`}>
            <img src={photo.img_url} alt={photo.title}/>
          </Link>
        </div>
      ))}
    </div>
  )
}
