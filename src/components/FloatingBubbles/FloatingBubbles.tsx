import React from "react";
import "./FloatingBubbles.css"; // same CSS file as above

export default function FloatingBubbles({ count = 30 }) {
  const bubbles = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 40 + 10;
    const left = Math.random() * 100;
    const duration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;

    return (
      <div
        key={i}
        className="bubble"
        style={{
          width: size + "px",
          height: size + "px",
          left: left + "vw",
          animationDuration: duration + "s",
          animationDelay: delay + "s",
        }}
      />
    );
  });

  return <div className="bubbles-container">{bubbles}</div>;
}
