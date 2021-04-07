import { useState, useEffect } from 'react'
import DisneyCarousel from './components/DisneyCarousel'
import DisneyNavbar from './components/DisneyNavbar'
import DisneyCards from './components/DisneyCards'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import ThemePark from './screens/ThemePark'
import ThemeParks from './screens/ThemeParks'
import ThemParkRide from './screens/ThemeParkRide'
import ThemeParkRides from './screens/ThemeParkRides'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth.js'
import { putPhoto, destroyPhoto, postPhoto, getAllPhotos } from './services/photos'
import { getOnePark, getAllParks } from './services/parks'
import { getOneRide, getAllRides } from './services/rides'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props){
  const [currentUser, setCurrentUser] = useState(null)
  const [parks, setParks] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [rides, setRides] = useState([]);
  const history = useHistory();

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
    const fetchPhotos = async () => {
      const photoList = await getAllPhotos();
      setPhotos(photoList);
    }
    fetchPhotos();
  }, [])

  const handleCreate = async (formData) => {
    const newPhoto = await postPhoto(formData);
    setPhotos(prevState => [...prevState, newPhoto]);
    history.push(`/parks`)
  }

  const handleUpdate = async (id, formData) => {
    const updatedPhoto = await putPhoto(id, formData);
    setPhotos((prevState) => prevState.map((photo) => photo.id === Number(id) ? updatedPhoto : photo))
  }

  const handleDelete = async (id) => {
    await destroyPhoto(id);
    setPhotos(prevState => prevState.filter((photo) => photo.id !== id))
    history.push(`/parks`)
  }

  return (
    <div className="App">
      <Router>
        <DisneyNavbar />
        <DisneyCarousel />
        <DisneyCards parks={parks}/>
        
      {/* <Layout
        currentUser={currentUser}
          handleLogout={handleLogout} > */}
          <Switch>
        <Route path='/'>
        </Route>
        <Route path='/login'>
            <Login handleLogin={handleLogin}/>
        </Route>
        <Route path='/register'>
            <Register handleRegister={handleRegister}/>
        </Route>
          <Route path='/parks'>
            <ThemeParks
            parks={parks}
            getAllParks={getAllParks} />

        </Route>
        <Route path='/parks/:id'>
            <ThemePark
              getOnePark={getOnePark} /> 
        </Route>
        <Route path='/rides'>
             <ThemeParkRides
              rides={rides}
              getAllRides={getAllRides} /> 
            
        </Route>
        <Route path='/rides/:id'>
            <ThemParkRide
              getOneRide={getOneRide}/>
        </Route>
        <Route path='/photos/new'>
        {/* <PhotoCreate
          handleCreate={handleCreate}
        /> */}
      </Route>
      <Route path="/photos/edit/:id">
        {/* <PhotoEdit photos={photos}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          photos={photos}
          /> */}
        </Route>
      </Switch>
      {/* </Layout> */}
    </Router> 
   </div>
  );
}

export default App;
