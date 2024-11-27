import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Organismos/Login";
import { LoginForm } from "./Organismos/Loginform";
import { Monitoring } from "./Organismos/Monitoring";
import { Historial } from "./Organismos/Historial";
//adasdasdas
function App() {
  return (

     <Router>
    
         <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Formulario" element={<LoginForm />} />
        <Route path="/Monitoreo" element={<Monitoring />} />
        <Route path="/Historial" element={<Historial/>} />
      </Routes>
    

    </Router>

  );
}

export default App;
