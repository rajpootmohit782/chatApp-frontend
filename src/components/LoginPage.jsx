import React, { useState } from 'react';
import axios from 'axios';
import './css/loginPage.css'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://4mxs3s-3000.csb.app/login', { email, password });

      if (response.status === 200) {
        // Login successful, handle user data or redirect to dashboard
        console.log('Login successful:', response.data.user);
      } else {
        // Handle login error
        console.log('Login failed:', response.data.msg);
      }
    } catch (err) {
      console.log('Error:', err.message);
    }
  };

  return (
    <div className='login-form'>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
