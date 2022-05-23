import React from "react";
const Loading = () => {
  return (
    <div
      className="position-fixed w-full h-[83vh] text-center loading"
      style={{
        background: "transparent",
        color: "white",
        top: 0,
        left: 0,
        opacity: 50,
        zIndex: 9,
      }}
    >
      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon
          strokeWidth="1"
          stroke="#fff"
          fill="none"
          points="20,1 40,40 1,40"
        ></polygon>
        <text fill="#fff" x="5" y="47">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
