import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import DisneyNavbar from '../components/DisneyNavbar'
import './Login.css'

export default function Login(props) {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: ''
  // })
  // const { username, password } = formData;
  // const { handleLogin } = props;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }
  return (
    <div className='formContainer'>
      <DisneyNavbar/>
      <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    {/* <form className="login" onSubmit={(e) => {
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
      </form> */}
      </div>
    </div>
  )
}