import React from "react";
import "./Certificaciones.css";
import cIso from "./img/ISO-ppt_att.svg";
import cPmp from "./img/PMP@2x.png";
import flecha from "../img/Arrow-3.svg";

export default function Certificaciones() {
  return (
    <section className="containerCertificaciones">
      <div className="containerTitleyPCertificaciones">
        <h1 className="titleCertificaciones">
          <img src={flecha} alt="Icono flecha" className="iconFlecha" />
          CERTIFICACIONES
        </h1>
        <p className="pCertificaciones">
          Buscamos la excelencia en nuestros servicios y proyectos. Nos
          capacitamos y regimos bajo entidades certificadoras más estrictas.
        </p>
      </div>
      <div className="containerValoresCertificaciones">
        <div className="valoresDeCertificaciones">
          <img src={cIso} alt="Certificacion ISO" className="logoIso" />
          ISO 9001:2015
        </div>
        <div className="valoresDeCertificaciones">
          <img src={cPmp} alt="Certificacion pmp" className="logoPMP" />
          PMP
        </div>
        {/* <div className="valoresDeCertificaciones">VALOR 3</div>
        <div className="valoresDeCertificaciones">VALOR 4</div> */}
      </div>
    </section>
  );
}
