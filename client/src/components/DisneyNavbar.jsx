import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './DisneyNavbar.css';
import img1 from '../assets/logo.png'

export default function DisneyNavbar(props) {

  return (
    // <div>
    //   <p>{currentUser.username}</p>
    //   <button onClick={handleLogout}>Logout</button>
    //   <div>
    //     <LinkContainer to='/login'>Logout<LinkContainer
    <Navbar sticky='top' bg="light" variant="dark">
      <Navbar.Brand>
        <img
          src={img1}
          alt='logo'
          width='200'
          height='60'
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <LinkContainer to='/'>
        <Nav.Link id='fontsize'>
            Home
        </Nav.Link>
        </LinkContainer>
      <NavDropdown title="Parks" id="collasible-nav-dropdown">
          <LinkContainer to='/parks/1'> 
          <NavDropdown.Item id='fontsize'>
            Magic Kingdom
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/parks/2'>
          <NavDropdown.Item id='fontsize'>
            Hollywood Studios
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/parks/3'>
          <NavDropdown.Item id='fontsize'>
            Epcot
          </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to='/parks/4'>
          <NavDropdown.Item id='fontsize'>
            Animal Kingdom
          </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to='/rides'>
        <Nav.Link id='fontsize'>
            Attractions
        </Nav.Link>
        </LinkContainer>
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
//   </div>
// </div>
  )
}