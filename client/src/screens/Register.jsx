import { useState } from 'react';
import DisneyNavbar from '../components/DisneyNavbar'
import "./Register.css"

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className="Background">
    <form onSubmit={(e) => {
      e.preventDefault();
     handleRegister(formData);
    }}>
      <DisneyNavbar />
      <h3>Register</h3>
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
      <br/>
      <label htmlFor="email">
        Email:
      </label>
      <input
        id='email'
        type='text'
        name='email'
        value={email}
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
      <button>Submit</button>
    </form>
    </div>
  )
}