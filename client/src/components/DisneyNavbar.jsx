import { React, Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import { getAllParks } from "../assets/Services/parks";
import DisneyCarousel from "./DisneyCarousel"
import DisneyCards from './DisneyCards'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './DisneyNavbar.css'

export default function DisneyNavbar() {
  const [parks, setParks] = useState([]);
  const [photos, setPhotos] = usestate([]);
  const [rides, setRides] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const fetchParks = async () => {
      const parkList = await getAllParks();
      setParks(parkList)
    }
    fetchParks();
  }, [])

  useEffect(() => {
    const fetchPhotos = async () => {
      const photoList = await getAllPhotos();
      setPhotos(photoList);
    }
    fetchPhotos();
  }, [])
  const handleCreate = async (formData) => {
    const newPhoto = await postPhoto(formData);
    setPhotos(prevState => [...prevState, newPhoto]);
    history.push(`/parks/:id`)
  }

  useEffect(() => {
    const fetchRides = async () => {
      const RidesList = await getAllRides();
      setRides(rideList);
    }
    fetchRides
  }, [])

  return (
    <div>
    <Router>
      <Navbar sticky='top' bg="light" variant="dark">
      {/* <Navbar.Brand><img src={logo} alt="Company Logo" className="logo-size"/></Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav.Link >
        <Switch>
          <Route to='/'>
            <DisneyNavbar />
            <DisneyCarousel />
            <DisneyCards />
            Home
          </Route>
        </Nav.Link>
      <NavDropdown title="Parks" id="collasible-nav-dropdown">
          <NavDropdown.Item>
          <Route path="/park/:id">
          <ThemePark getOnePark={getOnePark}/>
              Magic Kingdom
            </Route>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Route path="/park/:id">
          <ThemePark getOnePark={getOnePark}/>
              Hollywood Studios
            </Route>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Route path="/park/:id">
          <ThemePark getOnePark={getOnePark}/>
              Animal Kingdom
            </Route>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Route path="/park/:id">
          <ThemePark getOnePark={getOnePark}/>
              Epcot
            </Route>
          </NavDropdown.Item>
       </NavDropdown>
        <NavDropdown title="Rides" id="collasible-nav-dropdown">
          <NavDropdown.Item>
          <Route path="/rides/:type">
          <ThemePark getOneRide={getAllRides}/>
              Fun for All
            </Route>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Route path="/rides/:type">
          <ThemePark getOneRide={getAllRides}/>
              Spinning Rides
            </Route>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Route path="/rides/:type">
          <ThemePark getOneRide={getAllRides}/>
              Thrill Rides
            </Route>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Route path="/rides">
          <ThemePark getOneRide={getAllRides}/>
              By Park
            </Route>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>Add a Photo</Nav.Link>
      <Nav>
        <Nav.Link id="position">
          <Route>
            Sign Up
          </Route>
        </Nav.Link>
        <Nav.Link eventKey={2} id="position">
          <Route>
            Sign in
          </Route>
        </Switch>
        </Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </Router>
    </div>
  )
}
