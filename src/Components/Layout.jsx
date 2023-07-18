import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Musicplayer from "./featured_components/MusicPlayer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full flex-1">
        <Navbar />
        {children}
      </div>
      <Musicplayer />
    </div>
  );
};

export default Layout;
