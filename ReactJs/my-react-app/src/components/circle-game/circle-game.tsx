import React, { useState } from "react";
import "./circle-game.css";

const COLORS = ["red", "blue", "green", "orange", "purple"];

interface Circle {
  x: number;
  y: number;
  color: string;
}

const CircleGame = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [redoStack, setRedoStack] = useState<Circle[]>([]);

  const handleDivClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Prevent adding a circle if the click is on a circle
    if ((e.target as HTMLElement).classList.contains('circle')) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    setCircles([...circles, { x, y, color }]);
    setRedoStack([]);
  };

  const handleUndo = () => {
    if (circles.length === 0) return;
    const newCircles = circles.slice(0, -1);
    setRedoStack([...redoStack, circles[circles.length - 1]]);
    setCircles(newCircles);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const lastRedo = redoStack[redoStack.length - 1];
    setCircles([...circles, lastRedo]);
    setRedoStack(redoStack.slice(0, -1));
  };

  const handleReset = () => {
    setCircles([]);
    setRedoStack([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: 16 }}>
        <button onClick={handleUndo} disabled={circles.length === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={redoStack.length === 0}>
          Redo
        </button>
        <button onClick={handleReset} disabled={circles.length === 0}>
          Reset
        </button>
      </div>
      <div
        className="circle-game-area"
        style={{ position: 'relative', width: 500, height: 300, border: '2px solid #000', margin: '40px auto', background: '#fafafa' }}
        onClick={handleDivClick}
      >
        {circles.map((circle, idx) => (
          <div
            key={idx}
            className="circle"
            style={{
              left: circle.x - 10,
              top: circle.y - 10,
              backgroundColor: circle.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleGame;
