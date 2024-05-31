import { useState, useEffect } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import CodeBox from "./components/CodeBox";
import AsideBtn from "./components/AsideBtn";
import Page from "./components/Page";
import Footer from "./components/Footer";

// Code coloring
import fetchCode from "./utils/fetch-code";
import fromStringToCode from "./utils/code-coloring/from-string-to-code";
//

import { getLocalStorage, setLocalStorage } from "./utils/local-storage";

import "./App.css";

function App() {
  const [showAside, setShowAside] = useState<boolean>(
    getLocalStorage("show-aside") || false
  );
  if (!getLocalStorage("show-aside")) {
    setLocalStorage("show-aside", showAside);
  }

  useEffect(() => {
    setLocalStorage("show-aside", showAside);
  }, [showAside]);

  const handleAsideBtnClick = () => setShowAside((prev) => !prev);

  return (
    <>
      <div className="App">
        <Aside
          hidden={showAside === false}
          asideBtnAction={handleAsideBtnClick}
        />
        <div className="App__main-container">
          <main className="App__main-container__main">
            {!showAside ? (
              <div className="App__main-container__main__aside-btn-container">
                <AsideBtn callback={handleAsideBtnClick} />
              </div>
            ) : null}
            <div className="App__main-container__main__section-container">
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
                    Esta aplicacion fue desarrollada con la libreria de
                    interfaces de usuario desarrollada por Meta{" "}
                    <a href="https://es.react.dev/" target="_BLANK">
                      React
                    </a>
                    . Para facilitar el desarrollo utilice el empaquetador de
                    aplicaciones <a href="https://vitejs.dev/">ViteJS</a>, que
                    me proporciono de un servidor de desarrollo empaquetador de
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
                    para definir la estructura y el contenido de un documento
                    web.
                  </p>
                  <CodeBox
                    skeletonLines={15}
                    getTabs={async () => {
                      return [
                        {
                          label: "index.html",
                          content: fromStringToCode(
                            await fetchCode("index.html")
                          ),
                          highlightedLines: [10, 11, 12],
                        },
                      ];
                    }}
                  />
                  <h3>Implicacion del navegador</h3>
                  <p>
                    Cuando visitas una página web, tu navegador envía una
                    solicitud al servidor que aloja esa página. El servidor
                    responde enviando el documento HTML, junto con otros
                    archivos necesarios como CSS (para estilos) y JavaScript
                    (para interactividad). El navegador lee el HTML para
                    construir una estructura llamada <span>DOM</span>, luego
                    aplica los estilos CSS y calcula dónde debe ir cada elemento
                    en la pantalla. Finalmente, pinta la página en la pantalla,
                    ensamblando todos los elementos visuales y presentándote la
                    página web completa. Todo esto sucede muy rápidamente para
                    que puedas ver y interactuar con la página casi de
                    inmediato.
                  </p>
                  <p className="highlighted">
                    Es importante destacar que HTML se enfoca únicamente en el
                    contenido y la estructura del documento, no en su apariencia
                    o comportamiento interactivo.
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
                    HTML (HyperText Markup Language) fue creado por{" "}
                    <a
                      href="https://es.wikipedia.org/wiki/Tim_Berners-Lee"
                      target="_BLANK"
                    >
                      Tim Berners-Lee
                    </a>
                    , un científico británico del{" "}
                    <a
                      href="https://es.wikipedia.org/wiki/Organizaci%C3%B3n_Europea_para_la_Investigaci%C3%B3n_Nuclear"
                      target="_BLANK"
                    >
                      CERN
                    </a>{" "}
                    (Organización Europea para la Investigación Nuclear), en
                    1989. Berners-Lee concibió HTML como un medio para compartir
                    documentos científicos de manera sencilla a través de
                    Internet. Junto con HTML, desarrolló el primer navegador
                    web, llamado WorldWideWeb, y el primer servidor web,
                    conocido como CERN httpd.
                  </p>
                  <h3>Version HTML 1.0</h3>
                  <p>
                    Lanzado en 1991, HTML 1.0 fue la primera versión pública de
                    HTML. Era un lenguaje muy simple, que incluía una serie
                    básica de elementos para formatear texto, crear enlaces, y
                    estructurar documentos.
                  </p>
                  <h3>Evolución Temprana</h3>
                  <ul>
                    <li>
                      <strong>HTML 2.0 (1995)</strong>: Estándar formalizado por
                      la{" "}
                      <a
                        href="https://es.wikipedia.org/wiki/Grupo_de_Trabajo_de_Ingenier%C3%ADa_de_Internet"
                        target="_BLANK"
                      >
                        IETF
                      </a>{" "}
                      (Internet Engineering Task Force). Incluía características
                      básicas como formularios y tablas.
                    </li>
                    <li>
                      <strong>HTML 3.2 (1997)</strong>: Desarrollado por el{" "}
                      <a
                        href="https://es.wikipedia.org/wiki/World_Wide_Web_Consortium"
                        target="_BLANK"
                      >
                        W3C
                      </a>{" "}
                      (World Wide Web Consortium), esta versión añadió soporte
                      para applets de Java, elementos de scripting, y más
                      capacidades de diseño.
                    </li>
                  </ul>
                  <h3>Version HTML 4.0</h3>
                  <p>
                    Lanzado en 1997, HTML 4.0 representó un salto significativo
                    al introducir varias mejoras y nuevas características,
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
                  <h3>Version HTML5</h3>
                  <p>
                    HTML5 comenzó a desarrollarse en 2004 y fue formalmente
                    estandarizado por el W3C en 2014. HTML5 fue un esfuerzo
                    conjunto de dos grupos: el W3C y el{" "}
                    <a
                      href="https://es.wikipedia.org/wiki/Web_Hypertext_Application_Technology_Working_Group"
                      target="_BLANK"
                    >
                      WHATWG
                    </a>{" "}
                    (Web Hypertext Application Technology Working Group). Las
                    principales mejoras y características de HTML5 incluyen:
                  </p>
                  <ul>
                    <li>
                      Nuevos elementos semánticos como{" "}
                      <span>{"<article>"}</span>, <span>{"<section>"}</span>,{" "}
                      <span>{"<header>"}</span>, y <span>{"<footer>"}</span>.
                    </li>
                    <li>
                      Soporte nativo para audio y video mediante los elementos{" "}
                      {"<audio>"} y {"<video>"}.
                    </li>
                    <li>
                      Nuevas API para gráficos, almacenamiento local, y manejo
                      de archivos.
                    </li>
                    <li>
                      Mayor soporte para aplicaciones web avanzadas y móviles.
                    </li>
                  </ul>
                  <br />
                  <p>
                    En resumen, desde sus humildes comienzos en el CERN hasta su
                    papel crucial en la web moderna, HTML ha evolucionado
                    significativamente, adaptándose a las necesidades cambiantes
                    de los usuarios y desarrolladores. Su historia es un reflejo
                    del crecimiento y la transformación de la World Wide Web.
                  </p>
                </article>
                <hr />
                <article id="estructura-html">
                  <h2>Estructura de HTML</h2>
                  <h3>Estructura de las etiquetas</h3>
                  <p>
                    Como ya hemos mencionado con anterioridad, HTML es un
                    lenguaje marcado de hypertexto que emplea etiquetas para
                    definir la estructura de los documentos.
                  </p>
                  <p>
                    Existen diferentes tipos de etiquetas y cada una de ellas
                    tiene una utilidad especifica dentro del documento; no
                    obstante, todas ellas se rigen por una misma notacion basada
                    en el cierre y apertura de la etiqueta.
                  </p>
                  <p>
                    Para definir la apertura de la etiqueta en primer lugar es
                    necesario colocar un corchete angular de apertura (
                    <span>{"<"}</span>) seguido del nombre de la etiqueta (por
                    ejemplo <span>p</span>) y otro corchete angular de cierre (
                    <span>{">"}</span>).
                  </p>
                  <p>
                    Para definir el cierre de la etiqueta, tendremos que seguir
                    el mismo procedimiento que en la apertura, aunque colocando
                    una barra lateral ascendente (<span>/</span>) despues del
                    primer corchete angular de apertura del cierre de la
                    etiqueta.
                  </p>
                  <p>
                    Para definir el contenido que tendra la etiqueta,
                    introduciremos texto u otras etiquetas entre medias de la
                    apertura y el cierre. Introduciremos por ejemplo el texto
                    "Esto es una etiqueta".
                  </p>
                  <p>
                    Siguiendo con el ejemplo de la explicacion, la etiqueta
                    deberia verse de la siguiente manera:
                  </p>
                  <CodeBox
                    skeletonLines={1}
                    getTabs={async () => {
                      return [
                        {
                          label: "definicion-etiqueta.html",
                          content: fromStringToCode(
                            await fetchCode("definicion-etiqueta.html")
                          ),
                        },
                      ];
                    }}
                  />
                  <h3>Estructura basica de los documentos</h3>
                  <p>
                    Cuando queremos desarrollar una pagina web debemos generar
                    una estructura base sobre la que empezaremos a escribir el
                    codigo HTML.
                  </p>
                  <p>
                    La estructura inicial de HTML ha ido cambiando con las
                    diferentes versiones que han sido lanzadas, aunque la
                    estructura para HTML 5 es la siguiente:
                  </p>
                  <CodeBox
                    skeletonLines={11}
                    getTabs={async () => {
                      return [
                        {
                          label: "estructura-html5.html",
                          content: fromStringToCode(
                            await fetchCode("estructura-html5.html")
                          ),
                        },
                      ];
                    }}
                  />
                  <p>
                    Si copiaramos dicha estructura en un fichero de texto plano
                    con extension ".html" y lo abrieramos con nuestro navegador
                    preferido, deberiamos ver lo siguiente.
                  </p>
                  <Page page="/code/estructura-html5.html" />
                  <br />
                  <h3>Explicacion de etiquetas basicas de la estructura</h3>
                  <p>
                    Para definir el tipo de documento y la versión de HTML. En
                    HTML5, se utiliza simplemente{" "}
                    <span>{"<!DOCTYPE html>"}</span>.
                  </p>
                  <p>
                    La etiqueta <span>{"<html>"}</span> representa la raíz de un
                    documento HTML. Todos los demás elementos deben estar
                    contenidos dentro de esta etiqueta.
                  </p>
                  <p>
                    La etiqueta <span>{"<head>"}</span> contiene metadatos sobre
                    el documento, como el título y enlaces a hojas de estilo
                    externas.
                  </p>
                </article>
                <hr />
                <article id="que-son-metadatos">
                  <h2>Metadatos de los documentos</h2>
                  <h3>¿ Que son los metadatos en HTML ?</h3>
                  <p>
                    Los metadatos en HTML son información adicional sobre una
                    página web que no se muestra directamente en la pantalla del
                    usuario, pero que es crucial para los navegadores web,
                    motores de búsqueda y otras aplicaciones. Estos datos ayudan
                    a los navegadores a entender mejor cómo mostrar la página y
                    a los motores de búsqueda a indexarla correctamente. Los
                    metadatos se colocan dentro de la etiqueta{" "}
                    <span>{"<head>"}</span> de un documento HTML.
                  </p>
                  <h3>Ejemplo de Metadatos en HTML</h3>
                  <p>
                    Aquí hay un ejemplo básico de cómo se ven los metadatos en
                    HTML:
                  </p>
                  <CodeBox
                    skeletonLines={18}
                    getTabs={async () => {
                      return [
                        {
                          label: "metadatos.html",
                          content: fromStringToCode(
                            await fetchCode("metadatos.html")
                          ),
                        },
                      ];
                    }}
                  />
                </article>
                <hr />
                <article id="etiquetas-metadatos">
                  <h2>Principales etiquetas de metadatos</h2>
                  <br />
                  <p>
                    <span>{'<meta charset="UTF-8">'}</span>
                  </p>
                  <ul>
                    <li>
                      <strong>Propósito</strong>: Especifica la codificación de
                      caracteres que debe usar el navegador. UTF-8 es una
                      codificación estándar que soporta la mayoría de los
                      caracteres y símbolos utilizados en la web.
                    </li>
                    <li>
                      <strong>Importancia</strong>: Asegura que los caracteres
                      especiales se muestren correctamente en la página.
                    </li>
                  </ul>
                  <p>
                    <span>
                      {
                        '<meta name="description" content="Una breve descripción de mi página web.">'
                      }
                    </span>
                  </p>
                  <ul>
                    <li>
                      <strong>Propósito</strong>: Proporciona una breve
                      descripción de la página. Los motores de búsqueda como
                      Google utilizan este contenido para mostrar descripciones
                      en los resultados de búsqueda.
                    </li>
                    <li>
                      <strong>Importancia</strong>: Ayuda a mejorar el SEO
                      (optimización para motores de búsqueda) y a atraer
                      visitantes a tu sitio.
                    </li>
                  </ul>
                  <p>
                    <span>
                      {
                        '<meta name="keywords" content="HTML, metadatos, tutorial">'
                      }
                    </span>
                  </p>
                  <ul>
                    <li>
                      <strong>Propósito</strong>: Lista de palabras clave
                      relevantes para el contenido de la página.
                    </li>
                    <li>
                      <strong>Importancia</strong>: Aunque menos importante en
                      la actualidad para SEO, todavía puede ayudar a los motores
                      de búsqueda a entender el tema de tu página.
                    </li>
                  </ul>
                  <p>
                    <span>{'<meta name="author" content="Tu Nombre">'}</span>
                  </p>
                  <ul>
                    <li>
                      <strong>Propósito</strong>: Especifica el autor del
                      documento.
                    </li>
                    <li>
                      <strong>Importancia</strong>: Proporciona crédito al
                      creador de la página y puede ser útil para fines de
                      atribución y copyright.
                    </li>
                  </ul>
                  <p>
                    <span>
                      {
                        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
                      }
                    </span>
                  </p>
                  <ul>
                    <li>
                      <strong>Propósito</strong>: Configura la ventana gráfica
                      para que el diseño de la página sea responsivo (se ajuste
                      a diferentes tamaños de pantalla).
                    </li>
                    <li>
                      <strong>Importancia</strong>: Es crucial para que las
                      páginas web se vean bien en dispositivos móviles y
                      tabletas.
                    </li>
                  </ul>
                  <br />
                  <h3>Otros Metadatos Útiles</h3>
                  <br />
                  <p>
                    <span>{'<link rel="icon" href="favicon.ico">'}</span>
                  </p>
                  <ul>
                    <li>
                      <strong>Propósito</strong>: Vincula un ícono que se
                      muestra en la pestaña del navegador.
                    </li>
                    <li>
                      <strong>Importancia</strong>: Mejora la apariencia
                      profesional de la página y ayuda a los usuarios a
                      identificar rápidamente tu sitio.
                    </li>
                  </ul>
                  <p>
                    <span>{'<meta http-equiv="refresh" content="30">'}</span>
                  </p>
                  <ul>
                    <li>
                      <strong>Propósito</strong>: Actualiza la página
                      automáticamente cada cierto tiempo (en este caso, cada 30
                      segundos).
                    </li>
                    <li>
                      <strong>Importancia</strong>: Puede ser útil para páginas
                      que muestran contenido dinámico que debe estar siempre
                      actualizado.
                    </li>
                  </ul>
                </article>
                <hr />
                <article id="etiquetas-bloque">
                  <h2>Etiquetas de bloque en HTML</h2>
                  <p>
                    Las etiquetas de bloque en HTML son elementos que crean una
                    separación visual y lógica en el contenido de una página
                    web, ocupando el ancho completo del contenedor en el que se
                    encuentran. Estas etiquetas organizan y estructuran el
                    contenido en secciones claramente definidas, mejorando tanto
                    la legibilidad para los usuarios como la semántica del
                    documento para los motores de búsqueda y las tecnologías
                    asistivas.
                  </p>
                  <p>
                    A continuacion podemos observar una lista de las principales
                    etiquetas de bloque en HTML junto con una explicación
                    detallada de cómo funciona cada una:
                  </p>
                  <br />
                  <p>
                    <span>{"<div>"}</span> (Division)
                  </p>
                  <ul>
                    <li>
                      <strong>Descripción</strong>: Es un contenedor genérico
                      utilizado para agrupar otros elementos HTML. No tiene
                      ningún significado específico por sí mismo, pero se usa
                      para aplicar estilos o scripts a bloques de contenido.
                    </li>
                    <li>
                      <strong>Uso típico</strong>: Agrupar secciones de
                      contenido para facilitar el diseño y la organización.
                    </li>
                  </ul>
                  <CodeBox
                    skeletonLines={3}
                    getTabs={async () => {
                      return [
                        {
                          label: "etiqueta-div.html",
                          content: fromStringToCode(
                            await fetchCode("etiqueta-div.html")
                          ),
                        },
                      ];
                    }}
                  />
                </article>
              </section>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
