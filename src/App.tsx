import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Article from "./components/Article";
import AsideBtn from "./components/AsideBtn";
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
        <main className={`App__main ${!showAside ? "wide" : ""}`.trim()}>
          <div className="App__aside-btn-container">
            {!showAside ? <AsideBtn callback={handleAsideBtnClick} /> : null}
          </div>
          <Header />
          <section>
            <Article id="inicio">
              <h2>Inicio</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel officiis aut quibusdam quia harum sapiente nihil
                provident dolorum inventore.
              </p>
            </Article>
            <Article id="atributos">
              <h2>Atributos en HTML</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci vel officiis aut quibusdam quia harum sapiente nihil
                provident dolorum inventore.
              </p>
            </Article>
            <Article id="etiquetas-basicas">
              <h2>Etiquetas basicas en HTML</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea
                quos ducimus libero saepe atque nihil sapiente dolorum
                voluptatem eius voluptatum alias recusandae cum omnis vero,
                minima voluptates numquam reprehenderit et, tempore amet. Nulla
                quidem temporibus unde adipisci ipsa vero repudiandae non enim
                optio rem officiis, iste assumenda consectetur beatae!
              </p>
            </Article>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
