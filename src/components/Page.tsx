import { FC } from "react";
import "./Page.css";

interface Props {
  page: string;
}
const Page: FC<Props> = ({ page }) => {
  return (
    <div className="Page">
      <div className="Page__header">
        <div className="Page__header__btn-container">
          <div className="Page__header__btn-container__btn red"></div>
          <div className="Page__header__btn-container__btn yellow"></div>
          <div className="Page__header__btn-container__btn green"></div>
        </div>
        <span className="Page__header__filename">
          {page.split("/").reverse()[0]}
        </span>
        <div className="Page__header__a-container">
          <a href={page} target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="200px"
              width="200px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
            </svg>
          </a>
        </div>
      </div>
      <iframe src={page}></iframe>
    </div>
  );
};

export default Page;
