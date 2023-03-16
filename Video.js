import React, { useState, useEffect, useRef } from "react";

function Video() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "135a5e1f51msh788acd717579339p1708dbjsn61161f8f2fa0",
      "X-RapidAPI-Host": "tiktok-api6.p.rapidapi.com",
    },
  };
  // useEffect(() => {
  //   fetch(
  //     "https://tiktok-api6.p.rapidapi.com/user/videos?username=mrbeast",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setData(response));
  //   console.log(data);
  // }, []);
  const VideoEle = useRef();
  return (
    <section className="video">
      <Video ref={VideoEle} Autoplay />
    </section>
  );
}

export default Video;
