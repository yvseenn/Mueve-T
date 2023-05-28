import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./core/footer/Footer";
import NavBar from "./core/nav/Nav.core";
import LoginPage from "./pages/login/Login.page";
import { VehicleContext } from "./context/Users.context";
import { useContext } from "react";
import SignupPage from "./pages/signup/Signup.page";
import Home from "./pages/home/Home.pages";
import FleetPages from "./pages/fleet/FleetPages";
import AreaPrivadaPage from "./pages/AreaPrivada.page";
import Gestion from "./pages/gestion/Gestion";
import CarPage from "./pages/carDetails/CarPage";
import ReservationForm from "./components/rentalForm/Rental.component";
import CrearVehiculo from "./pages/crearvehiculo/CrearVehiculo";
import Chatbot from "./core/footer/Chatbot.footer";

function App() {
  const { user } = useContext(VehicleContext);
  const token = user ? user.token : null; // Retrieve the token value from the user object

  return (
    <div className="App">
      <NavBar sticky="top" />
      <Chatbot />
      <Routes>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/areaprivada" replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/signup"
          element={
            user ? (
              <Navigate to="/areaprivada" replace />
            ) : (
              <SignupPage />
            )
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/areaprivada"
          element={
            user ? (
              <AreaPrivadaPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/fleet" element={<FleetPages />} />
        <Route path="/fleet/:id" element={<CarPage />} />
        <Route
          path="/rental"
          element={token ? <ReservationForm token={token} /> : null}
        />
        <Route path="/crearvehiculo" element={<CrearVehiculo />} />
        <Route
          path="/gestion"
          element={
            user ? (
              <Gestion />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
