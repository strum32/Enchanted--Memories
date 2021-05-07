import { useState, useEffect } from 'react'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import AllRides from './screens/AllRides'
import RidesDetail from './screens/RidesDetail'
import Home from './screens/Home'
import ParkDetail from './screens/ParkDetail'
import PhotoNew from './screens/PhotoNew'
import AllParks from './screens/AllParks'
import DisneyNavbar from './components/DisneyNavbar'
import DisneyCarousel from './components/DisneyCarousel'
import DisneyCreditCard from './components/DisneyCreditCard'
import DisneyRides from './components/DisneyRides'
import DisneyPhotos from './components/DisneyPhotos'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth.js'
import { putPhoto, destroyPhoto, postPhoto, getOnePhoto } from './services/photos'
import { getAllParks, getOnePark } from './services/parks'
import { getAllRides, getOneRide } from './services/rides'
import PhotoEdit from './components/PhotoEdit.jsx'
import AllPhotos from './components/AllPhotos.jsx'
import Layout from './Layout/Layout.jsx'
import PhotoDetail from './components/PhotoDetail.jsx'





function App(){
  const [currentUser, setCurrentUser] = useState(null)
  const [photos, setPhotos] = useState([]);
  const [rides, setRides] = useState([]);
  const [parks, setParks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchParks = async () => {
      const parkList = await getAllParks();
      setParks(parkList);
    }
    fetchParks();
  }, [])
  
  useEffect(() => {
    const fetchRides = async () => {
      const rideList = await getAllRides();
      setRides(rideList);
    }
    fetchRides();
  }, [])
  
useEffect(() => {
  const handleVerify = async () => {
    const currentUser = await verifyUser();
    setCurrentUser(currentUser)
  }
  handleVerify();
}, [])
  
  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push('/');
  }
  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  const handleCreate = async (formData) => {
    const newPhoto = await postPhoto(formData);
    setPhotos(prevState => [...prevState, newPhoto]);
    history.push(`/photos`)
  }

  const handleUpdate = async (id, formData) => {
    const updatedPhoto = await putPhoto(id, formData);
    setPhotos((prevState) => prevState.map((photo) => photo.id === Number(id) ? updatedPhoto : photo))
  }

  const handleDelete = async (id) => {
    await destroyPhoto(id);
    setPhotos(prevState => prevState.filter((photo) => photo.id !== id))
    history.push(`/parks/:id`)
  }

  return (

    <div className="App">
      <Router>
          <Switch>
          <Route exact path='/' component={Home} >
            <DisneyNavbar />
            <DisneyCarousel />
            <AllParks parks={parks} />
            <DisneyRides />
            <DisneyCreditCard />
            <DisneyPhotos />
          </Route>

          <Route path='/login' component={Login}>
            <Login handleLogin={handleLogin} />
          </Route>
          
          <Route path='/register' component={Register}>
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path='/parks/:id'>
            <DisneyNavbar />
            <ParkDetail getOnePark={getOnePark} />
          </Route>

          <Route path='/rides'>
            <AllRides rides={rides}/>
          </Route>

          <Route path='/rides/:id'>
            <RidesDetail
              getOneRide={getOneRide}
            />
          </Route>

          <Route path='/photos/new'>
            <PhotoNew handleCreate={handleCreate} />
          </Route>
          
          <Route path="/photos/:id">
            <PhotoDetail getOnePhoto={getOnePhoto}/>
          </Route>

          <Route path="/photos/edit/:id">
            <PhotoEdit
              photos={photos}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </Route>
          </Switch>
      </Router> 
    </div>
  );
}

export default App;