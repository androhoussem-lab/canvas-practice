import { DrawContext } from "../contexts/drawContext";
import { useContext, useRef, useEffect } from "react";

function Canvas() {
  const canvasRef = useRef(null);
  const { width, height, width1, height1 } = useContext(DrawContext);

  useEffect(() => {
    class Rectangle {
      constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const rectangle1 = new Rectangle(0, 10, width, height);
    const rectangle2 = new Rectangle(width, 10, width1, height1);
    context.fillStyle = "#1aa4b8";
    context.fillRect(
      rectangle1.x,
      rectangle1.y,
      rectangle1.width,
      rectangle1.height
    );
    context.fillRect(
      rectangle2.x,
      rectangle2.y,
      rectangle2.width,
      rectangle2.height
    );
    return () => {
      context.clearRect(
        rectangle1.x,
        rectangle1.y,
        rectangle1.width,
        rectangle1.height
      );
      context.clearRect(
        rectangle2.x,
        rectangle2.y,
        rectangle2.width,
        rectangle2.height
      );
    };
  }, [width, height, width1, height1]);
  return <canvas ref={canvasRef} className="w-1/2 h-screen bg-black"></canvas>;
}

export default Canvas;
