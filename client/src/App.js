import './App.css';
import DisneyNavbar from "./components/DisneyNavbar"
import DisneyCarousel from "./components/DisneyCarousel"
import DisneyCards from './components/DisneyCards'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import DisneyCards from './components/DisneyCards';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path='/' />
            <DisneyNavbar />
            <DisneyCarousel />
            <DisneyCards />
          <Route path='/parks' />
            <DisneyNavbar />
          <Route path='/rides' />
            <DisneyNavbar />
          <Route path='/photos' />
            <DisneyNavbar />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
