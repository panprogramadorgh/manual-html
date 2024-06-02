export interface Tab {
  label: string;
  content: React.ReactNode[];
  highlightedLines?: number[];
}

export interface AsideOption {
  header?: boolean;
  label: string;
}

export interface CanvasGameSquareDirection {
  x: 0 | 1;
  y: 0 | 1;
}

export interface CanvasUtilsMainloopParams {
  canvas: HTMLCanvasElement;
  initSquarePos: [number, number];
  initSquareDirection: CanvasGameSquareDirection;
  squareSize: number;
  squareSpeed: number;
  frames: number;
  updateSquarePos: (newPos: [number, number]) => void;
  updateSquareDirection: (newDirection: CanvasGameSquareDirection) => void;
}
