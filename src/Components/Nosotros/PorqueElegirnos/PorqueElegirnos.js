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
          ¿POR QUÉ ELEGIRNOS?
          {/* <span className="titlePorqueElegirnosColor">.</span> */}
        </h1>
        <Misiones />
      </div>
      <div className="containerTexsComillas">
        <div className="containerTextComillas">
          <div className="containerComilla">
            <img
              src={Comilla}
              alt="Imagen de una comilla"
              className="imageComilla"
            />
          </div>
          <p className="pComilla">
            Nos ayudaron a gestionar todas las regulaciones para la construcción
            de nuestra terminal de almacenamiento. Avanzamos de forma eficiente
            y oportuna en cada etapa del proyecto.
          </p>
          <div className="containerCitaInferior">
            <p>Grupo Gasolinero del Pacífico</p>{" "}
            <img src={ComillaInf} alt="Comilla de cita inferior" />
          </div>
        </div>
        <div className="containerTextComillas">
          <div className="containerComilla">
            <img
              src={Comilla}
              alt="Imagen de una comilla"
              className="imageComilla"
            />
          </div>
          <p className="pComilla">
            Nos gusta la forma de trabajar de todo su equipo. Nos comunican en
            todo momento el avance de los proyectos y trámites; nos apoyan para
            capacitar e involucrar a todo nuestro equipo de trabajo.
          </p>
          <div className="containerCitaInferior">
            <p>Naturgy de México</p>
            <img src={ComillaInf} alt="Comilla de cita inferior" />
          </div>
        </div>
      </div>
    </section>
  );
}
