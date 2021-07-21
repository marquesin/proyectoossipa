import React from "react";
import "./ComoPodemosAyudar.css";
import iconN from "./images/iconServiciosNatural.svg";
import iconC from "./images/iconServiciosClikeado.svg";
import { useState } from "react";
import Servicios from "./Servicios/Servicios";

export default function ComoPodemosAyudar() {
  const [hover, setHover] = useState(false);
  const [despliega1, setDespliga1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [despliega2, setDespliga2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [despliega3, setDespliga3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [despliega4, setDespliga4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [despliega5, setDespliga5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [despliega6, setDespliga6] = useState(false);

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
          <button
            className="buttonServiciosCPA"
            onMouseEnter={() => {
              setHover(!hover);
            }}
            onMouseLeave={() => {
              setHover(!hover);
            }}
            onClick={() => {
              setDespliga1(!despliega1);
            }}
          >
            <IconosCambiantesEnServicios hover={hover} />
          </button>
          <p className="pServiciosCPA">SERVICIO 1</p>
        </div>
        <div className="ServiciosCPA">
          <button
            className="buttonServiciosCPA"
            onMouseEnter={() => {
              setHover2(!hover2);
            }}
            onMouseLeave={() => {
              setHover2(!hover2);
            }}
            onClick={() => {
              setDespliga2(!despliega2);
            }}
          >
            <IconosCambiantesEnServicios hover={hover2} />
          </button>
          <p className="pServiciosCPA">SERVICIO 2</p>
        </div>
        <div className="ServiciosCPA">
          <button
            className="buttonServiciosCPA"
            id="buttonSectPueba"
            onMouseEnter={() => {
              setHover3(!hover3);
            }}
            onMouseLeave={() => {
              setHover3(!hover3);
            }}
            onClick={() => {
              setDespliga3(!despliega3);
            }}
          >
            <IconosCambiantesEnServicios hover={hover3} />
          </button>
          <p
            className="pServiciosCPA"
            // id="pSectPueba"
          >
            SERVICIO 3
          </p>
        </div>
        <div className="ServiciosCPA">
          <button
            className="buttonServiciosCPA"
            onMouseEnter={() => {
              setHover4(!hover4);
            }}
            onMouseLeave={() => {
              setHover4(!hover4);
            }}
            onClick={() => {
              setDespliga4(!despliega4);
            }}
          >
            <IconosCambiantesEnServicios hover={hover4} />
          </button>
          <p className="pServiciosCPA">SERVICIO 4</p>
        </div>
        <div className="ServiciosCPA">
          <button
            className="buttonServiciosCPA"
            onMouseEnter={() => {
              setHover5(!hover5);
            }}
            onMouseLeave={() => {
              setHover5(!hover5);
            }}
            onClick={() => {
              setDespliga5(!despliega5);
            }}
          >
            <IconosCambiantesEnServicios hover={hover5} />
          </button>
          <p className="pServiciosCPA">SERVICIO 5</p>
        </div>
        <div className="ServiciosCPA">
          <button
            className="buttonServiciosCPA"
            onMouseEnter={() => {
              setHover6(!hover6);
            }}
            onMouseLeave={() => {
              setHover6(!hover6);
            }}
            onClick={() => {
              setDespliga6(!despliega6);
            }}
          >
            <IconosCambiantesEnServicios hover={hover6} />
          </button>
          <p className="pServiciosCPA">SERVICIO 6</p>
        </div>
      </div>
      <Servicios
        despliega1={despliega1}
        despliega2={despliega2}
        despliega3={despliega3}
        despliega4={despliega4}
        despliega5={despliega5}
        despliega6={despliega6}
      />
    </section>
  );
}

function IconosCambiantesEnServicios(props) {
  return (
    <>
      {props.hover ? (
        <img src={iconC} alt="icon" className="icon" />
      ) : props.hover === false ? (
        <img src={iconN} alt="icon" className="icon" />
      ) : (
        ""
      )}
    </>
  );
}
