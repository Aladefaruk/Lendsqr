import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Signin from "./pages/auth/signin";

import Dashboard from "./pages/Dashboard";

import User from "./pages/User";

import GeneralDetails from "./pages/mobile/GeneralDetails";


function App() {
  return (
    <div className="p-5">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user:id" element={<User />} />
        <Route path="/user:id/details" element={<GeneralDetails />} />
      </Routes>
    </div>
  );
}
export default App;
