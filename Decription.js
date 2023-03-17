import React from "react";

function Decription({ data, currentVideo, setCurrentVideo }) {
  return (
    <section className="decription">
      <div className="decription-username">{currentVideo.title}</div>
      <div className="decription-title">Chieu nay em co ranh khong ?</div>
      <div className="decription-script">TopTop Phake xai API chua`</div>
    </section>
  );
}

export default Decription;
