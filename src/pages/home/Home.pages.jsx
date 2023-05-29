import "./Home.css";
import React from "react";
import "./Home.css";
import fondoCoche from "../../assets/fotos/fondo_coche.jpeg";
import buenosDias from "../../assets/fotos/pexels-valeria-boltneva-16677734.jpeg"
import alquiler from "../../assets/fotos/audiRojo.jpeg"
import compra from "../../assets/fotos/mercedesNaranja.jpeg"
import calcular from "../../assets/fotos/lapiz.jpeg"

const Home = () => {
  return (
    <div className="Home">
      <img className="foto_portada" src={fondoCoche} alt="hola" />

      <div className="cartas_home">
        <p className="p_cartas_home">CONOCE NUESTROS SERVICIOS</p>
        <div className="div_cartas">
          <div className="carta">
            <p className="titulo_cartas">ALQUILER DE COCHES</p>
            <img className="foto" src={alquiler} alt="buenos dias" />
          </div>

          <div className="carta">
            <p className="titulo_cartas">VENTA DE COCHES</p>
            <img className="foto" src={compra} alt="buenos dias" />
          </div>

          <div className="carta">
            <p className="titulo_cartas">BUSCAMOS TU SEGURO</p>
            <img className="foto" src={calcular} alt="buenos dias" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
