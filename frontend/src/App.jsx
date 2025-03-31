import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CategoryListing from "./pages/CategoryListing";
import Auth from "./components/Layout/Auth";
import RestaurantDetail from "./pages/RestaurantDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Authentication */}
        <Route path="/auth" element={<Auth />}></Route>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Landing />} />
          <Route path="/home" index element={<Home />} />
          <Route path="/category" index element={<CategoryListing />} />
          <Route path="/restaurant" index element={<RestaurantDetail />} />
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
