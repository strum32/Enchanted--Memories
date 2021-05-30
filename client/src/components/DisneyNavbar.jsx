import { Link } from 'react-router-dom'
import img1 from '../assets/logo.png'

export default function DisneyNavbar(props) {

  return (
<header>
  <p className='fontColorHeader'>This project is not affiliated or associated with the Walt Disney Company. This projects only purpose is to showcase my skills and I will not be recieving any compensation now or in the future for this website.</p>  
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className='NavBar1' className="container-fluid">
    <img className="navbar-brand" src={img1} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/'>  
            Home
          </Link>  
        </li>
        <li> 
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Parks
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to='/parks/1'>  
              <li className="dropdown-item">Enchanted Kingdom</li>
            </Link> 
              <li><hr className="dropdown-divider" /></li>
            <Link to='/parks/2'>
              <li className="dropdown-item">Enchanted Studios</li>
            </Link>
                <li><hr className="dropdown-divider" /></li>
            <Link to='/parks/3'>
              <li className="dropdown-item">Epcot</li>
            </Link>
              <li><hr className="dropdown-divider" /> </li>
            <Link to='/parks/4'>
              <li className="dropdown-item">Enchanted Animals</li>
            </Link>
          </ul>
        </li>
        <Link to='/rides'> 
          <li className="nav-item">Attractions </li>
        </Link>
        <Link to="/photos/new"> 
          <li className="nav-item">Add a Photo </li>
        </Link>
        <Link to='/register'> 
          <li className="nav-item">Register</li>
        </Link>
        <Link to='/login'> 
          <li className="nav-item">Login</li>
        </Link> 
      </ul>
    </div>
  </div>
</nav>
</header>
  )
}