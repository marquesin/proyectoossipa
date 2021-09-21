import React, { useState } from "react";
import "./Header.css";
import logo from "./images/LogoHeader.svg";
import iconFace from "./images/link_fb_svg_ppt_.svg";
import iconIn from "./images/logo_link-svg-ppt.svg";
import iconMenu from "./images/bars-solid.svg";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [menuDes, setMenuDes] = useState(false);
  return (
    <section className="Header">
      <div className="containerHeader">
        <div className="containerLogo">
          {" "}
          <img src={logo} alt="Logo de la empresa" className="logoHeader" />
        </div>
        <div className="containerButtonHeader">
          <HashLink to="/#bannerHome">
            <button className="buttonHeader">HOME</button>
          </HashLink>
          <HashLink to="/nosotros#NOS">
            <button className="buttonHeader">NOSOTROS</button>
          </HashLink>
          <HashLink to="/soluciones#SOLUCIONES">
            <button className="buttonHeader">SOLUCIONES</button>
          </HashLink>
          {/* <button className="buttonHeader">BLOG</button> */}
          <HashLink to="/contacto#bannerContacto">
            <button className="buttonHeader">CONTACTO</button>
          </HashLink>
        </div>
        <div className="containerIconHeader">
          <button className="iconosRedes">
            <img src={iconFace} alt="Icono de Facebook" />
          </button>
          <button className="iconosRedes">
            <img src={iconIn} alt="Icono de In" />
          </button>
          {/* <img src={iconFace} alt="Icono de Facebook" className="iconosRedes" />
          <img src={iconTwi} alt="Icono de Twitter" className="iconosRedes" />
          <img src={iconIn} alt="Icono de In" className="iconosRedes" /> */}
        </div>
      </div>
      <div className="containerHeaderResponsive">
        <img src={logo} alt="Logo de la empresa" className="logoHeader" />

        <img
          src={iconMenu}
          alt="Icono menu desplegable"
          className="iconMenuDesolegable"
          onClick={(e) => setMenuDes(!menuDes)}
        />
      </div>
      {menuDes ? (
        <div className="containerMenuDesplegable">
          <div className="containerButtonHeaderDesplegable">
            <HashLink to="/#bannerHomeD">
              <button className="buttonHeaderDesplegable">HOME</button>
            </HashLink>
            <HashLink to="/soluciones#SOLUCIONES">
              <button className="buttonHeaderDesplegable">SOLUCIONES</button>
            </HashLink>
            <HashLink to="/nosotros#bannerNosotrosD">
              <button className="buttonHeaderDesplegable">NOSOTROS</button>
            </HashLink>
            {/* <button className="buttonHeaderDesplegable">BLOG</button> */}
            <HashLink to="/contacto#bannerContactoD">
              <button className="buttonHeaderDesplegable">CONTACTO</button>
            </HashLink>
          </div>
          <div className="containerIconHeaderDesplegable">
            <img
              src={iconFace}
              alt="Icono de Facebook"
              className="iconosRedesResponsive"
            />
            <img
              src={iconIn}
              alt="Icono de In"
              className="iconosRedesResponsive"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
