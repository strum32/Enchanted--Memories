import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import DisneyNavbar from '../components/DisneyNavbar'
import './PhotoNew.css'

export default function PhotoNew(props) {
  const [formData, setFormData] = useState({
    title: '',
    img_url: '',
    park: ''
  });

  const { title, img_url, park } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <DisneyNavbar />
      <div className="BackgroundImg" >
      <Form className='margin' onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
      }}>
  <Form.Group controlId="CaptionPicture">
    <Form.Label className="margin-top-PhotoNew">Caption</Form.Label>
    <Form.Control
      placeholder="Caption your Photo"
      type="text"
      name="title"
      value={title}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group controlId="PostImg_Url">
    <Form.Label>Image URL</Form.Label>
    <Form.Control
      type="text"      
      name="img_url"
      value={img_url}
      onChange={handleChange}
      placeholder="Enter Image URL Here" />
  </Form.Group>
  <Form.Group controlId="PickAPark">
    <Form.Label>Pick a Park</Form.Label>
    <Form.Control
      as="select"
      name="park"
      value={park}
      onChange={handleChange}
      placeholder="Pick a Park" 
    >
      <option>Magic Kingdom</option>
      <option>Hollywood Studios</option>
      <option>Epcot</option>
      <option>Animal Kingdom</option>
    </Form.Control>
        </Form.Group>
    <Button className='photoButton' variant="primary" type="submit">
      Submit
    </Button>
      </Form>
      </div>
    </div>
  )
}