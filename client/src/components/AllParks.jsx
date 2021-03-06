import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './AllParks.css'



export default function AllParks(props) {
  const { parks } = props;

  return (
    <div className="DivParks">
      {parks.map((park) => (
        <Card key={park.id}>
          <Link to={`/parks/${park.id}`}>
            <Card.Img variant="top" className="imageTop" src={park.img_url} alt={park.name} />
          </Link>
          <Card.Body className="parkBody">
            <Card.Title className='title'>{park.name}</Card.Title>
            <Card.Text id="defualtSettings">{park.description}</Card.Text>
          </Card.Body>
        </Card>
    ))}
    </div>
  )
}