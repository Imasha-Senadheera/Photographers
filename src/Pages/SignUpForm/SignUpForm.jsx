import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Import auth from firebaseConfig
import "./SignUpForm.css";
import logoImage from "../../Assests/logo.png";
import facebookImage from "../../Assests/facebook.png";
import googleImage from "../../Assests/google.png";

function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    userType: "customer", // Default value
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log("User created:", user);

      // Optionally, save additional user info (username, phone, userType) to Firebase Firestore or Realtime Database

      navigate("/signin"); // Redirect after successful registration
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(`Error ${errorCode}: ${errorMessage}`);
      console.error("Registration error:", errorCode, errorMessage);
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
            Already have an account?
            <br />
            <button
              className="signin-button"
              onClick={() => navigate("/signin")}
            >
              Sign In here!
            </button>
          </p>
        </div>
      </div>
      <div className="right-section">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="customer">Customer</option>
            <option value="photographer">Photographer</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="social-signup">
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
