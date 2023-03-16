import Navbar from "./components/Navbar";
import Video from "./components/Video";
import SideBar from "./components/SideBar";
import Decription from "./components/Decription";
import Menu from "./components/Menu";
function App() {
  return (
    <div className="App">
      <div className="myApp">
        <Navbar />
        <div className="content">
          <Video />
          <SideBar />
          <Decription />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default App;
