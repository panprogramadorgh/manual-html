/* Imports */

// react
import { FC, useState, useEffect } from "react";

// components
import CodeBoxSkeleton from "./CodeBoxSkeleton";

// libs

// utils

// types & interfaces
import { Tab } from "../utils/definitions";

// css
import "./CodeBox.css";

interface Props {
  getTabs: () => Promise<Tab[]>;
  skeletonLines: number;
  linesFadeout?: boolean;
}

const CodeBox: FC<Props> = ({ skeletonLines, getTabs, linesFadeout }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [tabs, setTabs] = useState<Tab[] | null>(null);

  useEffect(() => {
    getTabs().then((tabs) => {
      setTimeout(() => {
        setTabs(tabs);
      }, Math.floor(Math.random() * 600 + 200));
    });
  }, []);

  if (!tabs) return <CodeBoxSkeleton skeletonLines={skeletonLines} />;
  return (
    <div className="CodeBox">
      <div className="CodeBox__header">
        <div className="CodeBox__header__btn-container">
          <div className="CodeBox__header__btn-container__btn red"></div>
          <div className="CodeBox__header__btn-container__btn yellow"></div>
          <div className="CodeBox__header__btn-container__btn green"></div>
        </div>
        <div className="CodeBox__header__tab-container">
          <span className="CodeBox__header__tab-container__tab-indicator">
            {tabs[currentTab].label}
          </span>
          {tabs.map((tab, index) => (
            <button
              onClick={() => {
                if (tabs.length > 1) setCurrentTab(index);
              }}
              className={`CodeBox__header__tab-container__tab ${
                currentTab === index ? "active" : ""
              }`}
              key={tab.label}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <ol className="CodeBox__line-container">
        {tabs[currentTab].content.map((line, index) => (
          <li
            spellCheck={false}
            className={`CodeBox__line-container__line ${
              tabs[currentTab].highlightedLines?.includes(index + 1)
                ? "highlighted"
                : ""
            } ${
              linesFadeout && index >= tabs[currentTab].content.length - 1 - 5
                ? `fadeout${tabs[currentTab].content.length - (5 + 1) - index}`
                : ""
            }`.trim()}
            key={index}
          >
            {line}
          </li>
        ))}
      </ol>
      <div className="CodeBox__footer">
        {tabs.length === 1
          ? null
          : tabs.map((tab, index) => {
              return (
                <div
                  key={tab.label}
                  onClick={() => {
                    setCurrentTab(index);
                  }}
                  className={`CodeBox__footer__btn ${
                    currentTab === index ? "active" : ""
                  }`.trim()}
                ></div>
              );
            })}
      </div>
    </div>
  );
};

export default CodeBox;
