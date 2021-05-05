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
      <Form className='margin'onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
      }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="margin-top">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name='username'
              value={username}
              onChange={handleChange}
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
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
          <Button className="margin-position" id="margin1" variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/register" className="height1">or Register</Link>
      </Form>
      </div>
    </div>
  )
}