import { React, Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import './DisneyNavbar.css';

export default function DisneyNavbar() {

  return (
      <Navbar sticky='top' bg="light" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link>
          <Link to='/'>
            Home
          </Link>
        </Nav.Link>
      <NavDropdown title="Parks" id="collasible-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/park/:id">
              Magic Kingdom
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/park/:id">
              Hollywood Studios
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/park/:id">
              Animal Kingdom
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/park/:id">
              Epcot
            </Link>
          </NavDropdown.Item>
       </NavDropdown>
        <NavDropdown title="Rides" id="collasible-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/rides">
              All Rides
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/rides/:type">
              Fun for All
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/rides/:type">
              Thrill Rides
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/rides/:type">
              Spinning Rides
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>
          <Link to="photo/new"> 
            Add a Photo
          </Link>   
        </Nav.Link>
      <Nav>
        <Nav.Link id="me-auto">
          <Link to=''>
            Register
          </Link>
        </Nav.Link>
        <Nav.Link eventKey={2} id="me-auto">
          <Link>
            Login
          </Link>
        </Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
  )
}