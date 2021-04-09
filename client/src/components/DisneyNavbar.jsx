import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './DisneyNavbar.css';

export default function DisneyNavbar() {

  return (
      <Navbar sticky='top' bg="light" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <LinkContainer to='/'>
        <Nav.Link id='fontsize'>
            Home
        </Nav.Link>
        </LinkContainer>
      <NavDropdown title="Parks" id="collasible-nav-dropdown">
          <LinkContainer to='/park/MagicKingdom'> 
          <NavDropdown.Item id='fontsize'>
            Magic Kingdom
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/park/HollywoodStudios'>
          <NavDropdown.Item id='fontsize'>
            Hollywood Studios
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/park/AnimalKingdom'>
          <NavDropdown.Item id='fontsize'>
            Animal Kingdom
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/park/Epcot'>
          <NavDropdown.Item id='fontsize'>
              Epcot
          </NavDropdown.Item>
          </LinkContainer>
       </NavDropdown>
        <NavDropdown title="Rides" id="collasible-nav-dropdown">
         <LinkContainer to='/rides/AllRides'>
          <NavDropdown.Item id='fontsize'>
            All Rides
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/rides/FunForAll'>
          <NavDropdown.Item id='fontsize'>
            Fun for All
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/rides/ThrillRides'>
          <NavDropdown.Item id='fontsize'>
            Thrill Rides
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/rides/SpinningRides'>
          <NavDropdown.Item id='fontsize'>
            Spinning Rides
          </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to='/photos/new'>
        <Nav.Link id='fontsize'>
          Add a Photo
        </Nav.Link>
        </LinkContainer>
      <Nav>
        <LinkContainer to='/register'>
        <Nav.Link id="color">
            Register
        </Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
        <Nav.Link eventKey={2} id="color">
            Login
        </Nav.Link>
        </LinkContainer>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
  )
}