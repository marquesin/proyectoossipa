import React from "react";
import "./Modal.css";
import { useState } from "react";

export default function Modal(props) {
  return (
    <div className="containerModal">
      <div className="containerButtonModal">
        <button className="buttonModal" onClick={() => props.setModal(false)}>
          X
        </button>
      </div>
      <h1 className="titleModal">¡GRACIAS POR CONTACTARNOS! </h1>
      <h2 className="subTitleModal"> Tu información se envió correctamente.</h2>
      <p className="pModal">
        En breve nos comunicaremos a los datos proporcionados.
      </p>
      <button className="DeAcuerdoButton" onClick={() => props.setModal(false)}>
        De acuerdo
      </button>
    </div>
  );
}
