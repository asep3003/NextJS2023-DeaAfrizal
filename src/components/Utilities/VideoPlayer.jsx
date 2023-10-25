"use client"

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const buttonPlayerStyle = "rounded bg-color-accent text-color-dark hover:bg-color-secondary hover:text-color-primary transition-all";

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button className={`px-3 mb-1 float-right ${buttonPlayerStyle}`} onClick={handleVideoPlayer}>X</button>
        <YouTube 
          videoId={youtubeId} 
          onReady={(event) => event.target.pauseVideo()} 
          opts={options}
          onError={() => alert("Video is broken.")}
        />
      </div>
    )
  };

  const ButtonOpenPlayer = () => {
    return (
      <button className={`fixed bottom-5 right-5 w-32 ${buttonPlayerStyle}`} onClick={handleVideoPlayer}>
        Tonton Trailer
      </button>
    )
  }

  const options = {
    width: "300",
    height: "250",
  };

  return isOpen 
    ? <Player /> 
    : <ButtonOpenPlayer />
}

export default VideoPlayer;