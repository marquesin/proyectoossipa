import React from "react";
import "./Contactenos.css";

export default function Contactenos() {
  return (
    <section className="containerContactenos">
      <div className="ContainerMayorInformacion">
        <div className="mayorInfoC">
          <h3 className="mayorInfoh3">¿QUIERES MAYOR INFORMACIÓN?</h3>
        </div>
        <div className="containerImputMayorInfo">
          <input type="text" placeholder="Nombre" className="ImputMayorInfo" />
          <input type="text" placeholder="Email" className="ImputMayorInfo" />
          <input
            type="text"
            placeholder="Telefono"
            className="ImputMayorInfo"
          />
          {/* <input type="text" placeholder="Mensaje" /> */}
          <textarea
            name=""
            id=""
            cols="10"
            rows="5"
            placeholder="Mensaje"
            className="texteaMayorInfo"
          ></textarea>
          <button className="buttonEnviarMayorInfo">ENVIAR</button>
        </div>
      </div>
      <div className="conocenos">
        <h2 className="h2Conocenos">
          CONÓCENOS<span className="h2ConocenosColor">.</span>
        </h2>
        <p className="pConocenos">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo
        </p>
        <div className="continervaloresConocenos">
          <div className="valorConocenos">VALOR 1</div>
          <div className="valorConocenos">VALOR 2</div>
          <div className="valorConocenos">VALOR 3</div>
          <div className="valorConocenos">VALOR 4</div>
        </div>
      </div>
    </section>
  );
}
