import { DrawContext } from "../contexts/drawContext";
import { useContext, useRef, useEffect } from "react";

function Canvas() {
  const canvasRef = useRef(null);
  const { width, height, width1, height1 } = useContext(DrawContext);

  useEffect(() => {
    //class Window
    class Window {
      constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    //object for wind 1
    const window1 = new Window(0, 10, width, height);

    //object for window 2
    const window2 = new Window(width, 10, width1, height1);

    //window color
    context.fillStyle = "#1aa4b8";

    //draw the window 1
    context.fillRect(window1.x, window1.y, window1.width, window1.height);

    //draw the window 2
    context.fillRect(window2.x, window2.y, window2.width, window2.height);
    return () => {
      context.clearRect(window1.x, window1.y, window1.width, window1.height);
      context.clearRect(window2.x, window2.y, window2.width, window2.height);
    };
  }, [width, height, width1, height1]);
  return <canvas ref={canvasRef} className="w-1/2 h-screen bg-black"></canvas>;
}

export default Canvas;
