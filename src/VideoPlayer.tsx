import React from 'react';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div>
      <video src={url} controls></video>
    </div>
  );
}

export default VideoPlayer;