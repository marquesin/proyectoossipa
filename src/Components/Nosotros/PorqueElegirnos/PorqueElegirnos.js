import React from "react";
import "./PorqueElegirnos.css";
import Comilla from "./images/Comilla.svg";
import Misiones from "./Misiones/Misiones";

export default function PorqueElegirnos() {
  return (
    <section className="containerPorqueElegirnos">
      <div className="containerTitleyMisiones">
        <h1 className="titlePorqueElegirnos">
          POR QUÉ ELEGIRNOS<span className="titlePorqueElegirnosColor">.</span>
        </h1>
        <Misiones />
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod.
        </p>
      </div>
    </section>
  );
}
