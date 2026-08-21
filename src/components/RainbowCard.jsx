import { useRef } from "react";

function RainbowCard({ className = "", children }) {
  const ref = useRef(null);

  function handlePointerMove(event) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onPointerMove={handlePointerMove} className={`rainbow-card ${className}`}>
      <div className="rainbow-card-content">{children}</div>
    </div>
  );
}

export default RainbowCard;
