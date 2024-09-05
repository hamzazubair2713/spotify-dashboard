import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddSong from "./pages/AddSong";
import AddAlbum from "./pages/AddAlbum";
import ListAlbum from "./pages/ListAlbum";
import ListSong from "./pages/ListSong";
import SibeBar from "./components/SibeBar";

const App = () => {
  return (
    <div className="flex items-center min-h-screen">
      <SibeBar />
      <div className="flex-1 h-screen overflow-y-scroll bg-[#f3fff7]">
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-album" element={<AddAlbum />} />
            <Route path="/list-album" element={<ListAlbum />} />
            <Route path="/list-song" element={<ListSong />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
