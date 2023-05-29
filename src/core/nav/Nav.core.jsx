import React, { useContext } from 'react'
import "./Nav.css"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { VehicleContext } from '../../context/Users.context'
import { useNavigate } from 'react-router-dom'

function Nav () {
    const {user, logOut} = useContext(VehicleContext)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate ()
    function tryLogout() {
        logOut()
        navigate("/", {replace: true})
    }
    return(
        <div className='navbar'>
            <div className="nav_logo">LOGOTIPO</div>
            <div className={`nav_item ${isOpen && "open"}`}>
            <Link className='link' to="/">🏠 HOME</Link>
            <Link className='link' to="/fleet">🚗 FLOTA DE COCHES</Link>

            {
                user? <Link className='link' to="/rental">📅 GESTIONAR RESERVA</Link>: ""
            }

           
            {
                user?  ""  : <Link className='link_login' to="/login">📚 LOGIN</Link>
            }
           

            {
                user? <Link className='link_area' to="/areaprivada">Area Privada</Link>: ""
            }
           
            {
                user?  ""  : <Link className='link' to="/signup">✏️ REGISTER</Link>
            }
              {
               user?   <Link className='link' to="/crearvehiculo"> CREAR VEHICULO</Link>: ""
            }
            {
                user?<button className='link' onClick={tryLogout}> Logout</button>: ""
            }

            
            <span>{user?user.email:""}</span>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )

    // Agrega este código JavaScript al final de tu archivo

    document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".nav_toggle");
    const navItem = document.querySelector(".nav_item");
  
    menuToggle.addEventListener("click", function() {
      navItem.classList.toggle("open");
    });
  
    const navLinks = document.querySelectorAll(".nav_item a");
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        navItem.classList.remove("open");
      });
    });
  
    // Agrega esta función para comprimir el menú hamburguesa
    function compressMenu() {
      navItem.classList.remove("open");
    }
  
    // Agrega esta línea para llamar a la función compressMenu() cuando se haga clic en cualquier elemento del menú
    navLinks.forEach(function(link) {
      link.addEventListener("click", compressMenu);
    });
  });
  
}

export default Nav