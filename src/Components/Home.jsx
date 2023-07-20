import React from "react";
import Feed from "./featured_components/Feed";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MusicPlayer from "./featured_components/MusicPlayer";

const Home = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto">
        <div className="w-full h-1/10 items-center justify-end">
          <Navbar />
        </div>
        <div className="p-8 pt-0 overflow-auto">
          <Feed />
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Home;
