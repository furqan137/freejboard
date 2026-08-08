import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthSignUp.css";

const AuthSignUp = () => {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5050/api/auth/signup", form);
      alert(response.data.message);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Sign up failed!");
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
        Already have an account?{" "}
        <span onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
          Log In
        </span>
      </p>
    </div>
  );
};

export default AuthSignUp;
