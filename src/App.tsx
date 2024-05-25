import { useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import CodeBox from "./components/CodeBox";
import AsideBtn from "./components/AsideBtn";

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
            <Header />
            <section>
              <article id="inicio">
                <h2>Inicio</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci vel officiis aut quibusdam quia harum sapiente nihil
                  provident dolorum inventore.
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
                      },
                      {
                        label: "test.html",
                        content: fromStringToCode(await fetchCode("test.html")),
                      },
                    ];
                  }}
                />
              </article>
              <article id="atributos">
                <h2>Atributos en HTML</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci vel officiis aut quibusdam quia harum sapiente nihil
                  provident dolorum inventore.
                </p>
              </article>
              <article id="etiquetas-basicas">
                <h2>Etiquetas basicas en HTML</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  ea quos ducimus libero saepe atque nihil sapiente dolorum
                  voluptatem eius voluptatum alias recusandae cum omnis vero,
                  minima voluptates numquam reprehenderit et, tempore amet.
                  Nulla quidem temporibus unde adipisci ipsa vero repudiandae
                  non enim optio rem officiis, iste assumenda consectetur
                  beatae!
                </p>
              </article>
              <article id="etiquetas-basicas">
                <h2>Etiquetas basicas en HTML</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  ea quos ducimus libero saepe atque nihil sapiente dolorum
                  voluptatem eius voluptatum alias recusandae cum omnis vero,
                  minima voluptates numquam reprehenderit et, tempore amet.
                  Nulla quidem temporibus unde adipisci ipsa vero repudiandae
                  non enim optio rem officiis, iste assumenda consectetur
                  beatae!
                </p>
              </article>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
