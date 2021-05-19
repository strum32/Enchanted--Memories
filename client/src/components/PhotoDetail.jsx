import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import DisneyNavbar from '../components/DisneyNavbar'
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

  const history = useHistory()
  const { handleDelete } = props


  return (
    <div>
      <DisneyNavbar/>
      <div className="Display">
        <Image className='PhotoDetailGallery-Img' src={photo.img_url} alt='' />
        <div>
          <h1 className="headline">Enchanted Photos</h1>
          <p className="firstline">Enjoy our guests Enchanted photos. Please share your memories that are special to you. Click <Link to="/photos/new">here</Link> to post your Enchanted Photo and make your memory come to life</p>
          <p className="title1">Title: {photo.title}</p>
          <Button className="Button2" onClick={() => handleDelete(id)}>Delete Photo</Button>
        </div>
      </div>
    </div>
  )
}
