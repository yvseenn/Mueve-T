import "./Nav.scss"
import { Link } from "react-router-dom"
export const Nav= () => {
  return (
    <div className="nav">
        <img src="./src/assets/fotos/logo.png" alt="logo" />
        <ul className="ul_nav">
            <li><Link to="/">🏠 HOME</Link></li>
            <li><Link to="/fleet">🚗 FLOTA DE COCHES</Link></li>
            <li><Link to="/gestion">📅 GESTIONAR RESERVA</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/signup">✏️ REGISTER</Link></li>
            <li><Link to="/idiomas">🌐 IDIOMAS</Link></li>
        </ul>
    </div>

  )
}