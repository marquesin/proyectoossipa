import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="containterIntroBanner">
        <h1 className="titleHome">
          SLOGAN <span className="titleColor">PRINCIPAL</span> DE MARCA
        </h1>
        <p className="parrafoTitle">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna ipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et d
        </p>
        <div className="containerbuttonBanner">
          <button>SOLUCIONES</button>
          <button>NOSOTROS</button>
        </div>{" "}
      </div>
    </div>
  );
}
