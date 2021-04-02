import { React, Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import logo from '../assets/Logo.png'

export default function DisneyNavbar() {
  return (
    <Navbar sticky='top'>
      {/* <Navbar.Brand><img src={logo} alt="Company Logo"/></Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}
