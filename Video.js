import React, { useRef } from "react";

function Video({ data }) {
  const VideoEle = useRef();

  return (
    <section className="video">
      <video
        ref={VideoEle}
        src={data.video}
        autoPlay={true}
        className="videos"
        loop={true}
        width="400"
        playsInline
      />
    </section>
  );
}

export default Video;
