import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Musicplayer from "./featured_components/Musicplayer";

const Home = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="w-4/5 h-full overflow-auto">
        <div className="w-full h-1/10 items-center justify-end">
          <Navbar />
        </div>
        <div className="p-8 pt-0 overflow-auto">{children}</div>
      </div>
      <Musicplayer />
    </div>
  );
};

export default Home;
