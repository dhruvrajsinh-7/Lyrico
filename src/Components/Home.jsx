import React from "react";
import Feed from "./featured_components/Feed";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Feed />
    </div>
  );
};

export default Home;
