import React from "react";
import "./Footer.css";
import logofooter from "./imgs/ossipa_white.svg";
import fb from "./imgs/fb_white_icon.svg";
import linkedin from "./imgs/linkedin_white_icon.svg";
import twitter from "./imgs/twitter_white_icon.svg";
import phone from "./imgs/icon-phone.svg";
import mail from "./imgs/mail-icon.svg";
import place from "./imgs/place-icon.svg";

export default function Footer() {
  return (
    <footer className="Footer white">
      <section className="footer-contact">
        <div className="footer-contact-single">
          <div className="text-block-contact">
            <h3>Márcanos</h3>
            <h5>00 00 00 00 </h5>
          </div>
          <img src={phone} alt="" />
        </div>
        <div className="footer-contact-single">
          <div className="text-block-contact">
            <h3>Mándanos un mail</h3>
            <h5>calidad@ossipa.com.mx </h5>
          </div>
          <img src={mail} alt="" />
        </div>
        <div className="footer-contact-single">
          <div className="text-block-contact">
            <h3>Visìtanos</h3>
            <h5>Pedregal, CDMX </h5>
          </div>
          <img src={place} alt="" />
        </div>
      </section>
      <section className="footer-info">
        {/*-------------Inicia Seccion de Newsletter --------------*/}
        <div className="footer-column-1">
          <h3>Newsletter</h3>
          <h4>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </h4>
          <div className="input-newsletter">
            <input type="text" placeholder="Introduce tu correo" />
            <span>e </span>
          </div>
        </div>
        {/*-------------Fin Seccion de Newsletter --------------*/}
        {/*------------- Inicia Seccion informativa de links --------------*/}
        <div className="footer-column-2">
          <div className="footer-solutions-column">
            <h3>Servicios</h3>
            <ul className="footer-section">
              <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 2</a>
              </li>
              <li>
                <a href="#">Servicio 3</a>
              </li>
              <li>
                <a href="#">Servicio 4</a>
              </li>
              <li>
                <a href="#">Servicio 5</a>
              </li>
              <li>
                <a href="#">Servicio 6</a>
              </li>
            </ul>
          </div>
          <div className="footer-solutions-column">
            <h3>Secciones</h3>
            <ul className="footer-solutions">
              <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 1</a>
              </li>
            </ul>
          </div>
        </div>
        {/*------------- Fin de Seccion informativa de links --------------*/}

        {/*-------------Inicia Seccion OSSIPA --------------*/}
        <div className="footer-column-3">
          <img
            className="logo-white"
            src={logofooter}
            alt="ossipa-logo-white"
          />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div className="social-media-footer">
            <img src={fb} alt="facebook-icon" />
            <img src={twitter} alt="twitter-icon" />
            <img src={linkedin} alt="linkedin-icon" />
          </div>
          <a href="#">Aviso de Privacidad</a>
        </div>
        {/*-------------Termina Seccion de OSSIPA --------------*/}
      </section>
      <legend>2021. OSSIPA. Todos los derechos reservados.</legend>
    </footer>
  );
}
