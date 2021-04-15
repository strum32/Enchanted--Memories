import { useState, useEffect } from 'react'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import AllRides from './screens/AllRides'
import RidesDetail from './screens/RidesDetail'
import Home from './screens/Home'
import ParkDetail from './screens/ParkDetail'
import FunForAllRides from './screens/FunForAllRides'
import SpinningRides from './screens/SpinningRides'
import ThrillRides from './screens/ThrillRides'
import PhotosNew from './screens/PhotoNew'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth.js'
import { putPhoto, destroyPhoto, postPhoto, getAllPhotos } from './services/photos'
import PhotoDelete from './components/PhotoDelete.jsx'
import AllPhotos from './components/AllPhotos.jsx'





function App(props){
  const [currentUser, setCurrentUser] = useState(null)
  const [photos, setPhotos] = useState([]);
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
          <Switch>
        <Route exact path='/' component={Home} />
          
        <Route path='/login' component={Login}>
              
        </Route>
        <Route path='/register' component={Register}>
        </Route>
        <Route path='/parks/:id'>
            <ParkDetail />
            <AllPhotos />
        </Route>
        <Route path='/rides'>
            <AllRides />
        </Route>
        <Route path='/rides/:id'>
            <RidesDetail />
        </Route>
        <Route path='/rides/SpinningRides' component={SpinningRides}>

        </Route>
        <Route path='/rides/ThrillRides' component={ThrillRides}>
        
        </Route>
        <Route path='/rides/FunForAll' component={FunForAllRides}>

        </Route>
        <Route path='/photos/new' component={PhotosNew}>

        </Route>
        <Route path="/photos/edit/:id">
            <PhotoDelete photos={photos} handleDelete={handleDelete}/>
        </Route>
        </Switch>
    </Router> 
   </div>
  );
}

export default App;