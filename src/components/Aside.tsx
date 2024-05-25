import { FC, MouseEventHandler } from "react";
import AsideBtn from "./AsideBtn";
import GitHub from "./GitHub";
import "./Aside.css";

const asideContent = [
  {
    label: "Inicio",
    url: "#",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
  {
    label: "Inicio",
    url: "#inicio",
  },
  {
    label: "Atributos",
    url: "#atributos",
  },
];

interface Props {
  hidden?: boolean;
  asideBtnAction: MouseEventHandler;
}
const Aside: FC<Props> = ({ hidden, asideBtnAction }) => {
  const checkUrl = (url: string) => {
    const asideContentOption = "#" + window.location.href.split("#")[1];
    return asideContentOption === url;
  };

  return (
    <aside className={`Aside ${hidden ? "hidden" : ""}`.trim()}>
      <div className="Aside__btn-container">
        <AsideBtn callback={asideBtnAction} />
      </div>
      <div>
        <ul className="Aside__content-container">
          {asideContent.map((asideItem, index) => {
            const animationDuration = 0.1 + index / 8;
            return (
              <li
                key={index}
                className={`Aside__li ${
                  checkUrl(asideItem.url) ? "active" : ""
                }`.trim()}
                style={{
                  animation: `asideitem-fadein ${
                    animationDuration > 2 ? 2 : animationDuration
                  }s ease-in-out`,
                }}
              >
                <a href={`${asideItem.url}`}>{asideItem.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <GitHub />
    </aside>
  );
};

export default Aside;
