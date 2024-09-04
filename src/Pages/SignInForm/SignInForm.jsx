import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignInForm.css";
import logoImage from "../../Assests/logo.png";

function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    const auth = getAuth();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      navigate("/dashboard"); // Adjust the path based on your app's routing
      console.log("USER AWA");
      localStorage.setItem("useremail",user.user.email)
      console.log(user.user.email);
      console.log(localStorage.getItem("user").email)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      switch (errorCode) {
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        case "auth/user-not-found":
          setError("User not found.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        default:
          setError(`Error: ${errorMessage}`);
          break;
      }

      console.error("Login error:", errorCode, errorMessage);
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
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
