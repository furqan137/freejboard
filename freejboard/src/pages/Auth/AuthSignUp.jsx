import React, { useState } from "react";
import axios from "axios";
import "./AuthSignUp.css";

const AuthSignUp = ({ toggleAuthMode }) => {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing up with", form);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", form);
      alert(response.data.message);
      // Handle successful sign-up and maybe redirect
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <p>Sign up to get started!</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Ex: abc@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="primary-button">Sign Up</button>
      </form>

      <div className="auth-social">
        <p>Or Continue With</p>
        <button className="social-button google">Google</button>
        <button className="social-button facebook">Facebook</button>
        <button className="social-button twitter">Twitter</button>
      </div>

      <p className="auth-footer">
        Already have an account? <span onClick={toggleAuthMode}>Log In</span>
      </p>
    </div>
  );
};

export default AuthSignUp;
