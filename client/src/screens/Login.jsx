import { useState } from 'react';
import { Link } from 'react-router-dom';
import DisneyNavbar from '../components/DisneyNavbar'
import App from '../App.js';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className='formContainer'>
    <form className="login" onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
      }}>
        <DisneyNavbar />
      <h3>Login</h3>
      <label htmlFor="login">
        Username:
      </label>
      <input
        id='login'
        type='text'
        name='username'
        value={username}
        onChange={handleChange}
      />
      <br />
      <label htmlFor='password'>
        Password:
      </label>
      <input
        id='password'
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
      />
      <br />
      <Link to="/register">Register</Link>
      <button>Submit</button>
      </form>
      </div>
  )
}