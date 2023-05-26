import React, { useContext } from 'react'
import "./Nav.scss"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { VehicleContext } from '../../context/Users.context'

function Nav () {
    const {user, logOut} = useContext(VehicleContext)
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className='navbar'>
            <div className="nav_logo">LOGOTIPO</div>
            <div className={`nav_item ${isOpen && "open"}`}>
            <Link className='link' to="/">🏠 HOME</Link>
            <Link className='link' to="/fleet">🚗 FLOTA DE COCHES</Link>
            <Link className='link' to="/gestion">📅 GESTIONAR RESERVA</Link>
            <Link className='link_login' to="/login">LOGIN</Link>
            <Link className='link_area' to="/areaprivada">Area Privada</Link>
            <Link className='link' to="/signup">✏️ REGISTER</Link>
            <Link className='link' to="/idiomas">🌐 IDIOMAS</Link>
            <button className='link' onClick={logOut}> Logout</button>
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