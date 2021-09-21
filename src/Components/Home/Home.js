import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Banner from "./Banner/Banner";
import Contactenos from "./Contactenos/Contactenos";
import ComoPodemosAyudar from "./ComoPodemosAyudar/ComoPodemosAyudar";
import Blog from "./Blog/Blog";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Contactenos />
      <ComoPodemosAyudar />
      {/* <Blog /> */}
      <Footer />
    </main>
  );
}
