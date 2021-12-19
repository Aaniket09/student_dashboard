
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/profile" />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
