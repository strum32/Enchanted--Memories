import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DisneyNavbar from './DisneyNavbar';

export default function PhotoEdit(props) {
  const { formData, setFormData } = useState({
    title: '',
    img_url: '',
    park: ''
  })

  const history = useHistory()
  const { title, img_url, park } = formData;
  const { photos, handleUpdate } = props
  const { id } = useParams();
  
  const PhotoItem = photos.find((photo) => photo.id === Number(id));
  console.log(PhotoItem)

  useEffect(() => {
    const prefillFormData = () => {
      const PhotoItem = photos.find((photo) => photo.id === Number(id));
      setFormData({
        caption: PhotoItem.caption,
      });
    }
    if (photos.length) {
      prefillFormData();
    }
  }, [photos])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value
      }})
  }

  return (
  <div className="formContainer">
    <DisneyNavbar/>
    <div>
    <Form className='margin' onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
      history.push('/parks/:id')
    }}>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label className="margin-position">Caption</Form.Label>
      <Form.Control
        className="margin-position"
        type="text"
        name='title'
        value={title}
        onChange={handleChange}
        placeholder="Caption your Photo"
      />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label className="margin-position">Image URL</Form.Label>
      <Form.Control
        className="margin-position"
        type="text"
        name="img_url"
        value={img_url}
        onChange={handleChange}
        placeholder="Enter Image URL Here" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label className="margin-position">Pick a Park</Form.Label>
      <Form.Control
        className="margin-position"
        as="select"
        name="park"
        value={park}
        onChange={handleChange}
      >
        <option>Magic Kingdom</option>
        <option>Hollywood Studios</option>
        <option>Epcot</option>
        <option>Animal Kingdom</option>
      </Form.Control>
      </Form.Group>
        <Button className="margin-position" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </div>
  )
}
