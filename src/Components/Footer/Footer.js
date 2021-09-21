import React from "react";
import "./Footer.css";
import logofooter from "./imgs/ossipa_white.svg";
import fb from "./imgs/fb_white_icon.svg";
import linkedin from "./imgs/linkedin_white_icon.svg";
// import twitter from "./imgs/twitter_white_icon.svg";
import phone from "./imgs/icon-phone.svg";
import mail from "./imgs/mail-icon.svg";
import place from "./imgs/place-icon.svg";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="Footer white">
      <section className="footer-contact">
        <div className="footer-contact-single">
          <div className="text-block-contact">
            <h3>Márcanos</h3>
            <h5>+52 1 55 3673 6747 </h5>
          </div>
          <img src={phone} alt="" />
        </div>
        <div className="footer-contact-single">
          <div className="text-block-contact">
            <h3>Mándanos un mail</h3>
            <h5>contacto@ossipa.com </h5>
          </div>
          <img src={mail} alt="" />
        </div>
        <div className="footer-contact-single">
          <div className="text-block-contact">
            <h3>Visìtanos</h3>
            <h5>
              Cascada, Jardínes del
              <br /> Pedregal, CDMX
            </h5>
          </div>
          <img src={place} alt="" />
        </div>
      </section>
      {/* Seccion modificada para responsive */}
      <section className="footer-contact-responsive">
        <div className="containerIconFooterContact">
          <img src={phone} alt="" />
          <img src={mail} alt="" />
          <img src={place} alt="" />
        </div>
        <div className="containerInfoContact">
          <div>
            <h3>Márcanos</h3>
            <h5>+52 1 55 3673 6747</h5>
          </div>
          <div>
            <h3>Mándanos un mail</h3>
            <h5>contacto@ossipa.com</h5>
          </div>
          <div>
            <h3>Visìtanos</h3>
            <h5>
              Cascada,<br></br> Jardínes del Pedregal,
              <br /> CDMX
            </h5>
          </div>
        </div>
      </section>
      {/* Seccion modificada para responsive */}
      <section className="footer-info">
        {/*-------------Inicia Seccion de Newsletter --------------*/}
        <div className="footer-column-1">
          <h3>Newsletter</h3>
          <h4>
            Mantente informado y al día de los temas más relevantes de la
            industria de energía, combustibles e hidrocarburos directo en tu
            correo.
          </h4>
          <h6 className="footer-proximamente">PRÓXIMAMENTE</h6>
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
              <HashLink to="/soluciones#ASEA">
                <li>
                  <a>ASEA</a>
                </li>
              </HashLink>
              <HashLink to="/soluciones#CRE">
                <li>
                  <a href="#">CRE</a>
                </li>
              </HashLink>
              <HashLink to="/soluciones#SENER">
                <li>
                  <a href="#">SENER</a>
                </li>
              </HashLink>
              <HashLink to="/soluciones#CONSULTORÍA">
                <li>
                  <a href="#">CONSULTORÍA</a>
                </li>
              </HashLink>
              <HashLink to="/soluciones#ADMINISTRACIÓN">
                <li>
                  <a href="#">ADMINISTRACIÓN</a>
                </li>
              </HashLink>
              <HashLink to="/soluciones#NUEVOS-NEGOCIOS">
                <li>
                  <a href="#">NUEVOS NEGOCIOS</a>
                </li>
              </HashLink>
            </ul>
          </div>
          <div className="footer-solutions-column">
            <h3>Compañía</h3>
            <ul className="footer-solutions">
              <HashLink to="/nosotros#NOS">
                <li>
                  <a href="#">Nosotros</a>
                </li>
              </HashLink>
              <HashLink to="/soluciones#SOLUCIONES">
                <li>
                  <a href="#">Soluciones</a>
                </li>
              </HashLink>
              {/* <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 1</a>
              </li>
              <li>
                <a href="#">Servicio 1</a>
              </li> */}
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
            Generamos soluciones eficientes para los procesos y actividades de
            la cadena de suministro y logística de combustibles e hidrocarburos.
          </p>
          <div className="social-media-footer">
            <img src={fb} alt="facebook-icon" />
            {/* <img src={twitter} alt="twitter-icon" /> */}
            <img src={linkedin} alt="linkedin-icon" />
          </div>
          <a href="#" className="avisoDePrivacidad">
            Aviso de Privacidad
          </a>
        </div>

        {/*-------------Termina Seccion de OSSIPA --------------*/}
      </section>
      <div>
        <div className="social-media-footerResponsive">
          <img src={fb} alt="facebook-icon" />
          {/* <img src={twitter} alt="twitter-icon" /> */}
          <img src={linkedin} alt="linkedin-icon" />
        </div>
        <a href="#" className="avisoDePrivacidadResponsive">
          Aviso de Privacidad
        </a>
      </div>
      <legend>2021. OSSIPA. Todos los derechos reservados.</legend>
    </footer>
  );
}
