import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Musicplayer from "./featured_components/MusicPlayer";
const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex-grow bg-gray-100">feed</div>
      </div>
    </div>
  );
};

export default Home;
