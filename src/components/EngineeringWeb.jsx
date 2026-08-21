function EngineeringWeb() {
  return (
    <div className="engineering-web" aria-hidden="true">
      <svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="webGlow" cx="50%" cy="50%" r="65%">
            <stop offset="0" stopColor="#7ee7ff" stopOpacity=".32" />
            <stop offset=".45" stopColor="#8c7bff" stopOpacity=".12" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="webLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#35e6ff" stopOpacity=".08" />
            <stop offset=".5" stopColor="#b66cff" stopOpacity=".5" />
            <stop offset="1" stopColor="#ff6b2c" stopOpacity=".08" />
          </linearGradient>
        </defs>
        <circle cx="450" cy="350" r="330" fill="url(#webGlow)" />
        <g className="web-rotate">
          <g fill="none" stroke="url(#webLine)" strokeWidth="1">
            <circle cx="450" cy="350" r="90" />
            <circle cx="450" cy="350" r="165" />
            <circle cx="450" cy="350" r="245" />
            <circle cx="450" cy="350" r="325" />
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * Math.PI) / 6;
              const x = 450 + Math.cos(angle) * 325;
              const y = 350 + Math.sin(angle) * 325;
              return <line key={i} x1="450" y1="350" x2={x} y2={y} />;
            })}
          </g>
          <g fill="#9deeff">
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * Math.PI) / 6;
              const x = 450 + Math.cos(angle) * 325;
              const y = 350 + Math.sin(angle) * 325;
              return <circle key={i} cx={x} cy={y} r="3" />;
            })}
          </g>
        </g>
        <circle className="web-core" cx="450" cy="350" r="8" />
      </svg>
    </div>
  );
}

export default EngineeringWeb;
