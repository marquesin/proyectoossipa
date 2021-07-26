import React from "react";
import "./HablaConNosotros.css";
import pleace from "./images/place-icon.svg";
import mail from "./images/mail-icon.svg";
import phone from "./images/icon-phone.svg";

export default function HablaConNosotros() {
  return (
    <section className="hablaConNos">
      <h2 className="titleHablaConNosotros">
        HABLA CON NOSOTROS<span className="titleHablaConNosotrosColor">.</span>
      </h2>
      <div className="hileraFormVisit">
        <div className="containerFormulario">
          <div className="containerCorreoNombreTemaTelMensaje">
            <div className="containerCorreoNombre">
              <input
                type="email"
                placeholder="Correo"
                className="inputContactenos"
              ></input>
              <input
                type="text"
                placeholder="Nombre"
                className="inputContactenos"
              />
            </div>
            <div className="containerTemaTel">
              <input
                type="text"
                placeholder="Tema"
                className="inputContactenos"
              ></input>
              <input
                type="tel"
                placeholder="Teléfono"
                className="inputContactenos"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
              className="texteaMensaje"
            ></textarea>
          </div>

          <button className="buttonEnviarContactenos">Enviar</button>
        </div>
        <div className="containerVisitanos">
          <div className="itemVisitanos">
            <div className="CInfoVisit">
              <h3 className="infoVisitTitle">Visítanos</h3>
              <h5 className="infoSubVisitTitle">Dirección incompleta</h5>
            </div>
            <div className="containerIconVisit">
              <img src={pleace} alt="Icono Lugar" />
            </div>
          </div>
          <div className="itemVisitanos">
            <div className="CInfoVisit">
              <h3 className="infoVisitTitle">Mándanos un mail</h3>
              <h5 className="infoSubVisitTitle">calidad@ossipa.com.mx</h5>
            </div>
            <div className="containerIconVisit">
              <img src={mail} alt="Icono Mail" />
            </div>
          </div>
          <div className="itemVisitanos">
            <div className="CInfoVisit">
              <h3 className="infoVisitTitle">Márcanos</h3>
              <h5 className="infoSubVisitTitle">00 00 00 00 00</h5>
            </div>
            <div className="containerIconVisit">
              <img src={phone} alt="Icono Phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
