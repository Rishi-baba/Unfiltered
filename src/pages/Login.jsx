// Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/NavContext";
import "boxicons/css/boxicons.min.css";
import "./LoginStyle.css";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsActive(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Set user as logged in and redirect to main page
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Set user as logged in and redirect to main page
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className={`container ${isActive ? "active" : ""}`}>
        <div className="curved-shape"></div>
        <div className="curved-shape2"></div>

        {/* Login Form */}
        <div className="form-box Login">
          <h2 className="animation" style={{ "--D": 0, "--S": 21 }}>
            Login
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="input-box animation" style={{ "--D": 1, "--S": 22 }}>
              <input type="text" required />
              <label>Username</label>
              <box-icon type="solid" name="user" color="gray"></box-icon>
            </div>

            <div className="input-box animation" style={{ "--D": 2, "--S": 23 }}>
              <input type="password" required />
              <label>Password</label>
              <box-icon type="solid" name="lock-alt" color="gray"></box-icon>
            </div>

            <div className="input-box animation" style={{ "--D": 3, "--S": 24 }}>
              <button className="btn" type="submit">
                Login
              </button>
            </div>

            <div className="regi-link animation" style={{ "--D": 4, "--S": 25 }}>
              <p>
                Don't have an account? <br />{" "}
                <a href="#" onClick={handleRegisterClick}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Login Info */}
        <div className="info-content Login">
          <h2 className="animation" style={{ "--D": 0, "--S": 20 }}>
            WELCOME BACK!
          </h2>
          <p className="animation" style={{ "--D": 1, "--S": 21 }}>
            We are happy to have you with us again. If you need anything, we are
            here to help.
          </p>
        </div>

        {/* Register Form */}
        <div className="form-box Register">
          <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>
            Register
          </h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="input-box animation" style={{ "--li": 18, "--S": 1 }}>
              <input type="text" required />
              <label>Username</label>
              <box-icon type="solid" name="user" color="gray"></box-icon>
            </div>

            <div className="input-box animation" style={{ "--li": 19, "--S": 2 }}>
              <input type="email" required />
              <label>Email</label>
              <box-icon type="solid" name="envelope" color="gray"></box-icon>
            </div>

            <div className="input-box animation" style={{ "--li": 19, "--S": 3 }}>
              <input type="password" required />
              <label>Password</label>
              <box-icon type="solid" name="lock-alt" color="gray"></box-icon>
            </div>

            <div className="input-box animation" style={{ "--li": 20, "--S": 4 }}>
              <button className="btn" type="submit">
                Register
              </button>
            </div>

            <div className="regi-link animation" style={{ "--li": 21, "--S": 5 }}>
              <p>
                Already have an account? <br />{" "}
                <a href="#" onClick={handleLoginClick}>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Register Info */}
        <div className="info-content Register">
          <h2 className="animation" style={{ "--li": 17, "--S": 0 }}>
            WELCOME!
          </h2>
          <p className="animation" style={{ "--li": 18, "--S": 1 }}>
            We're delighted to have you here. If you need any assistance, feel
            free to reach out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;