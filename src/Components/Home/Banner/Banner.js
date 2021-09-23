import React from "react";
import "./Banner.css";
import { HashLink } from "react-router-hash-link";

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
          <HashLink to="/soluciones#SOLUCIONES">
            <button className="buttonBannerHomeSo">SOLUCIONES</button>
          </HashLink>
          <HashLink to="/nosotros#NOS">
            <button className="buttonBannerHomeNo">NOSOTROS</button>
          </HashLink>
        </div>{" "}
      </div>
    </div>
  );
}
