/* Imports */

// react
import { FC } from "react";

// components

// libs

// utils

// types & interfaces

// css

interface Props {
  skeletonLines: number;
}

const CodeBoxSkeleton: FC<Props> = ({ skeletonLines }) => {
  return (
    <div className="CodeBox skeleton">
      <div className="CodeBox__header">
        <div className="CodeBox__header__btn-container">
          <div className="CodeBox__header__btn-container__btn red"></div>
          <div className="CodeBox__header__btn-container__btn yellow"></div>
          <div className="CodeBox__header__btn-container__btn green"></div>
        </div>
        <div className="CodeBox__header__tab-container">
          <div className="CodeBox__header__tab-container__tab-indicator"></div>
          {new Array(1).fill(null).map((_, index) => (
            <button
              className={`CodeBox__header__tab-container__tab ${
                index === 0 ? "active" : ""
              }`.trim()}
              key={index}
            ></button>
          ))}
        </div>
      </div>
      <ol className="CodeBox__line-container">
        {new Array(skeletonLines).fill(null).map((_, index) => (
          <li className="CodeBox__line-container__line" key={index}>
            <div
              className="CodeBox__line-container__line__bar"
              style={{ width: `${Math.random() * 60 + 20}%` }}
            ></div>
          </li>
        ))}
      </ol>
      <div className="CodeBox__footer">
        {/* <div className="CodeBox__footer__btn"></div> */}
      </div>
    </div>
  );
};

export default CodeBoxSkeleton;
