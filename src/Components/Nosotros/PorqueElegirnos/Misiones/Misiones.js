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
          <h5 className="titleMisiones">Nuestra misión 1</h5>
          <button
            onClick={() => setMision1(!mision1)}
            className={mision1 ? "buttonMisiones-" : "buttonMisiones"}
          >
            {mision1 ? <p>-</p> : <p>+</p>}
          </button>
        </div>
        {mision1 ? (
          <p className="pMisiones">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore ma ed diam nonumy
            eirmod tempor invidunt ut labore et dolore ma
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="containerMisionCompleta">
        <div className={mision2 ? "titleMasButton-" : "titleMasButton"}>
          <h5 className="titleMisiones">Nuestra misión 2</h5>
          <button
            onClick={() => setMision2(!mision2)}
            className={mision2 ? "buttonMisiones-" : "buttonMisiones"}
          >
            {mision2 ? <p>-</p> : <p>+</p>}
          </button>
        </div>
        {mision2 ? (
          <p className="pMisiones">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore ma ed diam nonumy
            eirmod tempor invidunt ut labore et dolore ma
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="containerMisionCompleta">
        <div className={mision3 ? "titleMasButton-" : "titleMasButton"}>
          <h5 className="titleMisiones">Nuestra misión 3</h5>
          <button
            onClick={() => setMision3(!mision3)}
            className={mision3 ? "buttonMisiones-" : "buttonMisiones"}
          >
            {mision3 ? <p>-</p> : <p>+</p>}
          </button>
        </div>
        {mision3 ? (
          <p className="pMisiones">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore ma ed diam nonumy
            eirmod tempor invidunt ut labore et dolore ma
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
