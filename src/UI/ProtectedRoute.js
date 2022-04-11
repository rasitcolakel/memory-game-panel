import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children, onlyForNotAuth }) => {
  const { isLogged } = useSelector((state) => state.auth);

  let location = useLocation();

  if (isLogged === false) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
