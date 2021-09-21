import React from "react";
import "./PorqueElegirnos.css";
import Comilla from "./images/Comilla.svg";
import ComillaInf from "./images/ComillasInf.svg";
import Misiones from "./Misiones/Misiones";

export default function PorqueElegirnos() {
  return (
    <section className="containerPorqueElegirnos">
      <div className="containerTitleyMisiones">
        <h1 className="titlePorqueElegirnos">
          <samp>¿</samp> POR QUÉ ELEGIRNOS<samp>?</samp>
          {/* <span className="titlePorqueElegirnosColor">.</span> */}
        </h1>
        <Misiones />
      </div>
      <div className="containerTexsComillas">
        <div className="containerTextComillas">
          {/* <div className="containerComilla"> */}

          {/* </div> */}
          <p className="pComilla">
            {" "}
            <img
              src={Comilla}
              alt="Imagen de una comilla"
              className="imageComilla"
            />
            Nos ayudaron a gestionar todas las regulaciones para la construcción
            de nuestra terminal de almacenamiento. Avanzamos de forma eficiente
            y oportuna en cada etapa del proyecto.
            <img
              src={ComillaInf}
              alt="Comilla de cita inferior"
              className="comillaInferior"
            />
          </p>

          <div className="containerCitaInferior">
            <p>
              Cliente con terminales de almacenamiento en el norte del país.
            </p>{" "}
          </div>
        </div>
        <div className="containerTextComillas">
          {/* <div className="containerComilla"> */}

          {/* </div> */}
          <p className="pComilla">
            {" "}
            <img
              src={Comilla}
              alt="Imagen de una comilla"
              className="imageComilla"
            />
            Nos gusta la forma de trabajar de todo su equipo. Nos comunican en
            todo momento el avance de los proyectos y trámites; nos apoyan para
            capacitar e involucrar a todo nuestro equipo de trabajo.{" "}
            <img
              src={ComillaInf}
              alt="Comilla de cita inferior"
              className="comillaInferior"
            />
          </p>

          <div className="containerCitaInferior">
            <p>
              Cliente global con presencia en México con más 30 gasolineras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
