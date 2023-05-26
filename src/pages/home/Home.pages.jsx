import "./Home.scss"
import React from 'react'
import fondoCoche from '../../assets/fotos/fondo_coche.jpeg'
import fotoPortada from '../../assets/fotos/ferrariRojoFrente.jpeg'

const Home = () => {
  return (
    <div className="Home">
      {/* <img src="../../assets/fotos/fondo_coche.jpeg" alt="" /> */}
      <div className="caja_portada">
        <img className="foto_portada" src={fotoPortada} alt="cochePortada" />
      </div>

      <div className="prueba">
        <img src={fondoCoche} alt="hola" />
      </div>

    </div>
  )
}

export default Home
