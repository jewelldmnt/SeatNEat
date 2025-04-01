import React from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "./Auth"; // Assuming supabase is used for authentication

const PrivateRoute = ({ element }) => {
  const user = supabase.auth.getUser(); // Get the current user (from supabase)

  // If user is not authenticated, redirect to /auth
  if (!user) {
    return <Navigate to="/auth" />;
  }

  // If user is authenticated, render the element (protected route)
  return element;
};

export default PrivateRoute;
