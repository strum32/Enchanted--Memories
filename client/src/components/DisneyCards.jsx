import React from 'react'
import { Card, Button, CardDeck } from 'react-bootstrap'

export default function DisneyCards(props) {

  return (
    <CardDeck>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
          <Card.Title>{ }</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={} />
      <Card.Body>
          <Card.Title>{ }</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Img variant="top" src={} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
      <Card>
      <Card.Img variant="top" src={} />
      <Card.Body>
          <Card.Title>{ }</Card.Title>
        <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </CardDeck>
    
  )
}
