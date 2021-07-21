import React from "react";
import "./Servicios.css";

export default function Servicios(props) {
  return (
    <section>
      {/* SERVICIO 1 */}
      {props.despliega1 ? (
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">SERVICIO 1</h4>
            <p className="pServicioAmpliado">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo
            </p>
          </div>
          <div className="ServicioAmpliadoFoto">imagen</div>
        </div>
      ) : props.despliega2 ? (
        //   {/* SERVICIO 1 */}

        //   {/* SERVICIO 2 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">SERVICIO 2</h4>
            <p className="pServicioAmpliado">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo
            </p>
          </div>
          <div className="ServicioAmpliadoFoto">imagen</div>
        </div>
      ) : props.despliega3 ? (
        //   {/* SERVICIO 2 */}

        //   {/* SERVICIO 3 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">SERVICIO 3</h4>
            <p className="pServicioAmpliado">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo
            </p>
          </div>
          <div className="ServicioAmpliadoFoto">imagen</div>
        </div>
      ) : props.despliega4 ? (
        //   {/* SERVICIO 3 */}

        //   {/* SERVICIO 4 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">SERVICIO 4</h4>
            <p className="pServicioAmpliado">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo
            </p>
          </div>
          <div className="ServicioAmpliadoFoto">imagen</div>
        </div>
      ) : props.despliega5 ? (
        //   {/* SERVICIO 4 */}

        //   {/* SERVICIO 5 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">SERVICIO 5</h4>
            <p className="pServicioAmpliado">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo
            </p>
          </div>
          <div className="ServicioAmpliadoFoto">imagen</div>
        </div>
      ) : props.despliega6 ? (
        //   {/* SERVICIO 5 */}

        //   {/* SERVICIO 6 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">SERVICIO 6</h4>
            <p className="pServicioAmpliado">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo
            </p>
          </div>
          <div className="ServicioAmpliadoFoto">imagen</div>
        </div>
      ) : (
        ""
      )}
      {/* SERVICIO 6 */}
    </section>
  );
}
