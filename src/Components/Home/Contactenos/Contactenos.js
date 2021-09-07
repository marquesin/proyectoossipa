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
          <input type="email" placeholder="Email" className="ImputMayorInfo" />
          <input
            type="tel"
            placeholder="Telefono"
            className="ImputMayorInfo"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
          Somos un grupo de especialistas enfocados en el desarrollo eficaz de
          procesos de ingeniería, asesoría regulatoria y administración de las
          operaciones relacionadas con la cadena de suministro y logística final
          de combustibles y otros hidrocarburos.
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
