import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Musicplayer from "./featured_components/MusicPlayer";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full flex-1">
        <Navbar />
        {/* Add the main content here */}
      </div>
      <Musicplayer />
    </div>
  );
};

export default Home;
