import React from "react";
import "./Contactenos.css";
import flecha from "../images/Arrow-2.svg";
import emailjs from "emailjs-com";
import Modal from "../../Modal/Modal";
import { useState } from "react";
import compromiso from "./img/Valor1-Compromiso.svg";
import confianza from "./img/Valor2-Confianza.svg";
import conocimiento from "./img/Valor3-Conocimiento.svg";
import experiancia from "./img/Valor4-Experiencia.svg";
import { HashLink } from "react-router-hash-link";

export default function Contactenos() {
  const [modal, setModal] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8e472me",
        "template_qajxckh",
        e.target,
        "user_BzbnwLLjlHwqfefH083rh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section className="containerContactenos">
      {modal ? <Modal setModal={setModal} /> : ""}
      <div className="ContainerMayorInformacion">
        <form className="containerFormulario" onSubmit={sendEmail}>
          <div className="mayorInfoC">
            <h3 className="mayorInfoh3">¿QUIERES MAYOR INFORMACIÓN?</h3>
          </div>

          <div className="containerImputMayorInfo">
            <input
              type="text"
              placeholder="Nombre"
              className="ImputMayorInfo"
              name="nombre"
            />
            <input
              type="email"
              placeholder="Email"
              className="ImputMayorInfo"
              name="email"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="ImputMayorInfo"
              name="telefono"
            />
            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Mensaje"
              className="texteaMayorInfo"
              name="mensaje"
            ></textarea>
            <input
              className="buttonEnviarMayorInfo"
              value="Enviar"
              type="submit"
            ></input>
            <p id="pAvisoDePrivacidad">
              Al dar clic en enviar, acepta el <br />
              <HashLink to="/AvisoDePrivacidad#AvisoDePrivacidad">
                <a href="#"> Aviso de Privacidad de OSSIPA</a>
              </HashLink>
            </p>
          </div>
        </form>
      </div>
      <div className="conocenos">
        <h2 className="h2Conocenos">
          <img src={flecha} /> CONÓCENOS
        </h2>
        <p className="pConocenos">
          Somos un grupo de especialistas enfocados en el desarrollo eficaz de
          procesos de ingeniería, asesoría regulatoria y administración de las
          operaciones relacionadas con la cadena de suministro y logística final
          de combustibles y otros hidrocarburos.
        </p>
        <div className="continervaloresConocenos">
          <div className="valorConocenos">
            <img src={compromiso} alt="Icono de Compromiso" />
            <p className="pValor"> COMPROMISO</p>
          </div>
          <div className="valorConocenos">
            <img src={confianza} alt="Icono Confianza" />
            <p className="pValor"> CONFIANZA</p>
          </div>
          <div className="valorConocenos">
            <img src={conocimiento} alt="Icono Conocimiento" />
            <p className="pValor"> CONOCIMIENTO</p>
          </div>
          <div className="valorConocenos">
            <img src={experiancia} alt="Icono Experiencia" />
            <p className="pValor"> EXPERIENCIA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
