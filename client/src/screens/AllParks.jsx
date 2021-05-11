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
            <Card.Img variant="top" id="height2" className="size" key={park.id} src={park.img_url} alt={park.name} />
            <Card.Body>
              <Card.Title key={park.id}>{park.name}</Card.Title>
              <Card.Text>
                {park.description}
              </Card.Text>
              <Link to={`/parks/${park.id}`}>
                <Button variant="primary">Go To This Park</Button>
              </Link>
            </Card.Body>
          </Card>
    ))}
      </div>
  )
}