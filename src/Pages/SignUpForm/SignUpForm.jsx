import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";
import logoImage from "../../Assests/logo.png";
import facebookImage from "../../Assests/facebook.png";
import googleImage from "../../Assests/google.png";

function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    phone: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match!");
    }
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/signin"); // Redirect after successful registration
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        <img alt="logo" className="logo" src={logoImage} />
        <div className="text-content">
          <h1>Sign up to</h1>
          <h2>Graphers</h2>
          <p>
            If you already have an account
            <br />
            You can{" "}
            <button className="login-button" onClick={handleLoginClick}>
              Login here!
            </button>
          </p>
        </div>
      </div>
      <div className="right-section">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Create Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact number"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            className="user-type-select"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select User Type
            </option>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
            <option value="photographer">Photographer</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
        <div className="social-login">
          <p>or continue with</p>
          <div className="social-icons">
            <img src={facebookImage} alt="Facebook" />
            <img src={googleImage} alt="Google" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
