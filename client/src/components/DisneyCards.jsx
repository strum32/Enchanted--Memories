import React from 'react'
import { Card, Button, CardDeck } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "./DisneyCards.css"

export default function DisneyCards(props) {

  return (
    <CardDeck className="cardMargin" id="width">
    <Card id="top">
      <Card.Img variant="top" id='height' src="https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80" />
      <Card.Body className="cardWidth">
          <Card.Title>Magic Kingdom</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
        </Card.Text>
        <LinkContainer to='/park/MagicKingdom'>
          <Button variant="primary">Go somewhere</Button>
        </LinkContainer>
      </Card.Body >
    </Card>
    <Card id="top">
      <Card.Img variant="top" id='height' src='https://images.unsplash.com/photo-1590604493788-b8192a3bd4d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' />
      <Card.Body className="cardWidth">
          <Card.Title>Hollywood Studios</Card.Title>
        <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <LinkContainer to='/park/HollywoodStudios'>
          <Button variant="primary">Go somewhere</Button>
          </LinkContainer>
      </Card.Body>
    </Card>
    <Card id="top">
      <Card.Img variant="top" id='height' src='https://images.unsplash.com/photo-1553526630-81e8f0d6ffde?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80' />
      <Card.Body className="cardWidth">
        <Card.Title>Epcot</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
        </Card.Text>
        <LinkContainer to='/park/Epcot'>
        <Button variant="primary">Go somewhere</Button>
        </LinkContainer>
      </Card.Body>
      </Card>
      <Card id="top">
      <Card.Img variant="top" id='height' src='https://images.unsplash.com/photo-1522008629172-0c17aa47d1ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
      <Card.Body className="cardWidth">
          <Card.Title>Animal Kingdom</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
        </Card.Text>
        <LinkContainer to='/park/AnimalKingdom'>
        <Button variant="primary">Go somewhere</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  </CardDeck>
    
  )
}
