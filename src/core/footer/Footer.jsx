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
    <div className="footer-container">
      <div className="chatbot-container">
        <Chatbot />
      </div>
      <div className="contact-info">
        <div>
          <div>
            <h3>Información de contacto</h3>
            <p>Teléfono: 658-445-476</p>
            <p>Email: info@mueve-t.com</p>
          </div>
        </div>
      </div>

      <div className="company-info">
        <div>
          <div>
            <h3>Mas informacion de la compañia!</h3>
            <p>
              Mueve-T es una empresa dedicada a la compra y venta de automóviles
              de ocasión. Su continuo progreso le ha llevado a sentir que es el
              momento de dar un salto en el negocio, queriendo aumentar su
              notoriedad y llegar a nuevos públicos.
            </p>
          </div>
        </div>
      </div>

      <div className="social-media">
        <div>
          <div>
            <h3>Síguenos en las redes sociales</h3>
            <ul>
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
        </div>
      </div>

      <section className="copy">
        <div>
          <i role="copyright"></i> 2023{" "}
          <address role="company address">España</address>
          <span> - All Rights Reserved - </span>
        </div>
        <div>
          <a href="/terms-of-use.html" rel="nofollow">
            Terms
          </a>{" "}
          |{" "}
          <a href="/privacy-policy.html" rel="nofollow">
            Privacy
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
