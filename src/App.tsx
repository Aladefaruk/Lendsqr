import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Template from "./components/templates/Template.tsx";
import Signin from "./pages/auth/signin.tsx";
import HeaderLG from "./components/templates/HeaderLG.tsx";

function App() {
  return (
    <div className="p-5">
      <Routes>
        <Route path="/" element={<HeaderLG />} />
        {/* <Route path="/" element={<Signin/>} /> */}
        {/* <Route path="/" element={<Template />} /> */}
      </Routes>
    </div>
  );
}
export default App;
