import React from "react";
import "./ComoPodemosAyudar.css";

export default function ComoPodemosAyudar() {
  return (
    <section className="containerCPA">
      <h2 className="h2CPA">
        <span className="h2CPAColor">¿</span> CÓMO PODEMOS AYUDAR{" "}
        <span className="h2CPAColor">?</span>
      </h2>
      <p className="pCPA">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <div className="containerServiciosCPA">
        <div className="ServiciosCPA">
          <button className="buttonServiciosCPA"></button>
          <p className="pServiciosCPA">SERVICIO 1</p>
        </div>
        <div className="ServiciosCPA">
          <button className="buttonServiciosCPA"></button>
          <p className="pServiciosCPA">SERVICIO 2</p>
        </div>
        <div className="ServiciosCPA">
          <button className="buttonServiciosCPA" id="buttonSectPueba"></button>
          <p className="pServiciosCPA" id="pSectPueba">
            SERVICIO 3
          </p>
        </div>
        <div className="ServiciosCPA">
          <button className="buttonServiciosCPA"></button>
          <p className="pServiciosCPA">SERVICIO 4</p>
        </div>
        <div className="ServiciosCPA">
          <button className="buttonServiciosCPA"></button>
          <p className="pServiciosCPA">SERVICIO 5</p>
        </div>
        <div className="ServiciosCPA">
          <button className="buttonServiciosCPA"></button>
          <p className="pServiciosCPA">SERVICIO 6</p>
        </div>
      </div>
      <div className="servicioAmpliado">
        <div className="ServicioAmpliadoInfo">
          <h4 className="h4ServicioAmpliado">SERVICIO 3</h4>
          <p className="pServicioAmpliado">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo
          </p>
        </div>
        <div className="ServicioAmpliadoFoto">imagen</div>
      </div>
    </section>
  );
}
