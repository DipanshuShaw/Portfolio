import React from "react";
import './wave.css'


const WaveAnimation: React.FC = () => {
  return (
    <div className="wave-container max-md:hidden">
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(217, 255, 0, 0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 102, 255, 0.612)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255, 0, 0, 0.212)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#00ff5e55" />
      </g>
    </svg>
  </div>
  );
};

export default WaveAnimation;
