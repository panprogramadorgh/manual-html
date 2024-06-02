import { FC, useEffect, useRef, useState } from "react";
import { mainloop, stoploop } from "../utils/canvas/canvas-utils";
import "./CanvasGame.css";
import { CanvasGameSquareDirection } from "../utils/definitions";

interface Props {}

const CanvasGame: FC<Props> = () => {
  const [squarePos, setSquarePos] = useState<[number, number]>([0, 0]);
  const [squareDirection, setSquareDirection] =
    useState<CanvasGameSquareDirection>({ x: 1, y: 1 });
  const [squareSize, setSquareSize] = useState<number>(100);
  const [squareSpeed, setSquareSpeed] = useState<number>(100);
  const [frames, setFrames] = useState<number>(60);

  const ref = useRef(null);
  useEffect(() => {
    let identifier: number | null = null;
    if (ref.current) {
      const canvas = ref.current as HTMLCanvasElement;
      canvas.width = 350;
      canvas.height = 250;
      identifier = mainloop({
        canvas,
        initSquarePos: squarePos,
        initSquareDirection: squareDirection,
        squareSize,
        squareSpeed,
        frames,
        updateSquarePos(newPos) {
          setSquarePos(newPos);
        },
        updateSquareDirection(newDirection) {
          setSquareDirection(newDirection);
        },
      });
    }
    return () => {
      if (identifier) stoploop(identifier);
    };
  }, [ref, squareSize, squareSpeed, frames]);

  return (
    <div className="CanvasGame">
      <div className="CanvasGame__container">
        <div>
          <span>Size</span>
          <input
            type="range"
            min={5}
            max={200}
            onChange={(event) => {
              setSquareSize(Number(event.target.value));
            }}
            value={squareSize}
          />
        </div>
        <div>
          <span>Speed</span>
          <input
            type="range"
            min={10}
            max={200}
            onChange={(event) => {
              setSquareSpeed(Number(event.target.value));
            }}
            value={squareSpeed}
          />
        </div>
        <div>
          <span>Frames/seccond</span>
          <input
            type="range"
            min={5}
            max={240}
            onChange={(event) => {
              setFrames(Number(event.target.value));
            }}
            value={frames}
          />
        </div>
      </div>
      <canvas ref={ref}></canvas>
    </div>
  );
};

export default CanvasGame;
