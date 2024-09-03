import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInForm.css";
import logoImage from "../../Assests/logo.png";
import facebookImage from "../../Assests/facebook.png";
import googleImage from "../../Assests/google.png";

function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard"); // Redirect after successful login
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signin-container">
      <div className="left-section">
        <img alt="logo" className="logo" src={logoImage} />
        <div className="text-content">
          <h1>Sign in to</h1>
          <h2>Graphers</h2>
          <p>
            If you don’t have an account register
            <br />
            You can{" "}
            <button
              className="signup-button"
              onClick={() => navigate("/signup")}
            >
              Register here!
            </button>
          </p>
        </div>
      </div>
      <div className="right-section">
        <h1>Sign In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email or Username"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="forgot-password">Forgot password?</div>
          <button type="submit">Login</button>
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

export default SignInForm;
