import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
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
    <div>
      <DisneyNavbar/>
    <div className="Background">
        <Form className='margin' onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="margin-top1">Username</Form.Label>
            <Form.Control
              type="Username"
              placeholder="Create a Username"
              name='username'
              value={username}
              onChange={handleChange}
            />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name='email'
              value={email}
              onChange={handleChange}
            />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a Password"
              name='password'
              value={password}
              onChange={handleChange}
            />
        </Form.Group>
          <Button className='registerButton' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}