import React from "react";
import "./Contacto.css";
import Header from "../Header/Header";
import Banner from "./Banner/Banner.js";
import Footer from "../Footer/Footer";
import HablaConNosotros from "./HablaConNosotros/HablaConNosotros";

export default function Contacto() {
  return (
    <main>
      <Header />
      <Banner />
      <HablaConNosotros />
      <Footer />
    </main>
  );
}
