import "./Home.css"
import React from 'react'
import fondoCoche from '../../assets/fotos/fondo_coche.jpeg'
import buenosDias from '../../assets/fotos/pexels-valeria-boltneva-16677734.jpeg'



const Home = () => {
  return (
    <div className="Home">

      <img className="foto_portada" src={fondoCoche} alt="hola"/>

      <div className="portada_home">

        <div className="cartas_home">
          <p className="p_cartas_home">¿A QUE NOS DEDICAMOS?</p>
          <div className="carta">
            <p>buenos dias</p>
            <img className="foto" src={buenosDias} alt="buenos dias" />
          </div>

          <div className="carta">

          </div>

          <div className="carta">

          </div>

        </div>
      
      </div>      
    </div>
  )
}

export default Home
