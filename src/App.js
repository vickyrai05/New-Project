import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/Header.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import About from "./Pages/Home/About/About.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Services from "./Pages/Services/Service.jsx";
import Success from "./Pages/Success/Success.jsx";
import Empty from "./Pages/Empty/Empty.jsx";
import Appointment from "./Pages/Appointment/Appointment.jsx";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail.jsx";


function App() {
  const token = sessionStorage.getItem("token");

 
  console.log(token);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/success" element={<Success />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/appointment" element={ token ? <Appointment /> :<Login />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
