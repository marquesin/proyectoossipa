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
        <div className="containerbuttonBannerHome">
          <button className="buttonBannerHomeSo">SOLUCIONES</button>
          <button className="buttonBannerHomeNo">NOSOTROS</button>
        </div>{" "}
      </div>
    </div>
  );
}
