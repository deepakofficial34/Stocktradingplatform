import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !username || !password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    const result = await signup(email, username, password);
    setLoading(false);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create Account</h2>
          <p>Start your trading journey today</p>
        </div>
        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-input"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password (min 6 characters)"
              required
              minLength={6}
            />
          </div>
          <button
            type="submit"
            className="signup-button"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <div className="login-link">
          Already have an account?{" "}
          <a href="/login" onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
