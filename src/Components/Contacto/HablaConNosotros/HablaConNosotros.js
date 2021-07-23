import React from "react";
import "./HablaConNosotros.css";

export default function HablaConNosotros() {
  return (
    <section className="hablaConNos">
      <h2 className="titleHablaConNosotros">
        HABLA CON NOSOTROS<span>.</span>
      </h2>
      <div className="containerFormulario">
        <div>
          <div>
            <input type="email" placeholder="Correo"></input>
            <input type="text" placeholder="Nombre" />
          </div>
          <div>
            {" "}
            <input type="text" placeholder="Tema"></input>
            <input type="tel" placeholder="Teléfono" />
          </div>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Mensaje"
        ></textarea>
        <button>Enviar</button>
      </div>
      <div>
        <div>visitanos</div>
        <div>mandanos un mail</div>
        <div>marcanos</div>
      </div>
    </section>
  );
}
