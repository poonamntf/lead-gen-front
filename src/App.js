import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Screens/AdminScreens/Home';
import Login from './Screens/UserScreens/Login';
import Signup from './Screens/UserScreens/Signup';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
