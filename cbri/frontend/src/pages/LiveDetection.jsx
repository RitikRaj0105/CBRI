import React from "react";

const LiveDetection = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="http://localhost:8501?mode=live"
        title="Live Detection"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
};

export default LiveDetection;
