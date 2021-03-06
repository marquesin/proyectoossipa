import React from "react";
import emailjs from "emailjs-com";
import "./HablaConNosotros.css";
import mail from "./images/mail-icon.svg";
// import phone from "./images/icon-phone.svg";
import wpp from "./images/WPP@2x (1).png";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import { HashLink } from "react-router-hash-link";

export default function HablaConNosotros() {
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
    <section className="hablaConNos">
      {modal ? <Modal setModal={setModal} /> : ""}
      <h2 className="titleHablaConNosotros" id="contacto">
        HABLA CON NOSOTROS
      </h2>
      <div className="hileraFormVisit">
        <form className="containerFormulario" onSubmit={sendEmail}>
          <div className="containerCorreoNombreTemaTelMensaje">
            <div className="containerCorreoNombre">
              <input
                type="email"
                placeholder="Correo"
                className="inputContactenos"
                name="email"
              ></input>
              <input
                type="text"
                placeholder="Nombre"
                className="inputContactenos"
                name="nombre"
                id="inputNombre"
              />
            </div>
            <div className="containerTemaTel">
              <input
                type="text"
                placeholder="Tema"
                className="inputContactenos"
                name="tema"
              ></input>
              <input
                type="tel"
                placeholder="Teléfono"
                className="inputContactenos"
                name="telefono"
                id="inputTel"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
              className="texteaMensaje"
              name="mensaje"
            ></textarea>
          </div>

          <input
            className="buttonEnviarContactenos"
            value="Enviar"
            type="submit"
          />
          <p className="pPrivacidad">
            Al dar clic en enviar, acepta el{" "}
            <HashLink to="/AvisoDePrivacidad#AvisoDePrivacidad">
              <a href="#" className="aPrivacidad">
                Aviso de Privacidad de OSSIPA
              </a>
            </HashLink>
          </p>
        </form>
        <div className="containerVisitanos">
          <div className="itemVisitanos">
            <div className="CInfoVisit">
              <h3 className="infoVisitTitle">O usa tu aplicación de correo</h3>

              <h5 className="infoSubVisitTitle">
                <a href="mailto:contacto@ossipa.com">contacto@ossipa.com</a>
              </h5>
            </div>
            <a href="mailto:contacto@ossipa.com">
              <div className="containerIconVisit">
                <img src={mail} alt="Icono Mail" className="iconContactenos" />
              </div>
            </a>
          </div>
          <div className="itemVisitanos">
            <div className="CInfoVisit">
              <h3 className="infoVisitTitle">O chatea con nosotros</h3>

              <h5 className="infoSubVisitTitle">
                <a href="http://wa.me/+5215536736747">
                  respuesta menor a 1 hora
                </a>
              </h5>
            </div>
            <a href="http://wa.me/+5215536736747">
              <div className="containerIconVisit">
                <img src={wpp} alt="Icono wpp" className="iconContactenos" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
