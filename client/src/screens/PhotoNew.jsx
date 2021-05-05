import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import DisneyNavbar from '../components/DisneyNavbar'
import './PhotoNew.css'

export default function PhotoNew(props) {
  const [formData, setFormData] = useState({
    caption: '',
    img_url: '',
    park: ''
  });
  const { caption, img_url, park } = formData;
  const { handleCreate } = props

  const handleChange = (e) => {
    const { caption, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [caption]: value
    }))
  }

  return (
    <div>
      <DisneyNavbar />
    <div className="BackgroundImg" >
      <Form className='margin'onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="margin-position">Caption</Form.Label>
    <Form.Control
      className="margin-position"
      type="text"
      value={caption}
      onChange={handleChange}
      placeholder="Caption your Photo"
    />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="margin-position">Image URL</Form.Label>
    <Form.Control
      className="margin-position"
      type="text"
      value={img_url}
      onChange={handleChange}
      placeholder="Enter Image URL Here" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className="margin-position">Pick a Park</Form.Label>
    <Form.Control
      className="margin-position"
      as="select"
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
