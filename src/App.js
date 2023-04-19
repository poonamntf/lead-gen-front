import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

// import Home from './Screens/AdminScreens/Home';
import Login from "./Screens/UserScreens/Login";
import Signup from "./Screens/UserScreens/Signup";
import Home from "./Screens/UserScreens/Home";
import ViewAll from "./Screens/UserScreens/ViewAll";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/viewall" element={<ViewAll />} />
      </Routes>
    </div>
  );
}

export default App;
