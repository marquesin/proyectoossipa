import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Banner from "./Banner/Banner";
import Contactenos from "./Contactenos/Contactenos";
import ComoPodemosAyudar from "./ComoPodemosAyudar/ComoPodemosAyudar";
import Blog from "./Blog/Blog";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Contactenos />
      <ComoPodemosAyudar />
      <Blog />
    </main>
  );
}
