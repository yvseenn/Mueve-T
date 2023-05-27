import React, { useContext } from 'react'
import "./Nav.scss"
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
                user? <Link className='link' to="/gestion">📅 GESTIONAR RESERVA</Link>: ""
            }

           
            {
                user?  ""  : <Link className='link_login' to="/login">LOGIN</Link>
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
}

export default Nav