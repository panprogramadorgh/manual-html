import { FC, ReactNode } from "react";
import "./Article.css";

interface Props {
  id: string;
  children: ReactNode;
}
const Article: FC<Props> = ({ id, children }) => {
  return (
    <article className="Article" id={id}>
      {children}
    </article>
  );
};

export default Article;
