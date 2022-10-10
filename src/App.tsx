import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Signin from "./pages/auth/signin.tsx";

import Dashboard from "./pages/Dashboard.tsx";

import User from "./pages/User.tsx";

import GeneralDetails from "./pages/mobile/GeneralDetails.tsx";

function App() {
  return (
    <div className="p-5">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/details" element={<GeneralDetails />} />
      </Routes>
    </div>
  );
}
export default App;
