import React from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/userSlice';
import useForm from '../hooks/useForm';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit } = useForm({ email: '', password: '' });

  const loginUser = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(setToken(data.token));
        // Handle success (e.g., redirect to dashboard)
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e, loginUser)}>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
