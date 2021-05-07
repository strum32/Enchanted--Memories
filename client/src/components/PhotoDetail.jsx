import React from 'react'
import { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './PhotoDetail.css'

export default function PhotoDetail(props) {
  const { getOnePhoto } = props
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  
  useEffect(() => {
    const fetchPark = async () => {
      const singlePhoto = await getOnePhoto(id);
      setPhoto(singlePhoto);
    };
    fetchPark();
  }, [id]);

  return (
    <div className="PhotoDetailContainter">
      <div className='PhotoDetailGallery'>
        < figure className="PhotoDetailGallery-Item1">
          <Image className='PhotoDetailGallery-Img' src={photo.img_url} alt='Disney Credit Cards' fluid/>
        </figure>
        < figure className="PhotoDetailGallery-Item2">
          <p className='PhotoDetailGallery-Img'>Title:{photo.title}</p>
          {/* <p>{photo.date}</p> */}
          {/* <p>{photo.park}</p> */}
          <p>{photo.user}</p>
        </figure>
      </div>
    </div>
  )
}
