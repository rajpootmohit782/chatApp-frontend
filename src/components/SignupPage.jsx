import React, { useState } from 'react';
import './css/signupPage.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignup = () => {
    // Clear previous error messages
    setNameError('');
    setEmailError('');
    setPasswordError('');

    // Email validation: Check if email contains '@'
    if (!email.includes('@')) {
      setEmailError('Email should include @');
      return;
    }

    // Name validation: Check if name is not empty
    if (name.trim() === '') {
      setNameError('Name is required');
      return;
    }

    // Password validation: Check if password is at least 6 characters long
    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long');
      return;
    }

    // If all validations pass, proceed with signup logic (here, we'll just log the data)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);

    adduser()

  };

  const adduser = async()=> {
    const obj = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
  console.log(obj)
      try{
        const response = await axios.post('https://4mxs3s-3000.csb.app/signup', obj);
        console.log(response)
      }catch(err){
          console.log(err)
      }
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="error-message">{nameError}</p>}
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <button onClick={handleSignup}>Sign Up</button>
      <button ><Link to="/login">Go to Login</Link></button>
    </div>
  );
};

export default SignupPage;
