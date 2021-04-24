import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import DisneyNavbar from '../components/DisneyNavbar'
import "./Register.css"

export default function Register(props) {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // })
  // const { username, email, password } = formData;
  // const { handleRegister } = props;

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }
  return (
    <div>
      <DisneyNavbar/>
    <div className="Background">
      <Form className='margin'>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="margin-position">Username</Form.Label>
          <Form.Control className="margin-position" type="Username" placeholder="Create a Username" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="margin-position">Email</Form.Label>
          <Form.Control className="margin-position" type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label className="margin-position">Password</Form.Label>
          <Form.Control className="margin-position" type="password" placeholder="Create a Password" />
        </Form.Group>
          <Button className="margin-position" variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    {/* <form onSubmit={(e) => {
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
    </form> */}
      </div>
    </div>
  )
}