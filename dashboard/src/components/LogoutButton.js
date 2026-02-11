import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./LogoutButton.css";

const LogoutButton = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="logout-button-container">
      <div className="logout-user-info">
        <div className="logout-avatar">
          {user?.username?.substring(0, 2).toUpperCase() || "U"}
        </div>
        <span className="logout-username">{user?.username || "User"}</span>
      </div>
      <button className="logout-btn" onClick={handleLogout} title="Logout">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default LogoutButton;

