import React from 'react';
import "./Header.css";
import logo from "./images/LogoHeader.svg"
import iconFace from "./images/IconFacebook.svg";
import iconTwi from "./images/IconTwitter.svg"
import iconIn from "./images/IconIn.svg"


export default function Header() {
    return (
        <section className="containerHeader">
            <div className="containerLogo"> <img src={logo} alt="Logo de la empresa" className="logoHeader"/></div>
            <div >
                <button className="buttonHeader">HOME</button>
                <button className="buttonHeader">NOSOTROS</button>
                <button className="buttonHeader">SOLUCIONES</button>
                <button className="buttonHeader">BLOG</button>
                <button className="buttonHeader">CONTACTO</button>
             </div>
            <div>
            <img src={iconFace} alt="Icono de Facebook" className="iconosRedes" />
            <img src={iconTwi} alt="Icono de Twitter" className="iconosRedes"/>
            <img src={iconIn} alt="Icono de In" className="iconosRedes"/>
            </div>
        </section>
    )
}
