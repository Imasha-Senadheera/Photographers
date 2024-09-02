import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignInForm.css";
import logoImage from "../../Assests/logo.png";
import facebookImage from "../../Assests/facebook.png";
import googleImage from "../../Assests/google.png";


function SignInForm() {
  const navigate = useNavigate();

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
        <form className="signin-form">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email or Username"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
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
