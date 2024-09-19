import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import axios from 'axios';
import './Auth.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      
      // Show success message
      alert(response.data);  
      
      // Redirect to Home page after successful login
      navigate('/home');
      
    } catch (error) {
      // Show error message
      alert("Error: " + error.response.data);  
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
