import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Layout(props) {
  return (
    <div className='App'>
      {/* <header>
          <>
            <p>{ currentUser.username }</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          <Link to='/login'>Login/Register</Link>
        <hr />
          <>
            <Link to="/parks">Home</Link>
            <Link>Theme Parks</Link>
            <Link to="/photos/new">Add Photos</Link>
            <hr/>
          </>
      </header>
      {props.children} */}
    </div>
  )
}
