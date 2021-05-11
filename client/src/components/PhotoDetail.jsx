import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    <div className="Display">
      <Image className='PhotoDetailGallery-Img' src={photo.img_url} alt='' />
      <div className="bigger">
        <h1 className="titleC">Enchanted Memory Photos</h1>
        <p className="fontsize5">Title:</p>
        <p className="placement">{photo.title}</p>
        {/* <p>filler bullshit</p> */}
        <p className="lastline">Enjoy our guests Enchanted photos. Please share your memories that are special to you. Click <Link to="/photos/new">here</Link> to post your Enchanted Photo and make your memory come to life</p>
      </div>
    </div>
  )
}
