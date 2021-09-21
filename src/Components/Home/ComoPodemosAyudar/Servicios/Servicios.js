import React from "react";
import "./Servicios.css";
import { HashLink } from "react-router-hash-link";
import left from "../images/caret-left-solid.svg";
import right from "../images/caret-right-solid.svg";

export default function Servicios(props) {
  var Servicio1 = () => (
    <div className="servicioAmpliado">
      <div className="ServicioAmpliadoInfo">
        <h4 className="h4ServicioAmpliado">ASEA</h4>
        <p className="pServicioAmpliado">
          La Agencia de Seguridad, Energía y Ambiente se encarga de supervisar
          la seguridad industrial y operativa relacionada a la protección del
          medio ambiente. Nosotros te acompañamos y asesoramos para cumplir con
          cada uno de sus requerimientos.
          <ul>
            <li>Manifestación de Impacto Ambiental (MIA) </li>
            <li>SASISOPA</li>
            <li>Estudio de Riesgo Ambiental (ERA)</li>
            <li>Licencia de Funcionamiento (LF - ESTACIÓN DE SERVICIO)</li>
          </ul>
        </p>
        <HashLink to="/soluciones#ASEA">
          <button className="buttonServicioAmpliado">Ver más</button>
        </HashLink>
      </div>
      <div className="ServicioAmpliadoFoto">
        <button
          className="buttonServiciosResponsive"
          onClick={() => {
            props.setDespliga1(false);
            props.setDespliga2(false);
            props.setDespliga3(false);
            props.setDespliga4(false);
            props.setDespliga5(false);
            props.setDespliga6(true);
          }}
        >
          <img
            src={left}
            alt=""
            className="iconButtonServiciosAmpliado"
            className="left"
          />
        </button>
        <button
          className="buttonServiciosResponsive"
          onClick={() => {
            props.setDespliga1(false);
            props.setDespliga2(true);
            props.setDespliga3(false);
            props.setDespliga4(false);
            props.setDespliga5(false);
            props.setDespliga6(false);
          }}
        >
          <img
            src={right}
            alt=""
            className="iconButtonServiciosAmpliado"
            className="right"
          />
        </button>
      </div>
    </div>
  );

  return (
    <section>
      {/* SERVICIO 1 */}
      {props.despliega1 ? (
        Servicio1()
      ) : //   {/* SERVICIO 1 */}
      props.despliega2 ? (
        //   {/* SERVICIO 2 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">CRE</h4>
            <p className="pServicioAmpliado">
              La Comisión Reguladora de Energía se encarga de los asuntos en
              materia energética, de hidrocarburos y de la industria eléctrica,
              entre otras. Te ayudamos y asesoramos para cumplir con cada uno de
              sus requerimientos.
              <ul>
                <li>
                  Obtención de permisos: almacenamiento, estación de servicio,
                  comercialización, transporte, estación de carburación etc.{" "}
                </li>
                <li>Sistema de Gestión de Medición</li>
              </ul>
            </p>
            <HashLink to="/soluciones#CRE">
              <button className="buttonServicioAmpliado">Ver más</button>
            </HashLink>
          </div>
          <div className="ServicioAmpliadoFoto">
            {" "}
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(true);
                props.setDespliga2(false);
                props.setDespliga3(false);
                props.setDespliga4(false);
                props.setDespliga5(false);
                props.setDespliga6(false);
              }}
            >
              <img
                src={left}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="left"
              />
            </button>
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(false);
                props.setDespliga2(false);
                props.setDespliga3(true);
                props.setDespliga4(false);
                props.setDespliga5(false);
                props.setDespliga6(false);
              }}
            >
              <img
                src={right}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="right"
              />
            </button>
          </div>
        </div>
      ) : props.despliega3 ? (
        //   {/* SERVICIO 2 */}

        //   {/* SERVICIO 3 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">SENER</h4>
            <p className="pServicioAmpliado">
              La Secretaría de Energía es encargada de la administración y
              regulación de los recursos energéticos del país. Te ofrecemos
              asesoría, administración y apoyo con los trámites relacionados con
              esta secretaría.
              <ul>
                <li>Evaluación de Impacto Social (EVIS)</li>
                <li> Permiso de Importación</li>
              </ul>
            </p>
            <HashLink to="/soluciones#SENER">
              <button className="buttonServicioAmpliado">Ver más</button>
            </HashLink>
          </div>
          <div className="ServicioAmpliadoFoto">
            {" "}
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(false);
                props.setDespliga2(true);
                props.setDespliga3(false);
                props.setDespliga4(false);
                props.setDespliga5(false);
                props.setDespliga6(false);
              }}
            >
              <img
                src={left}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="left"
              />
            </button>
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(false);
                props.setDespliga2(false);
                props.setDespliga3(false);
                props.setDespliga4(true);
                props.setDespliga5(false);
                props.setDespliga6(false);
              }}
            >
              <img
                src={right}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="right"
              />
            </button>
          </div>
        </div>
      ) : props.despliega4 ? (
        //   {/* SERVICIO 3 */}

        //   {/* SERVICIO 4 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">CONSULTORÍA</h4>
            <p className="pServicioAmpliado">
              Elaboramos un plan de diagnóstico, seguimiento, asesoría y
              representación integral para las instalaciones del sector
              Hidrocarburos. Escuchamos tus requerimientos y construimos las
              soluciones más apropiadas para su cumplimiento.
              <ul>
                <li>Diagnóstico actual de la instalación </li>
                <li>
                  Programación para atención a permisos o autorizaciones
                  faltantes críticas
                </li>
                <li>Seguimiento oportuno a solicitudes ante ASEA y CRE </li>
                <li>
                  Apoyo para integración de expedientes de solicitud de permisos
                  nuevos.
                </li>
              </ul>
            </p>
            <HashLink to="/soluciones#CONSULTORIA">
              <button className="buttonServicioAmpliado">Ver más</button>
            </HashLink>
          </div>
          <div className="ServicioAmpliadoFoto">
            {" "}
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(false);
                props.setDespliga2(false);
                props.setDespliga3(true);
                props.setDespliga4(false);
                props.setDespliga5(false);
                props.setDespliga6(false);
              }}
            >
              <img
                src={left}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="left"
              />
            </button>
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(false);
                props.setDespliga2(false);
                props.setDespliga3(false);
                props.setDespliga4(false);
                props.setDespliga5(true);
                props.setDespliga6(false);
              }}
            >
              <img
                src={right}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="right"
              />
            </button>
          </div>
        </div>
      ) : props.despliega5 ? (
        //   {/* SERVICIO 4 */}

        //   {/* SERVICIO 5 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">
              ADMINISTRACIÓN Y OPTIMIZACIÓN
            </h4>
            <p className="pServicioAmpliado">
              Contamos con herramientas que te ayuden a administrar tu negocio y
              hacer más eficiente tus procesos e implementaciones.
              <ul>
                <li>Software para Administración </li>
                <li>
                  Conformación e implementación de Sistema de Gestión de
                  Medición
                </li>
                <li>
                  Conformación e implementación de SASISOPA por medio de
                  software.
                </li>
              </ul>
            </p>
            <HashLink to="/soluciones#ADMINISTRACION">
              <button className="buttonServicioAmpliado">Ver más</button>
            </HashLink>
          </div>
          <div className="ServicioAmpliadoFoto">
            {" "}
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(false);
                props.setDespliga2(false);
                props.setDespliga3(false);
                props.setDespliga4(true);
                props.setDespliga5(false);
                props.setDespliga6(false);
              }}
            >
              <img
                src={left}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="left"
              />
            </button>
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(false);
                props.setDespliga2(false);
                props.setDespliga3(false);
                props.setDespliga4(false);
                props.setDespliga5(false);
                props.setDespliga6(true);
              }}
            >
              <img
                src={right}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="right"
              />
            </button>
          </div>
        </div>
      ) : props.despliega6 ? (
        //   {/* SERVICIO 5 */}

        //   {/* SERVICIO 6 */}
        <div className="servicioAmpliado">
          <div className="ServicioAmpliadoInfo">
            <h4 className="h4ServicioAmpliado">NUEVOS NEGOCIOS</h4>
            <p className="pServicioAmpliado">
              Damos seguimiento, acompañamiento y gestión conjunta necesaria
              para llevar a cabo la construcción de nuevas instalaciones.
              <ul>
                <li>Servicios de ingeniería básica </li>
                <li>Ingeniería a detalle</li>
                <li>Ingeniería conceptual</li>
                <li>Asesoría en construcción</li>
                <li>Análisis y evaluación de factibilidad</li>
                <li> Evaluación de predio</li>
              </ul>
            </p>
            <HashLink to="/soluciones#NUEVOS-NEGOCIOS">
              <button className="buttonServicioAmpliado">Ver más</button>
            </HashLink>
          </div>
          <div className="ServicioAmpliadoFoto">
            {" "}
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(false);
                props.setDespliga2(false);
                props.setDespliga3(false);
                props.setDespliga4(false);
                props.setDespliga5(true);
                props.setDespliga6(false);
              }}
            >
              <img
                src={left}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="left"
              />
            </button>
            <button
              className="buttonServiciosResponsive"
              onClick={() => {
                props.setDespliga1(true);
                props.setDespliga2(false);
                props.setDespliga3(false);
                props.setDespliga4(false);
                props.setDespliga5(false);
                props.setDespliga6(false);
              }}
            >
              <img
                src={right}
                alt=""
                className="iconButtonServiciosAmpliado"
                className="right"
              />
            </button>
          </div>
        </div>
      ) : (
        Servicio1()
      )}
      {/* SERVICIO 6 */}
    </section>
  );
}
