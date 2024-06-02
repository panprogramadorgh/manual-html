import { FC, useEffect, useRef, useState } from "react";
import { mainloop, stoploop } from "../utils/canvas/canvas-utils";
import "./CanvasGame.css";

interface Props {}

const CanvasGame: FC<Props> = () => {
  const [squareSize, setSquareSize] = useState<number>(15);
  const [squareSpeed, setSquareSpeed] = useState<number>(1.5);

  const ref = useRef(null);
  useEffect(() => {
    let identifier: number | null = null;
    if (ref.current) {
      const canvas = ref.current as HTMLCanvasElement;
      const mainWidth = document.querySelector(
        ".App__main-container"
      )?.clientWidth;
      if (mainWidth) {
        canvas.width = mainWidth * 0.8;
      }
      identifier = mainloop(canvas, squareSize, squareSpeed);
    }
    return () => {
      if (identifier) stoploop(identifier);
    };
  }, [ref, squareSize, squareSpeed]);

  return (
    <div className="CanvasGame">
      <div className="CanvasGame__container">
        <span>Size</span>
        <input
          type="range"
          min={5}
          max={100}
          onChange={(event) => {
            setSquareSize(Number(event.target.value));
          }}
          value={squareSize}
        />
        <span>Speed</span>
        <input
          type="range"
          min={1}
          max={5}
          onChange={(event) => {
            setSquareSpeed(Number(event.target.value));
          }}
          value={squareSpeed}
        />
      </div>
      <canvas ref={ref}></canvas>
    </div>
  );
};

export default CanvasGame;
