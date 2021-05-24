import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import './DisneyNavbar.css';
import img1 from '../assets/logo.png'

export default function DisneyNavbar(props) {

  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className='NavBar1' class="container-fluid">
    <img class="navbar-brand" src={img1} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/'>  
            Home
          </Link>  
        </li>
        <li> 
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Parks
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to='/parks/1'>  
              <li class="dropdown-item">Enchanted Kingdom</li>
            </Link> 
              <li><hr class="dropdown-divider" /></li>
            <Link to='/parks/2'>
              <li class="dropdown-item">Enchanted Studios</li>
            </Link>
                <li><hr class="dropdown-divider" /></li>
            <Link to='/parks/3'>
              <li class="dropdown-item">Epcot</li>
            </Link>
              <li><hr class="dropdown-divider" /> </li>
            <Link to='/parks/4'>
              <li class="dropdown-item">Enchanted Animals</li>
            </Link>
          </ul>
        </li>
        <Link to='/rides'> 
          <li class="nav-item">Attractions </li>
        </Link>
        <Link to="/photos/new"> 
          <li class="nav-item">Add a Photo </li>
        </Link>
        <Link to='/register'> 
          <li class="nav-item">Register</li>
        </Link>
        <Link to='/login'> 
          <li class="nav-item">Login</li>
        </Link> 
      </ul>
    </div>
  </div>
</nav>
  )
}