import React from 'react'
import { Form, Button } from 'react-bootstrap'
import DisneyNavbar from '../components/DisneyNavbar'
import './PhotoNew.css'

export default function PhotoNew() {
  return (
    <div>
      <DisneyNavbar />
    <div className="BackgroundImg">
      <Form className='margin'>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="margin-position">Caption</Form.Label>
    <Form.Control className="margin-position" type="Username" placeholder="Caption your Photo" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="margin-position">Image URL</Form.Label>
    <Form.Control className="margin-position" type="Username" placeholder="Enter Image URL Here" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label className="margin-position">Pick a Park</Form.Label>
    <Form.Control className="margin-position" as="select">
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
