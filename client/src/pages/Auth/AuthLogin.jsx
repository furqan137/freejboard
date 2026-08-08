import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthLogin.css";

const AuthLogin = () => {
  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.role) {
      alert("Please select a role!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5050/api/auth/login", {
        email: form.email,
        password: form.password,
      });
      alert(response.data.message);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      localStorage.setItem("userRole", form.role);

      if (form.role === "freelancer") {
        navigate("/freelancer-home");
      } else if (form.role === "client") {
        navigate("/client-home");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <p>Log in to continue.</p>

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
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
          <option value="guest">Guest</option>
        </select>
        <button type="submit" className="primary-button">Login</button>
      </form>

      <div className="auth-social">
        <p>Or Continue With</p>
        <button className="social-button google">Google</button>
        <button className="social-button facebook">Facebook</button>
        <button className="social-button twitter">Twitter</button>
      </div>

      <p className="auth-footer">
        New User?{" "}
        <span onClick={() => navigate("/sign-up")} style={{ cursor: "pointer" }}>
          Register
        </span>
      </p>
    </div>
  );
};

export default AuthLogin;
