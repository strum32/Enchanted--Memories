import { useState } from 'react';
import { NavLink, useHistory  } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import DisneyNavbar from '../components/DisneyNavbar'
import "../services/auth"
import './Login.css'
import { loginUser } from '../services/auth';

export default function Login(props) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSignIn = (event) => {
    event.preventDefault();

    loginUser(formData)
      .then((user) => {
        handleLogin(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setFormData({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    const toggleForm = formData.isError ? "danger" : "";
    if (formData.isError) {
      return (
        <div>
          <Button id="sign-in-button" type="submit" className={toggleForm}>
            {formData.errorMsg}
          </Button>
          <p className="inlineTogether-Login"><NavLink to="/register" className="orRegister">or Register</NavLink></p>
        </div>
      );
    } else {
      return (
        <div>
          <Button className='loginButton' id="sign-in-button" type="submit">
            Submit
          </Button>
          <p className="inlineTogether-Login"><NavLink to="/register" className="orRegister">or Register</NavLink></p>
        </div>
      );
    }
  };

  return (
    <div className="background">
      <DisneyNavbar/>
        <div className="page-container">
          <div className="form-container1">
          <Form className='margin-Login' onSubmit={onSignIn}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-top-Login">Username</Form.Label>
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
        {renderError()}    
      </Form>
        <div className="signup">
          </div>
        </div>
      </div>
    </div>
  );
};