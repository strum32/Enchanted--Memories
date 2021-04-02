import './App.css';
import DisneyNavbar from "./components/DisneyNavbar"
import DisneyCarousel from "./components/DisneyCarousel"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    <Router>
        <DisneyNavbar />
        <DisneyCarousel />
        <Switch>
          <Route path='/' />
          <Route path='/Parks' />
          <Route path='/Rides' />
          <Route path='/Photos' />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
