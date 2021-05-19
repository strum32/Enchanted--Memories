import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './AllParks.css'



export default function AllParks(props) {
  const { parks } = props;

  return (
    <div className="looks">
      {parks.map((park) => (
          <Card className="spacing" id='height' style={{ width: '16rem' }}>
          <Link to={`/parks/${park.id}`}>
            <Card.Img variant="top" id="height2" className="hover item-fade" className="size" key={park.id} src={park.img_url} alt={park.name} />
          </Link>
            <Card.Body>
              <Card.Title >{park.name}</Card.Title>
              <Card.Text>{park.description}</Card.Text>
            </Card.Body>
        </Card>
    ))}
    </div>
  )
}