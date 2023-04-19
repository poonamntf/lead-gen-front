import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import Login from "./Screens/UserScreens/Login";
import Signup from "./Screens/UserScreens/Signup";
import AdminHome from "./Screens/AdminScreens/Home";
import AdminLogin from "./Screens/AdminScreens/Login";
import Header from "./components/Header/Header";
import Home from "./Screens/UserScreens/Home";
import ViewAll from "./Screens/UserScreens/ViewAll";

function App() {
  return (
    <>
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<AdminHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/viewall" element={<ViewAll />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
