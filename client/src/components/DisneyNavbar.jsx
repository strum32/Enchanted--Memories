import { React, Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './DisneyNavbar.css';

export default function DisneyNavbar() {

  return (
      <Navbar sticky='top' bg="light" variant="dark">a
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <LinkContainer to='/'>
        <Nav.Link>
            Home
        </Nav.Link>
        </LinkContainer>
      <NavDropdown title="Parks" id="collasible-nav-dropdown">
          <LinkContainer to='/park/MagicKingdom'> 
          <NavDropdown.Item>
            Magic Kingdom
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/park/HollywoodStudios'>
          <NavDropdown.Item>
            Hollywood Studios
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/park/AnimalKingdom'>
          <NavDropdown.Item>
            Animal Kingdom
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/park/Epcot'>
          <NavDropdown.Item>
              Epcot
          </NavDropdown.Item>
          </LinkContainer>
       </NavDropdown>
        <NavDropdown title="Rides" id="collasible-nav-dropdown">
         <LinkContainer to='/rides/AllRides'>
          <NavDropdown.Item>
            All Rides
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/rides/FunForAll'>
          <NavDropdown.Item>
            Fun for All
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/rides/ThrillRides'>
          <NavDropdown.Item>
            Thrill Rides
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/rides/SpinningRides'>
          <NavDropdown.Item>
            Spinning Rides
          </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to='/photos/new'>
        <Nav.Link>
          Add a Photo
        </Nav.Link>
        </LinkContainer>
      <Nav>
        <LinkContainer to='/register'>
        <Nav.Link id="me-auto">
            Register
        </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
        <Nav.Link eventKey={2} id="me-auto">
            Login
        </Nav.Link>
        </LinkContainer>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
  )
}