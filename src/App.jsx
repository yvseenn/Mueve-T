import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.pages";
import Footer from "./core/footer/Footer";
import { Nav } from './core/nav/Nav.core';

function App() {
  return (
    <div className="App">
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
