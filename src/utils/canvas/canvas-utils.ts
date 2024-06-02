export function square(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string
) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

interface MainloopParams {
  canvas: HTMLCanvasElement;
  initSquarePos: [number, number];
  squareSize: number;
  squareSpeed: number;
  frames: number;
  updateSquarePos: (newPos: [number, number]) => void;
}

export function mainloop({
  canvas,
  initSquarePos,
  squareSize,
  squareSpeed,
  frames,
  updateSquarePos,
}: MainloopParams): number {
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.imageSmoothingEnabled = false;
    let squarePos = initSquarePos;
    let direction = {
      x: 1,
      y: 1,
    };
    const interval = setInterval(() => {
      if (squarePos[0] < 0 || squarePos[0] > canvas.width - squareSize) {
        direction.x *= -1;
      }
      if (squarePos[1] < 0 || squarePos[1] > canvas.height - squareSize) {
        direction.y *= -1;
      }
      squarePos[0] += (squareSpeed / frames) * direction.x;
      squarePos[1] += (squareSpeed / frames) * direction.y;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      square(ctx, squarePos[0], squarePos[1], squareSize, "#0099ff");

      updateSquarePos(squarePos);
    }, 1000 / frames);
    return interval;
  }
  return 0;
}

export function stoploop(identifier: number): void {
  clearInterval(identifier);
}
