import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner" id="bannerHome">
      <div className="containterIntroBanner">
        <h1 className="titleHome">
          Impulsamos el{" "}
          <span className="titleColor">desarrollo de negocios</span> en el
          sector combustibles e hidrocarburos.
        </h1>
        <div className="containerParrafoTitle">
          <p className="parrafoTitle">
            Generamos soluciones eficientes para los procesos y actividades de
            la cadena de suministro y logística de combustibles e hidrocarburos.
          </p>
        </div>
        <div className="containerbuttonBannerHome">
          <button className="buttonBannerHomeSo">SOLUCIONES</button>
          <button className="buttonBannerHomeNo">NOSOTROS</button>
        </div>{" "}
      </div>
    </div>
  );
}
