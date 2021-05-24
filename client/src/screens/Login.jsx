import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import DisneyNavbar from '../components/DisneyNavbar'
import './Login.css'

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
      <DisneyNavbar/>
      <div className="Background">
      <Form className='margin' onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
      }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-top">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name='username'
              value={username}
              onChange={handleChange}
            />
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name='password'
              value={password}
              onChange={handleChange}
            />
        </Form.Group>
        <div>
          <Button className='loginButton' variant="primary" type="submit">Submit</Button>
          <p className="inlineTogether"><Link to="/register" className="orRegister">or Register</Link></p>
        </div>
      </Form>
      </div>
    </div>
  )
}