import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Screens/UserScreens/Login";
import Signup from "./Screens/UserScreens/Signup";
import AdminLogin from "./Screens/AdminScreens/Login";
import Header from "./components/Header/Header";
import Home from "./Screens/UserScreens/Home";
import ViewAll from "./Screens/AdminScreens/ViewAll";
// import ViewAll2 from "./Screens/AdminScreens/ViewAll2";
// import MyComponent from "./Screens/AdminScreens/ViewAll2Popup";
import UserDashboard from "./Screens/UserScreens/UserDashboard";
import "./App.css";

const App = () => {
  const adminLogin = useSelector((state) => state.adminLogin)
  const { adminInfo } = adminLogin

  return (
    <>
      {adminInfo ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<ViewAll />} />
            <Route path="/admin" element={<ViewAll />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      )}
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<AdminHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/viewall" element={<ViewAll />} />
          <Route path="/viewall2" element={<ViewAll2></ViewAll2>}></Route>
          <Route
            path="/sendinvite"
            element={<MyComponent></MyComponent>}
          ></Route>
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes> */}
    </>
  );
}

export default App;
