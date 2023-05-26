import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./core/footer/Footer";
import Nav from "./core/nav/Nav.core"
import LoginPage from "./pages/login/Login.page";
import { VehicleContext } from "./context/Users.context";
import { useContext, useState } from "react";
import SignupPage from "./pages/signup/Signup.page";
import  FleetPages from './pages/fleet/FleetPages';
import AreaPrivadaPage from "./pages/AreaPrivada.page";

function App() {

  const {user} = useContext(VehicleContext)
  
  return (
    <div className="App">
    <Nav/>

      <Routes>
      <Route path='/login' element={user?<Navigate to="/areaprivada" replace></Navigate>:<LoginPage></LoginPage>} ></Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/areaprivada' element={user?<AreaPrivadaPage></AreaPrivadaPage>:<Navigate to="/login" replace></Navigate>} ></Route>
        
        <Route path='/fleet' element={<FleetPages/>} >  </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
