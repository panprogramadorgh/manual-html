import { FC, MouseEventHandler, useState, useEffect } from "react";
import AsideBtn from "./AsideBtn";
import GitHub from "./GitHub";
import asideOptions from "../utils/aside-options";
import "./Aside.css";

interface Props {
  hidden?: boolean;
  asideBtnAction: MouseEventHandler;
}
const Aside: FC<Props> = ({ hidden, asideBtnAction }) => {
  const getQuery = (param: string) => {
    const query = new URLSearchParams(window.location.search);
    const option = query.get(param);
    return option;
  };

  const [currentOpcion, setContent] = useState<string>(
    getQuery("option") || "inicio"
  );

  const updateQuery = (newContent: string) => {
    const query = new URLSearchParams(window.location.search);
    query.set("option", newContent);
    let newHref = window.location.href;
    newHref = newHref.includes("?")
      ? `${newHref.split("?")[0]}?${query.toString()}`
      : `${newHref}?${query.toString()}`;

    // window.history no recarga la pagina, lo que nos permite hacer una navegacion SPA.
    window.history.pushState(null, "", newHref);
  };

  const checkQuery = (btnOption: string) => {
    return currentOpcion === btnOption;
  };

  useEffect(() => {
    updateQuery(currentOpcion);
    const elToScroll = document.getElementById(currentOpcion);
    const appMain = document.querySelector(".App__main");
    appMain?.scrollTo({ top: elToScroll?.offsetTop, behavior: "smooth" });
  }, [currentOpcion]);

  const handleClick = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <aside className={`Aside ${hidden ? "hidden" : ""}`.trim()}>
      <div className="Aside__btn-container">
        <AsideBtn callback={asideBtnAction} />
      </div>
      <div>
        <ul className="Aside__content-container">
          {Object.entries(asideOptions).map(
            ([eachOption, eachOptionValue], index) => {
              const animationDuration = 0.1 + index / 8;
              return (
                <li
                  key={index}
                  className={`Aside__li ${
                    eachOptionValue.header ? "header" : ""
                  }`.trim()}
                  style={{
                    animation: `asideitem-fadein ${
                      animationDuration > 2 ? 2 : animationDuration
                    }s ease-in-out`,
                  }}
                >
                  {eachOptionValue.header ? (
                    <h3>{eachOptionValue.label}</h3>
                  ) : (
                    <button
                      className={`${checkQuery(eachOption) ? "active" : ""}`}
                      onClick={() => handleClick(eachOption)}
                    >
                      <span>{eachOptionValue.label}</span>
                      <div className="Aside__gradient-container">
                        <div className="Aside__gradient-container-gradient"></div>
                        <div className="Aside__gradient-container-solid"></div>
                      </div>
                    </button>
                  )}
                </li>
              );
            }
          )}
        </ul>
      </div>
      <GitHub />
    </aside>
  );
};

export default Aside;
