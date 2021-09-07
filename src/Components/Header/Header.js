import React, { useState } from "react";
import "./Header.css";
import logo from "./images/LogoHeader.svg";
import iconFace from "./images/IconFacebook.svg";
import iconTwi from "./images/IconTwitter.svg";
import iconIn from "./images/IconIn.svg";
import { Link } from "react-router-dom";
import iconMenu from "./images/bars-solid.svg";

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
          <Link to="/">
            <button className="buttonHeader">HOME</button>
          </Link>
          <Link to="/nosotros">
            <button className="buttonHeader">NOSOTROS</button>
          </Link>
          <Link to="/soluciones">
            <button className="buttonHeader">SOLUCIONES</button>
          </Link>
          {/* <button className="buttonHeader">BLOG</button> */}
          <Link to="/contacto">
            <button className="buttonHeader">CONTACTO</button>
          </Link>
        </div>
        <div className="containerIconHeader">
          <img src={iconFace} alt="Icono de Facebook" className="iconosRedes" />
          <img src={iconTwi} alt="Icono de Twitter" className="iconosRedes" />
          <img src={iconIn} alt="Icono de In" className="iconosRedes" />
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
            <Link to="/">
              <button className="buttonHeaderDesplegable">HOME</button>
            </Link>
            <button className="buttonHeaderDesplegable">SOLUCIONES</button>
            <Link to="/nosotros">
              <button className="buttonHeaderDesplegable">NOSOTROS</button>
            </Link>
            <button className="buttonHeaderDesplegable">BLOG</button>
            <Link to="/contacto">
              <button className="buttonHeaderDesplegable">CONTACTO</button>
            </Link>
          </div>
          <div className="containerIconHeaderDesplegable">
            <img
              src={iconFace}
              alt="Icono de Facebook"
              className="iconosRedesResponsive"
            />
            <img
              src={iconTwi}
              alt="Icono de Twitter"
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
