// import { useState, useEffect } from 'react'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import AllRides from './screens/AllRides'
import AnimalKingdom from './screens/AnimalKingdom'
import Home from './screens/Home'
import Epcot from './screens/Epcot'
import FunForAllRides from './screens/FunForAllRides'
import HollywoodStudios from './screens/HollywoodStudios'
import MagicKingdom from './screens/MagicKingdom'
import SpinningRides from './screens/SpinningRides'
import ThrillRides from './screens/ThrillRides'
import PhotosNew from './screens/PhotoNew'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
// import { loginUser, registerUser, removeToken, verifyUser } from './services/auth.js'
// import { putPhoto, destroyPhoto, postPhoto, getAllPhotos } from './services/photos'
// import { getOnePark, getAllParks } from './services/parks'
// import { getOneRide, getAllRides } from './services/rides'




function App(props){
//   const [currentUser, setCurrentUser] = useState(null)
//   const [parks, setParks] = useState([]);
//   const [photos, setPhotos] = useState([]);
//   const [rides, setRides] = useState([]);
//   const history = useHistory();

// useEffect(() => {
//   const handleVerify = async () => {
//     const currentUser = await verifyUser();
//     setCurrentUser(currentUser)
//   }
//   handleVerify();
// }, [])
  
//   const handleLogin = async (formData) => {
//     const currentUser = await loginUser(formData);
//     setCurrentUser(currentUser);
//     history.push('/');
//   }
//   const handleRegister = async (formData) => {
//     const currentUser = await registerUser(formData);
//     setCurrentUser(currentUser);
//     history.push('/');
//   }

//   const handleLogout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem('authToken');
//     removeToken();
//   }

//   useEffect(() => {
//     const fetchParks = async () => {
//       const parkList = await getAllParks();
//       setParks(parkList);
//     }
//     fetchParks();
//   }, [])

//   useEffect(() => {
//     const fetchRides = async () => {
//       const rideList = await getAllRides();
//       setRides(rideList);
//     }
//     fetchRides();
//   }, [])
  
//   useEffect(() => {
//     const fetchPhotos = async () => {
//       const photoList = await getAllPhotos();
//       setPhotos(photoList);
//     }
//     fetchPhotos();
//   }, [])

//   const handleCreate = async (formData) => {
//     const newPhoto = await postPhoto(formData);
//     setPhotos(prevState => [...prevState, newPhoto]);
//     history.push(`/parks`)
//   }

//   const handleUpdate = async (id, formData) => {
//     const updatedPhoto = await putPhoto(id, formData);
//     setPhotos((prevState) => prevState.map((photo) => photo.id === Number(id) ? updatedPhoto : photo))
//   }

//   const handleDelete = async (id) => {
//     await destroyPhoto(id);
//     setPhotos(prevState => prevState.filter((photo) => photo.id !== id))
//     history.push(`/parks`)
//   }

  return (

    <div className="App">
      <Router>    
      {/* <Layout
        currentUser={currentUser}
          handleLogout={handleLogout} > */}
          <Switch>
        <Route exact path='/' component={Home}>
        </Route>
        <Route path='/login' component={Login}>
            {/* <Login handleLogin={handleLogin}/> */}
        </Route>
        <Route path='/register' component={Register}>
            {/* <Register handleRegister={handleRegister}/> */}
        </Route>
          <Route path='/park/MagicKingdom' component={MagicKingdom}>
            {/* <ThemeParks
            parks={parks}
            getAllParks={getAllParks} /> */}

        </Route>
        <Route path='/park/Epcot' component={Epcot}>
            {/* <ThemePark
              getOnePark={getOnePark} />  */}
          </Route>
          <Route path='/park/AnimalKingdom' component={AnimalKingdom}>
            {/* <ThemePark
              getOnePark={getOnePark} />  */}
          </Route>
          <Route path='/park/HollywoodStudios' component={HollywoodStudios}>
            {/* <ThemePark
              getOnePark={getOnePark} />  */}
        </Route>
        <Route path='/rides/AllRides' component={AllRides}>
             {/* <ThemeParkRides
              rides={rides}
              getAllRides={getAllRides} />  */}
            
          </Route>
          <Route path='/rides/SpinningRides' component={SpinningRides}>
             {/* <ThemeParkRides
              rides={rides}
              getAllRides={getAllRides} />  */}
            
          </Route>
          <Route path='/rides/ThrillRides' component={ThrillRides}>
             {/* <ThemeParkRides
              rides={rides}
              getAllRides={getAllRides} />  */}
            
          </Route>
          <Route path='/rides/FunForAll' component={FunForAllRides}>
             {/* <ThemeParkRides
              rides={rides}
              getAllRides={getAllRides} />  */}  
        </Route>
        <Route path='/photos/new' component={PhotosNew}>
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
