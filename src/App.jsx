import './App.css';
import { Route, Routes } from "react-router-dom";
import Footer from "./core/footer/Footer";
import Nav from './core/nav/Nav.core';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
