import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/login.avif';
import signupImage from '../assets/6368592.jpg';
import axios from 'axios';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/Landing');
    } catch (error) {
      setError('Failed to log in. Check your email and password.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/Landing');
    } catch (error) {
      setError('Failed to create an account. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Left: Login / Sign Up Form */}
        <div style={{ ...styles.form, ...(!isLogin ? styles.hiddenForm : {}) }}>
          <h2>Login</h2>
          {error && <p style={styles.error}>{error}</p>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={handleLogin}>
            Login
          </button>
          <p style={styles.switchText} onClick={toggleForm}>
            Don’t have an account? Sign Up
          </p>
        </div>

        <div style={{ ...styles.form, ...(isLogin ? styles.hiddenForm : {}) }}>
          <h2>Sign Up</h2>
          {error && <p style={styles.error}>{error}</p>}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button style={styles.button} onClick={handleSignUp}>
            Sign Up
          </button>
          <p style={styles.switchText} onClick={toggleForm}>
            Already have an account? Login
          </p>
        </div>

        {/* Right: Image Section */}
        <div style={styles.imageSection}>
          <img
            src={isLogin ? loginImage : signupImage}
            alt="Auth Visual"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(93, 159, 176, 0.1)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    width: '700px',
    height: '500px',
    backgroundColor: 'rgba(54, 123, 169, 0.8)',
    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
  },
  form: {
    flex: 1,
    padding: '40px',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 2,
    transition: 'opacity 0.5s ease',
  },
  hiddenForm: {
    opacity: 0,
    pointerEvents: 'none',
  },
  imageSection: {
    flex: 1,
    backgroundColor: '#206a75',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    zIndex: 1,
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
  },
  button: {
    padding: '10px',
    backgroundColor: 'rgb(32, 106, 117)',
    color: 'white',
    width: '100%',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  switchText: {
    marginTop: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'black',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Login;
