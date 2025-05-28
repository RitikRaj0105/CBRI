import React from "react";

const UploadVideo = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="http://localhost:8501?mode=video"
        title="Upload Video"
        width="100%"
        height="100%"
        frameBorder="0"
      />
    </div>
  );
};

export default UploadVideo;
