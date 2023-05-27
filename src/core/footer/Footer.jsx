// Footer.jsx

import Chatbot from "./Chatbot.footer";
import "./Footer.scss";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaProcedures } from "react-icons/fa";
import { FcAutomotive } from "react-icons/fc";

const Footer = () => {
  return (
    <div>
      <Chatbot/>
      <div className="footer-container">

      <div className="social-media">
          <h3>Síguenos</h3>
          <ul className="ul_footer">
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <IoLogoTwitter />
            </li>
            <li>
              <AiFillLinkedin />
            </li>
            <li>
              <FaProcedures />
            </li>
            <li>
              <FcAutomotive />
            </li>
          </ul>
        </div>

             <div className="divisor"></div>

      <div className="company_info">
          <h3>¡Más informacion de la compañia!</h3>
          <p>
            Mueve-T es una empresa dedicada a la compra y venta de automóviles
            de ocasión. Su continuo progreso le ha llevado a sentir que es el
            momento de dar un salto en el negocio, queriendo aumentar su
            notoriedad y llegar a nuevos públicos.
          </p>
        </div>

   

         

        <div className="divisor"></div>

        <div className="chatbot-container">{/* <Chatbot /> */}</div>

        <div className="contact-info">
          <h3>Contacto</h3>
          <p>Teléfono: 658-445-476</p>
          <p>Email: info@mueve-t.com</p>
        </div>

        <div className="divisor"></div>



        <div className="final_copy">
          <div className="letras_final_copy">
            <i role="copyright"></i> 2023{" "}
            <address role="company address">España</address>
            <span> - All Rights Reserved - </span>
          </div>
          <div className="links_copy">
            <a
              className="a_links_copy"
              href="/terms-of-use.html"
              rel="nofollow"
            >
              Terms
            </a>
            <span className="a_links_copy">|</span>
            <a
              className="a_links_copy"
              href="/privacy-policy.html"
              rel="nofollow"
            >
              Privacy
            </a>
          </div>
        </div> 

          
      </div>



      
      
    </div>
  );
};

export default Footer;
