import { React, Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import { getAllParks } from "../services/parks";
import { getAllRides } from "../services/rides";
import { getAllPhotos } from '../services/photos';
import { getOnePark } from "../services/parks";
import { getOneRide } from "../services/rides";
import { postPhoto } from '../services/photos';
import { putPhoto } from '../services/photos';
import { destroyPhoto } from '../services/photos';
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
          </Switch>
        </Nav.Link>
      <NavDropdown title="Parks" id="collasible-nav-dropdown">
          <NavDropdown.Item>
          <Switch>
          <Route path="/park/:id">
          <ThemePark getOnePark={getOnePark}/>
              Magic Kingdom
            </Route>
            </Switch>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Switch>
          <Route path="/park/:id">
          <ThemePark getOnePark={getOnePark}/>
              Hollywood Studios
            </Route>
            </Switch>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Switch>
          <Route path="/park/:id">
          <ThemePark getOnePark={getOnePark}/>
              Animal Kingdom
            </Route>
            </Switch>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Switch>
          <Route path="/park/:id">
          <ThemePark getOnePark={getOnePark}/>
              Epcot
            </Route>
            </Switch>
          </NavDropdown.Item>
       </NavDropdown>
        <NavDropdown title="Rides" id="collasible-nav-dropdown">
          <NavDropdown.Item>
          <Switch>
          <Route path="/rides/:type">
          <ThemePark getOneRide={getAllRides}/>
              Fun for All
            </Route>
            </Switch>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Switch>
          <Route path="/rides/:type">
          <ThemePark getOneRide={getAllRides}/>
              Spinning Rides
            </Route>
            </Switch>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Switch>
          <Route path="/rides/:type">
          <ThemePark getOneRide={getAllRides}/>
              Thrill Rides
            </Route>
            </Switch>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
          <Switch>
            <Route path="/rides">
          <ThemePark getOneRide={getAllRides}/>
              By Park
            </Route>
            </Switch>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>Add a Photo</Nav.Link>
      <Nav>
        <Nav.Link id="position">
          <Switch>
          <Route>
            Sign Up
          </Route>
          </Switch>
        </Nav.Link>
        <Nav.Link eventKey={2} id="position">
          <Switch>
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
