import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import LogoutButton from "./LogoutButton";

const Home = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/";

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated && !isAuthPage && <TopBar />}
      <Dashboard />
      {isAuthenticated && !isAuthPage && <LogoutButton />}
    </>
  );
};

export default Home;
