import React from "react";
import "./NuestraHistoria.css";

export default function NuestraHistoria() {
  return (
    <section className="containerNuestraHistoria">
      <div className="nuestraHistoriaIzquierda">
        <h1 className="titleNuestraHistoria">
          NUESTRA HISTORIA<span className="titleNuestraHistoriaColor">.</span>
        </h1>
        <p className="p1NuestraHistoria">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <p className="p2NuestraHistoria">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam.
        </p>
      </div>
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
    </section>
  );
}
