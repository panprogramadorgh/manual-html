import { FC } from "react";
import "./CodeBoxPage.css";

interface Props {
  codeBox: React.ReactNode;
  page: React.ReactNode;
}

const CodeBoxPage: FC<Props> = ({ codeBox, page }) => {
  return (
    <div className="CodeBoxPage">
      {codeBox}
      {page}
    </div>
  );
};

export default CodeBoxPage;
