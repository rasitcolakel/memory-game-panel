import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const UnprotectedRoute = ({ children }) => {
  const { isLogged } = useSelector((state) => state.auth);

  let location = useLocation();

  if (isLogged === true) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};
