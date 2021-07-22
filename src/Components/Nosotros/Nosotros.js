import React from "react";
import "./Nosotros.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import NuestraHistoria from "./NuestraHistoria/NuestraHistoria";

export default function Nosotros() {
  return (
    <main>
      <Header />
      <Banner />
      <NuestraHistoria />
      <Footer />
    </main>
  );
}
