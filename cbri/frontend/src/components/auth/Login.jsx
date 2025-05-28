import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '/src/assets/login.avif';
import signupImage from '/src/assets/6368592.jpg';
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Toggle between login and signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      // Sign in with Firebase Auth
      const res = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      const user = res.user;

      // Get user role from Firestore
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const role = userData.role;

        if (role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        setError('User role not found. Please contact admin.');
      }
    } catch (err) {
      if (err.code === 'auth/invalid-credential') {
        setError('Invalid credentials. Please check your email and password.');
      } else {
        console.error('Login error:', err);
        setError(err.message);
      }
    }
  };

  // Handle signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const trimmedEmail = email.trim();
      const trimmedName = name.trim();

      const res = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
      const user = res.user;

      // Store user details in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name: trimmedName,
        email: trimmedEmail,
        role,
      });

      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Sign Up error:', err);
      setError(err.message);
    }
  };

  const inputStyle = {
    padding: '10px',
    marginBottom: '15px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'rgb(32, 106, 117)',
    color: 'white',
    width: '100%',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const toggleTextStyle = {
    textAlign: 'center',
    marginTop: '20px',
    cursor: 'pointer',
    color: 'black',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'rgba(93, 159, 176, 0.1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '700px',
          height: '500px',
          backgroundColor: 'rgba(54, 123, 169, 0.8)',
          boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Login Form */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px',
            transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
            transform: isLogin ? 'translateX(0)' : 'translateX(100%)',
            opacity: isLogin ? 1 : 0,
            zIndex: 2,
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100%',
            width: '50%',
            backgroundColor: 'white',
          }}
        >
          {isLogin && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>Login</h2>
              {error && <p style={{ color: 'red' }}>{error}</p>}

              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
              <button
                style={buttonStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#206a75')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#274f56')}
                onClick={handleLogin}
              >
                Login
              </button>
              <p style={{ textAlign: 'center', marginTop: '10px' }}>
                Don't have an account?{" "}
                <span
                  onClick={toggleForm}
                  style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Sign Up
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Signup Form */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px',
            transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
            transform: isLogin ? 'translateX(-100%)' : 'translateX(0)',
            opacity: isLogin ? 0 : 1,
            zIndex: 2,
            position: 'absolute',
            left: '0',
            top: '0',
            height: '100%',
            width: '50%',
            backgroundColor: 'white',
          }}
        >
          {!isLogin && (
            <div>
              <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
              {error && <p style={{ color: 'red' }}>{error}</p>}

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={inputStyle}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
              <button
                style={buttonStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#206a75')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#274f56')}
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <p style={{ textAlign: 'center', marginTop: '10px' }}>
                Already have an account?{" "}
                <span
                  onClick={toggleForm}
                  style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Login
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Right Side Image */}
        <div
          style={{
            flex: '1',
            backgroundColor: '#206a75',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.6s ease-in-out',
            transform: isLogin ? 'translateX(0)' : 'translateX(100%)',
            zIndex: 1,
            position: 'absolute',
            right: '0',
            top: '0',
            height: '100%',
            width: '50%',
          }}
        >
          <div>
            {isLogin ? (
              <img src={loginImage} alt="Login Illustration" style={{ width: '100%', height: 'auto' }} />
            ) : (
              <img src={signupImage} alt="Signup Illustration" style={{ width: '100%', height: 'auto' }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
