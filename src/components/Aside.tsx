import { FC, MouseEventHandler } from "react";
import AsideBtn from "./AsideBtn";
import GitHub from "./GitHub";
import "./Aside.css";

const asideContent = [
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
  return (
    <aside className={`Aside ${hidden ? "hidden" : ""}`.trim()}>
      <div className="Aside__btn-container">
        <AsideBtn callback={asideBtnAction} />
      </div>
      <div>
        <ul className="Aside__content-container">
          {asideContent.map((asideItem, index) => {
            const animationDuration = 0.2 + index / 5;
            return (
              <li
                className="Aside__li"
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
