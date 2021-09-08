import React from "react";
import "./ComoPodemosAyudarte.css";
import { HashLink } from "react-router-hash-link";

export default function ComoPodemosAyudarte() {
  return (
    <div className="containerComoPodemosAyudarte">
      <h2 className="titleComoPodemosAyudarte">¿ CÓMO PODEMOS AYUDARTE ?</h2>
      <HashLink to="/contacto#contacto">
        <button className="buttonContactameComoPodemosAyudarte">
          CONTÁCTANOS
        </button>
      </HashLink>
    </div>
  );
}
