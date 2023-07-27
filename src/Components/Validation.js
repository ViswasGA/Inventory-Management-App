import React, { useState } from "react";
import './login.css';

export const L = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    const isValidPassword = validatePassword();

    if (isValidPassword) {
      console.log(email);
      // Proceed with login logic
    }
  }

  const validatePassword = () => {
    // Define your password validation criteria
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!password.match(passwordRegex)) {
      setError('Password should contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.');
      return false;
    }

    setError('');
    return true;
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          className="hi"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <label htmlFor="password">Confirm password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="confirm password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>

    </div>
  )
}
