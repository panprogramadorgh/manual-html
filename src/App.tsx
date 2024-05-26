import { useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import CodeBox from "./components/CodeBox";
import AsideBtn from "./components/AsideBtn";
import Page from "./components/Page";

// Code coloring
import fetchCode from "./utils/fetch-code";
import fromStringToCode from "./utils/code-coloring";
//

import "./App.css";

function App() {
  const [showAside, setShowAside] = useState<boolean>(true);
  const handleAsideBtnClick = () => setShowAside((prev) => !prev);

  return (
    <>
      <div className="App">
        <Aside
          hidden={showAside === false}
          asideBtnAction={handleAsideBtnClick}
        />
        <main className="App__main">
          {!showAside ? (
            <div className="App__aside-btn-container">
              <AsideBtn callback={handleAsideBtnClick} />
            </div>
          ) : null}
          <div className="App__section-container">
            <section>
              <Header />
              <article id="sobre-manual">
                <h2>Sobre el manual</h2>
                <p>
                  En este sitio web encontraremos un manual con algunas de las
                  principales caracteristicas de HTML en su ultima version.
                </p>
                <p>
                  Mi objetivo es que cualquiera que tras leer y comprender por
                  completo este manual, pueda desarrollar paginas estaticas
                  sencillas maquetadas en HTML.
                </p>
                <p className="highlighted">
                  La aplicacion incluye una barra de navegacion lateral{" "}
                  <AsideBtn callback={handleAsideBtnClick} /> con todos los
                  contenidos del manual que ayudara al usuario a encontrar el
                  temario mas facilmente, mejorando asi la experiencia de uso.
                </p>
              </article>
              <hr />
              <article id="desarrollo-manual">
                <h2>Desarrollo del manual</h2>
                <p>
                  Esta aplicacion fue desarrollada con la libreria de interfaces
                  de usuario desarrollada por Meta{" "}
                  <a href="https://es.react.dev/" target="_BLANK">
                    React
                  </a>
                  . Para facilitar el desarrollo utilice el empaquetador de
                  aplicaciones <a href="https://vitejs.dev/">ViteJS</a>, que me
                  proporciono de un servidor de desarrollo empaquetador de
                  archivos estaticos (en este caso las interfaces de React se
                  renderizan en el lado del cliente).
                </p>
                <p>
                  En mi perfil de GitHub podemos encontrar el{" "}
                  <a
                    href="https://github.com/panprogramadorgh/manual-html"
                    target="_BLANK"
                  >
                    repositorio con el codigo fuente
                  </a>{" "}
                  correspondiente a esta aplicacion.
                </p>
                <img
                  src="/imgs/github-profile.png"
                  alt="imagen de perfil de github"
                />
              </article>
              <hr />
              <article id="lenguaje-html">
                <h2>Lenguaje HTML</h2>
                <h3>¿ Cual es el significado de HTML ?</h3>
                <p>
                  HTML, que significa <span>"HyperText Markup Language"</span>{" "}
                  (Lenguaje de Marcado de Hipertexto), es el lenguaje estándar
                  utilizado para crear y diseñar páginas web. Se trata de un
                  lenguaje de marcado, lo que significa que utiliza etiquetas
                  para definir la estructura y el contenido de un documento web.
                </p>
                <CodeBox
                  skeletonLines={11}
                  getTabs={async () => {
                    return [
                      {
                        label: "index.html",
                        content: fromStringToCode(
                          await fetchCode("index.html")
                        ),
                        highlightedLines: [8, 9, 10],
                      },
                    ];
                  }}
                />
                <h3>Implicacion del navegador</h3>
                <p>
                  Cuando visitas una página web, tu navegador envía una
                  solicitud al servidor que aloja esa página. El servidor
                  responde enviando el documento HTML, junto con otros archivos
                  necesarios como CSS (para estilos) y JavaScript (para
                  interactividad). El navegador lee el HTML para construir una
                  estructura llamada DOM, luego aplica los estilos CSS y calcula
                  dónde debe ir cada elemento en la pantalla. Finalmente, pinta
                  la página en la pantalla, ensamblando todos los elementos
                  visuales y presentándote la página web completa. Todo esto
                  sucede muy rápidamente para que puedas ver y interactuar con
                  la página casi de inmediato.
                </p>
                <p className="highlighted">
                  Es importante destacar que HTML se enfoca únicamente en el
                  contenido y la estructura del documento, no en su apariencia o
                  comportamiento interactivo.
                </p>
                <p>
                  * El anterior codigo es interpretado por el navegador de la
                  siguiente manera :
                </p>
                <Page page="/code/index.html" />
              </article>
              <hr />
              <article id="historia-html">
                <h2>Historia de HTML</h2>
                <h3>Orígenes y Creación</h3>
                <p>
                  HTML (HyperText Markup Language) fue creado por Tim
                  Berners-Lee, un científico británico del CERN (Organización
                  Europea para la Investigación Nuclear), en 1989. Berners-Lee
                  concibió HTML como un medio para compartir documentos
                  científicos de manera sencilla a través de Internet. Junto con
                  HTML, desarrolló el primer navegador web, llamado
                  WorldWideWeb, y el primer servidor web, conocido como CERN
                  httpd.
                </p>
                <h3>Version HTML 1.0</h3>
                <p>
                  Lanzado en 1991, HTML 1.0 fue la primera versión pública de
                  HTML. Era un lenguaje muy simple, que incluía una serie básica
                  de elementos para formatear texto, crear enlaces, y
                  estructurar documentos.
                </p>
                <h3>Evolución Temprana</h3>
                <ul>
                  <li>
                    <strong>HTML 2.0 (1995)</strong>: Estándar formalizado por
                    la IETF (Internet Engineering Task Force). Incluía
                    características básicas como formularios y tablas.
                  </li>
                  <li>
                    <strong>HTML 3.2 (1997)</strong>: Desarrollado por el W3C
                    (World Wide Web Consortium), esta versión añadió soporte
                    para applets de Java, elementos de scripting, y más
                    capacidades de diseño.
                  </li>
                </ul>
                <h3>Version HTML 4.0</h3>
                <p>
                  Lanzado en 1997, HTML 4.0 representó un salto significativo al
                  introducir varias mejoras y nuevas características,
                  incluyendo:
                </p>
                <ul>
                  <li>Soporte para scripts, estilos, y multimedia.</li>
                  <li>
                    Mejoras en la accesibilidad y la internacionalización.
                  </li>
                  <li>
                    Separación más clara entre la estructura del documento
                    (HTML) y la presentación (CSS).
                  </li>
                </ul>
              </article>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
