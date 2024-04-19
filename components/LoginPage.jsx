import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LoginPage = () => {
  // State to manage input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

   // Use useNavigate hook to get access to the history object
   const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your authentication logic
    if (username === 'admin' && password === 'agent') {
      // If username and password match, proceed with login
      console.log('Login successful');
      setError('');
      // Reset input fields after successful login
      // setUsername('');
      // setPassword('');
      // Redirect to the dashboard
        navigate('/dashboard');
        alert("Hello, Admin");
    } else {
      // If username and password don't match, display error message
      setError('Invalid username or password');
      
    }
  };

  return (
    <div className='login_page'>
    <div className="login-container">
      <h1>Welcome!</h1>
      <h6>Enter your Credentials to come onboard</h6>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
      {error && <p className="error-message">{error}</p>}
          <input placeholder='Enter name' 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input placeholder='Enter Password'
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
      <div className='backdrop'>
      </div>
    </div>
  );
};

export default LoginPage;
