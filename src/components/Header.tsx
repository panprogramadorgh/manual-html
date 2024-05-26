import { FC } from "react";
import "./Header.css";

interface Props {}
const Header: FC<Props> = ({}) => {
  return (
    <header className="Header">
      <h1>
        Desarrollo de <strong>Aplicaciones Web</strong>
      </h1>
    </header>
  );
};

export default Header;
