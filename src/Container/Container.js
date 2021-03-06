import React from "react";
import "./Container.css";
import Home from "../Components/Home/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nosotros from "../Components/Nosotros/Nosotros.js";
import Contacto from "../Components/Contacto/Contacto.js";
import Soluciones from "../Components/Soluciones/Soluciones";
import AvisoDePrivacidad from "../Components/AvisoDePrivacidad/AvisoDePrivacidad";

export default function Container() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/soluciones">
            <Soluciones />
          </Route>
          {/* prueba Terminos y condiciones */}
          <Route path="/AvisoDePrivacidad" exact>
            <AvisoDePrivacidad />
          </Route>
          {/* prueba terminos */}
        </Switch>
      </Router>
    </div>
  );
}
