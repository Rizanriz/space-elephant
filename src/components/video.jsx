import React from 'react';

export const Video = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
        playsInline
        src="../assets/01211.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default Video;