import './App.css';
import { Route, Routes } from "react-router-dom";
import Footer from "./core/footer/Footer";
import { Nav } from './core/nav/Nav.core';
import  FleetPages from './pages/fleet/FleetPages';

function App() {
  return (
    <div className="App">
    <Nav/>

      <Routes>
        <Route path='/fleet' element={<FleetPages/>} >  </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
