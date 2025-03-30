import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CategoryListing from "./pages/CategoryListing";
import Auth from "./components/Layout/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Landing />} />
          <Route path="/home" index element={<Home />} />
          <Route path="/category" index element={<CategoryListing />} />
          {/* User Layout */}
        </Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
