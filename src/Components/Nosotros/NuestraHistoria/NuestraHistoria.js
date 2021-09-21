import React from "react";
import "./NuestraHistoria.css";
import comillaOSup from "../PorqueElegirnos/images/ComillasOscurasSup.svg";
import comillaOInf from "../PorqueElegirnos/images/ComillasOscurasInf.svg";
import flecha from "../img/Arrow-3.svg";

export default function NuestraHistoria() {
  return (
    <section className="containerNuestraHistoria">
      <div className="nuestraHistoriaIzquierda">
        <h1 className="titleNuestraHistoria">
          <img src={flecha} alt="Icono flecha" /> NUESTRA HISTORIA
        </h1>
        <p className="p2NuestraHistoria">
          Grupo Ossipa nace como respuesta a las necesidades de nuestros
          clientes pertenecientes a la cadena de suministro y logística final de
          combustibles y otros hidrocarburos. Desde su concepción, construcción,
          procesos regulatorios, hasta la administración y seguimiento
          operativo.
          <br />
          <br />
          Buscamos ser el brazo derecho de nuestros clientes en la ejecución de
          procesos de ingeniería, asesoría regulatoria y administración de
          operaciones.
        </p>
      </div>
      {/* Display none por cambios en el diseño ↓↓↓↓↓*/}
      <div className="nuestraHistoriaDerecha">
        <div className="hilera1">
          <div className="containerTilulos">
            <div className="containerIcon"></div>
            <h5 className="titulosNuestraHistoria">TÍTULO 1</h5>
            <p className="parrafoNuestraHistoria">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
          <div className="containerTilulos">
            <div className="containerIcon"></div>
            <h5 className="titulosNuestraHistoria">TÍTULO 2</h5>
            <p className="parrafoNuestraHistoria">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
        </div>
        <div className="hilera2">
          <div className="containerTilulos">
            <div className="containerIcon"></div>
            <h5 className="titulosNuestraHistoria">TÍTULO 3</h5>
            <p className="parrafoNuestraHistoria">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
          <div className="containerTilulos">
            <div className="containerIcon"></div>
            <h5 className="titulosNuestraHistoria">TÍTULO 4</h5>
            <p className="parrafoNuestraHistoria">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>
        </div>
      </div>
      {/* Display none por cambios en el diseño ↑↑↑↑↑*/}
      <div className="nuestraHistoriaDerechaComillas">
        <div className="containerComilla">
          <img src={comillaOSup} alt="Comillas cita" />
        </div>
        <p className="pComilla sup">
          Nuestro compromiso es siempre contigo y tu negocio.
          <br />
          <br />
          Resolvemos eficazmente y te acompañamos en el proceso.
        </p>
        <div className="ContainerComillaInf">
          <img src={comillaOInf} alt="Comillas cita" />
        </div>
      </div>
    </section>
  );
}
