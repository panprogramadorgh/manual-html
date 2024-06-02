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

export function mainloop(
  canvas: HTMLCanvasElement,
  squareSize: number,
  squareSpeed: number
): number {
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.imageSmoothingEnabled = false;
    let squarePos = [0, 0];
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
      squarePos[0] += squareSpeed * direction.x;
      squarePos[1] += squareSpeed * direction.y;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      square(ctx, squarePos[0], squarePos[1], squareSize, "#0099ff");
    }, 16.6);
    return interval;
  }
  return 0;
}

export function stoploop(identifier: number): void {
  clearInterval(identifier);
}
