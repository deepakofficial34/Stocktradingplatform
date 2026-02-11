import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import { GeneralContextProvider } from "./GeneralContext";
import { useAuth } from "./AuthContext";

const Dashboard = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/";

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <div className="dashboard-container">
              <GeneralContextProvider>
                <WatchList />
                <div className="content">
                  <ProtectedRoute>
                    <Summary />
                  </ProtectedRoute>
                </div>
              </GeneralContextProvider>
            </div>
          }
        />
        <Route
          path="/orders"
          element={
            <div className="dashboard-container">
              <GeneralContextProvider>
                <WatchList />
                <div className="content">
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                </div>
              </GeneralContextProvider>
            </div>
          }
        />
        <Route
          path="/holdings"
          element={
            <div className="dashboard-container">
              <GeneralContextProvider>
                <WatchList />
                <div className="content">
                  <ProtectedRoute>
                    <Holdings />
                  </ProtectedRoute>
                </div>
              </GeneralContextProvider>
            </div>
          }
        />
        <Route
          path="/positions"
          element={
            <div className="dashboard-container">
              <GeneralContextProvider>
                <WatchList />
                <div className="content">
                  <ProtectedRoute>
                    <Positions />
                  </ProtectedRoute>
                </div>
              </GeneralContextProvider>
            </div>
          }
        />
        <Route
          path="/funds"
          element={
            <div className="dashboard-container">
              <GeneralContextProvider>
                <WatchList />
                <div className="content">
                  <ProtectedRoute>
                    <Funds />
                  </ProtectedRoute>
                </div>
              </GeneralContextProvider>
            </div>
          }
        />
        <Route
          path="/apps"
          element={
            <div className="dashboard-container">
              <GeneralContextProvider>
                <WatchList />
                <div className="content">
                  <ProtectedRoute>
                    <Apps />
                  </ProtectedRoute>
                </div>
              </GeneralContextProvider>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default Dashboard;
