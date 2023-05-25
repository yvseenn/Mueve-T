import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./core/footer/Footer";
import Nav from "./core/nav/Nav.core"
import LoginPage from "./pages/login/Login.page";
import { VehicleContext } from "./context/Users.context";
import { useContext } from "react";
import SignupPage from "./pages/signup/Signup.page";
import  FleetPages from './pages/fleet/FleetPages';

function App() {

  const {user} = useContext(VehicleContext)
  
  return (
    <div className="App">
    <Nav/>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path='/fleet' element={<FleetPages/>} >  </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
