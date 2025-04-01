import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CategoryListing from "./pages/CategoryListing";
import Auth from "./components/Layout/Auth";
import RestaurantDetail from "./pages/RestaurantDetail";
import PrivateRoute from "./components/Layout/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
        <Route path="/auth" element={<Auth />} />

        {/* Protected Routes (Inside User Layout) */}
        <Route element={<UserLayout />}>
          <Route path="home" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="category"
            element={<PrivateRoute element={<CategoryListing />} />}
          />
          <Route
            path="restaurant"
            element={<PrivateRoute element={<RestaurantDetail />} />}
          />
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
