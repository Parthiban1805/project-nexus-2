import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';  
import Swal from 'sweetalert2';
import './signin.css'; 

import mail_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import videobg from '../../assets/videoplayback.mp4';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!isValid) return;

    console.log("Trying to sign in...");
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Signin successful : ', data);
        Swal.fire({
          icon: 'success',
          title: 'Sign In Successful!',
          text: 'Welcome back!',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/dashboard');
        });
      } else {
        console.error('Signin failed : ', data);
        Swal.fire({
          icon: 'error',
          title: 'Sign In Failed!',
          text: data.message || 'Invalid email or password.',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error("Error:", error);
        Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred. Please try again later.',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop id="video-background">
        <source src={videobg} type="video/mp4" />
      </video>
    
      <div className="container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="forum">
          <div className={`input ${emailError ? 'error' : ''}`}>
            <img src={mail_icon} alt="Email" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className={`input ${passwordError ? 'error' : ''}`}>
            <img src={password_icon} alt="Password" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div className="submit">
            <button className="submitbtn" type="submit">Sign In</button>
          </div>
        </form>
        
        <div className="register-link">
          <p>Don't have an account? <Link to="/signup">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
