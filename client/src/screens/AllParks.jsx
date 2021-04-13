import React from 'react'
import { getAllParks } from '../services/parks'
import { useEffect, useState } from 'react'
import { Card, Button, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './AllParks.css'


export default function AllParks() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    const fetchParks = async (props) => {
      const parkList = await getAllParks();
      setParks(parkList);
    }
    fetchParks();
  }, [])

  return (
      <div>
      {parks.map((park) => (
      <CardDeck>
        <Card className="reshape">
          <Card.Img variant="top" id="resize" src={park.img_url} alt={park.name} />
          <Card.Body>
            <Card.Title>{park.name}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          <Link to={`/parks/${park.id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
          </Card.Body >
        </Card>
      </CardDeck>
    ))}
    </div>
  )
}