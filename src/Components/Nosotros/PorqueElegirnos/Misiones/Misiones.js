import React from "react";
import "./Misiones.css";
import { useState } from "react";

export default function Misiones() {
  const [mision1, setMision1] = useState(false);
  const [mision2, setMision2] = useState(false);
  const [mision3, setMision3] = useState(false);

  return (
    <div className="containerMisiones">
      <div className="containerMisionCompleta">
        <div className={mision1 ? "titleMasButton-" : "titleMasButton"}>
          <h5 className="titleMisiones">OSSIPA</h5>
          <button
            onClick={() => setMision1(!mision1)}
            className={mision1 ? "buttonMisiones-" : "buttonMisiones"}
          >
            {mision1 ? <p>-</p> : <p>+</p>}
          </button>
        </div>
        {mision1 ? (
          <p className="pMisiones">
            Generamos soluciones eficientes para los procesos y actividades de
            la cadena de suministro y logística de combustibles e hidrocarburos.
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="containerMisionCompleta">
        <div className={mision2 ? "titleMasButton-" : "titleMasButton"}>
          <h5 className="titleMisiones">MISIÓN</h5>
          <button
            onClick={() => setMision2(!mision2)}
            className={mision2 ? "buttonMisiones-" : "buttonMisiones"}
          >
            {mision2 ? <p>-</p> : <p>+</p>}
          </button>
        </div>
        {mision2 ? (
          <p className="pMisiones">
            Ser el brazo derecho de nuestros clientes en la ejecución de
            procesos de ingeniería, asesoría regulatoria y administración de las
            operaciones en sus actividades relacionadas con la cadena de
            suministro y logística final de combustibles y otros hidrocarburos.
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="containerMisionCompleta">
        <div className={mision3 ? "titleMasButton-" : "titleMasButton"}>
          <h5 className="titleMisiones">VISIÓN</h5>
          <button
            onClick={() => setMision3(!mision3)}
            className={mision3 ? "buttonMisiones-" : "buttonMisiones"}
          >
            {mision3 ? <p>-</p> : <p>+</p>}
          </button>
        </div>
        {mision3 ? (
          <p className="pMisiones">
            Convertirnos en el despacho de consultoría regulatoria número 1 de
            México en cuanto a número de procesos regulatorios concluidos
            exitosamente, clientes satisfechos y clima laboral de nuestra
            organización.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
