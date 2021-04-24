import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './AllParks.css'



export default function AllParks(props) {
  const { parks } = props;

  return (
    <div className="display">
      {parks.map((park) => (
          <Card className="spacing" style={{ width: '26.6rem' }}>
            <Card.Img variant="top" id="size" key={park.id} src={park.img_url} alt={park.name} />
            <Card.Body>
              <Card.Title key={park.id}>{park.name}</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
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