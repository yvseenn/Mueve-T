import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./core/footer/Footer";
import NavBar from "./core/nav/Nav.core"
import LoginPage from "./pages/login/Login.page";
import { VehicleContext } from "./context/Users.context";
import { useContext } from "react";
import SignupPage from "./pages/signup/Signup.page";
import Home from "./pages/home/Home.pages";
import  FleetPages from './pages/fleet/FleetPages';
import AreaPrivadaPage from "./pages/AreaPrivada.page";
import Gestion from "./pages/gestion/Gestion";
import CarPage from "./pages/carDetails/CarPage";
import RentaForm from "./components/rentalForm/Rental.component";
import CrearVehiculo from "./pages/crearvehiculo/CrearVehiculo";
import Chatbot from "./core/footer/Chatbot.footer";

function App() {

  const {user} = useContext(VehicleContext)
  
  return (
    
    <div className="App">
    <NavBar sticky="top"/>
    <Chatbot />
      <Routes>
        <Route path='/login' element={user?<Navigate to="/areaprivada" replace></Navigate>:<LoginPage></LoginPage>} ></Route>
        <Route path="/signup" element={user?<Navigate to="/areaprivada" replace></Navigate>:<SignupPage />} />
        <Route path="/" element={<Home />} />
        <Route path='/areaprivada' element={user?<AreaPrivadaPage></AreaPrivadaPage>:<Navigate to="/login" replace></Navigate>} ></Route>
        <Route path='/fleet' element={<FleetPages/>} >  </Route>
        <Route path='/fleet/:id' element={<CarPage/>} >  </Route>
        <Route path='/rental' element={<RentaForm></RentaForm>} ></Route>        <Route path='/crearvehiculo' element={<CrearVehiculo/>}></Route>
        <Route path='/gestion' element={user?<Gestion/>:<Navigate to="/login" replace></Navigate>} >  </Route>
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
