import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert
import './signup.css';

import user_icon from '../../assets/person.png';
import mail_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import videobg from '../../assets/videoplayback.mp4';

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && /\d/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long and include a number.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isValid) return;

    setLoading(true);
    setSignupError(""); 
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });
      const data = await response.json();
      if (response.status === 201) {
        console.log("SignUp successful: ", data);
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful!',
          text: 'You can now log in.',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/signin');
        });
      } else {
        setSignupError(data.message || "Sign up failed. Please try again.");
         Swal.fire({
          icon: 'error',
          title: 'Sign Up Failed!',
          text: signupError,
          confirmButtonText: 'OK'
        });
        console.error("SignUp failed: ", data);
      }
    } catch (error) {
      setSignupError("An error occurred. Please try again later.");
      
    
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: "An error occurred. Please try again later.",
        confirmButtonText: 'OK'
      });
      console.error("Error:", JSON.stringify(error, null, 2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop id="video-background">
        <source src={videobg} type="video/mp4" />
      </video>
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="forum">
          <div className="input">
            <img src={user_icon} alt="name" />
            <input 
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={mail_icon} alt="Email" />
            <input 
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className="input">
            <img src={password_icon} alt="Password" />
            <input 
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          {signupError && <div className="error">{signupError}</div>}
          <div className="submit">
            <button className="submitbtn" type="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="login-link">
          <p>Already have an account? <a href="/signin">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
