import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Banner from "./Banner/Banner.js";
import Contenidos from "./Contenidos/Contenido";
import ComoPodemosAyudarte from "./ComoPodemosAyudarte/ComoPodemosAyudarte";

import "./Soluciones.css";

export default function Soluciones() {
  return (
    <main id="s">
      <Header />
      <Banner />
      <Contenidos />
      <ComoPodemosAyudarte />
      <Footer />
    </main>
  );
}
