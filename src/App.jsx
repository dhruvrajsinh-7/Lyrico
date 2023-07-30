import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Components/featured_components/Feed";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddSong from "./Components/Pages/AddSong";
import Albums from "./Components/Pages/albums";
import Mysongs from "./Components/Pages/Mysongs";
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <Feed />
              </Home>
            }
          />
          <Route
            path="/albums"
            element={
              <Home>
                <Albums />
              </Home>
            }
          />
          <Route
            path="addsong"
            element={
              <Home>
                <AddSong />
              </Home>
            }
          />

          <Route
            path="/mysongs"
            element={
              <Home>
                <Mysongs />
              </Home>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
