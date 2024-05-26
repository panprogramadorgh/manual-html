import { FC } from "react";
import "./Page.css";

interface Props {
  page: string;
}
const Page: FC<Props> = ({ page }) => {
  return (
    <a href={page} target="_blank">
      <div className="Page">
        <iframe src={page}></iframe>
      </div>
    </a>
  );
};

export default Page;
