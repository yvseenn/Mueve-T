// Footer.jsx

import Chatbot from "./Chatbot.footer";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaProcedures } from "react-icons/fa";
import { FcAutomotive } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="total_footer">
      <div className="chatbot_footer">
        <div className="chatbot">
          <Chatbot />
        </div>
        <div className="footer_container">
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

          <div className="chatbot-container">{/* <Chatbot /> */}</div>
          <div className="contact-info">
            <h3>Contacto</h3>
            <p>Teléfono: 658-445-476</p>
            <p>Email: info@mueve-t.com</p>
          </div>
          <div></div>
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
    </div>
  );
};

export default Footer;
