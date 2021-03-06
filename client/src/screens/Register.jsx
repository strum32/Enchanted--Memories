import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../services/auth';
import DisneyNavbar from '../components/DisneyNavbar'
import "./Register.css"

export default function Register(props) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    isError: false,
    errorMsg: ""
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

  const onRegister = (event) => {
    event.preventDefault();

    registerUser(formData)
      .then((user) => {
        handleRegister(user);
      })
      .then(() => history.push("/login"))
      .catch((error) => {
        console.error(error);
        setFormData({
          username: '',
          password: '',
          email: '',
          isError: true,
          errorMsg: 'Invalid Credentials'
        });
      });
  };

  const renderError = () => {
    const toggleForm = formData.isError ? "danger" : "";
    if (formData.isError) {
      return (
        <div>
          <Button id="sign-in-button" type="submit" className={toggleForm} id='invalidCredentials'>
            {formData.errorMsg}
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button className='registerButton' id="sign-in-button" type="submit">
            Submit
          </Button>
        </div>
      );
    }
  };

  return (
    <div>
      <DisneyNavbar/>
    <div className="Background">
        <Form className='margin' onSubmit={onRegister}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="margin-top-Register">Username</Form.Label>
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
          <Form.Text className="text-muted">
            Password must be at least 6 characters long
          </Form.Text>
        </Form.Group>
          {renderError()}  
        </Form>
      </div>
    </div>
  )
}