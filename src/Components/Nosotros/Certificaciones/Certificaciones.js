import React from "react";
import "./Certificaciones.css";

export default function Certificaciones() {
  return (
    <section className="containerCertificaciones">
      <div className="containerTitleyPCertificaciones">
        <h1 className="titleCertificaciones">
          CERTIFICACIONES<span className="titleCertificacionesColor">.</span>
        </h1>
        <p className="pCertificaciones">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore ma ed diam nonumy
          eirmod temp
        </p>
      </div>
      <div className="containerValoresCertificaciones">
        <div className="valoresDeCertificaciones">VALOR 1</div>
        <div className="valoresDeCertificaciones">VALOR 2</div>
        <div className="valoresDeCertificaciones">VALOR 3</div>
        <div className="valoresDeCertificaciones">VALOR 4</div>
      </div>
    </section>
  );
}
