import React, { useEffect, useRef, useState } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Video({ data, currentVideo, setCurrentVideo, VideoEle, setData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  function PlayPause() {
    setIsPlaying(!isPlaying);
  }
  useEffect(() => {
    if (isPlaying) {
      VideoEle.current.play();
    } else {
      VideoEle.current.pause();
    }
  }, [isPlaying]);

  return (
    <section className="video">
      <video
        ref={VideoEle}
        src={currentVideo.video}
        autoPlay={true}
        className="videos"
        loop={true}
        width="400"
        playsInline
      />
      <button onClick={PlayPause} className="btn-playPause">
        <FontAwesomeIcon icon={isPlaying ? "" : faPlay} className="play-btn" />
      </button>
    </section>
  );
}

export default Video;
