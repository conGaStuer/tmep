import Navbar from "./components/Navbar";
import Video from "./components/Video";
import SideBar from "./components/SideBar";
import Decription from "./components/Decription";
import Menu from "./components/Menu";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "135a5e1f51msh788acd717579339p1708dbjsn61161f8f2fa0",
      "X-RapidAPI-Host":
        "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
    },
  };
  // eslint-disable-next-line
  useEffect(() => {
    fetch(
      "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/index?url=https%3A%2F%2Fwww.tiktok.com%2F%40nor10122%2Fvideo%2F7037155617491913986",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <div className="myApp">
        <Navbar />
        <div className="content">
          <Video data={data} setData={setData} />
          <SideBar />
          <Decription />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default App;
